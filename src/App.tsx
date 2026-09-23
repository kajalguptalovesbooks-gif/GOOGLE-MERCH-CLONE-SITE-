import React, { useState, useEffect, useCallback } from 'react';
import { PRODUCTS } from './data/products';
import {
  Product,
  Category,
  Region,
  CartItem,
  ConfirmedOrder,
  CheckoutMode,
  BundleItem,
} from './types';
import { Header } from './components/Header';
import { DataDrivenHeroBanner } from './components/DataDrivenHeroBanner';
import { ProductListing } from './components/ProductListing';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { OrderConfirmationModal } from './components/OrderConfirmationModal';
import { GA4VivaInspector } from './components/GA4VivaInspector';
import { Footer } from './components/Footer';
import {
  trackPageView,
  trackViewItem,
  trackAddToCart,
  trackBeginCheckout,
  trackPurchase,
  subscribeGA4Events,
  GA4EventRecord,
} from './utils/analytics';
import { Activity } from 'lucide-react';

export default function App() {
  // Region & Mode States
  const [region, setRegion] = useState<Region>('US');
  const [checkoutMode, setCheckoutMode] = useState<CheckoutMode>('optimized');
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Cart State (Initialized with the Android Plushie to immediately demonstrate the Step 2 bottleneck and dynamic bundle recommendation)
  const [cart, setCart] = useState<CartItem[]>(() => {
    const plushie = PRODUCTS.find((p) => p.id === 'android-classic-plushie') || PRODUCTS[1];
    return [
      {
        id: `cart-${plushie.id}-init`,
        product: plushie,
        quantity: 1,
      },
    ];
  });
  const [justAddedId, setJustAddedId] = useState<string | null>(null);
  const [cartPulse, setCartPulse] = useState<boolean>(false);

  // Modals & Panels
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [confirmedOrder, setConfirmedOrder] = useState<ConfirmedOrder | null>(null);
  const [isGA4DeckOpen, setIsGA4DeckOpen] = useState<boolean>(false);
  const [inspectorTab, setInspectorTab] = useState<'questions' | 'funnel' | 'channels' | 'simulator' | 'viva' | 'gtag'>('questions');

  // GA4 Live event pill indicator
  const [latestEvent, setLatestEvent] = useState<GA4EventRecord | null>(null);

  // Subscribe to live events for real-time indicator
  useEffect(() => {
    return subscribeGA4Events((evt) => {
      setLatestEvent(evt);
    });
  }, []);

  // GA4: page_view on load and category switch
  useEffect(() => {
    trackPageView(
      selectedCategory === 'All'
        ? 'Google Merchandise Store — Official Store'
        : `Google Merchandise Store — ${selectedCategory}`,
      window.location.href
    );
  }, [selectedCategory]);

  // Trigger brief cart pulse animation
  const triggerCartPulse = useCallback(() => {
    setCartPulse(true);
    setTimeout(() => setCartPulse(false), 600);
  }, []);

  // GA4: view_item when opening product details
  const handleSelectProduct = (product: Product | null) => {
    setSelectedProduct(product);
    if (product) {
      trackViewItem(product, region === 'IN' ? 'INR' : 'USD');
    }
  };

  // Add product to cart + GA4 add_to_cart
  const handleAddToCart = (
    product: Product,
    quantity: number = 1,
    size?: string,
    color?: string
  ) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedSize === size &&
          item.selectedColor === color
      );

      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity,
        };
        return next;
      }

      return [
        ...prev,
        {
          id: `cart-${product.id}-${Date.now()}`,
          product,
          quantity,
          selectedSize: size,
          selectedColor: color,
        },
      ];
    });

    setJustAddedId(product.id);
    setTimeout(() => setJustAddedId(null), 1800);
    triggerCartPulse();

    // Fire GA4 add_to_cart
    trackAddToCart(product, quantity, region === 'IN' ? 'INR' : 'USD', size, color);
  };

  // Quick Add handler from card
  const handleQuickAdd = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    handleAddToCart(product, 1, product.sizes ? product.sizes[0] : undefined);
  };

  // 1-Click Bundle Add
  const handleAddBundleItem = (bundleItem: BundleItem) => {
    const mockProduct: Product = {
      id: bundleItem.id,
      name: bundleItem.name,
      category: (bundleItem.category as Category) || 'Android Collectibles & Plushies',
      priceUSD: bundleItem.priceUSD,
      priceINR: bundleItem.priceINR,
      image: bundleItem.image,
      gallery: [bundleItem.image],
      rating: 4.9,
      reviewsCount: 142,
      description: bundleItem.blurb,
      inStock: true,
      badge: 'Bundle Booster',
    };

    handleAddToCart(mockProduct, 1);
  };

  // Update quantity
  const handleUpdateQuantity = (cartItemId: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveFromCart(cartItemId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === cartItemId ? { ...item, quantity: newQty } : item))
    );
  };

  // Remove from cart
  const handleRemoveFromCart = (cartItemId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== cartItemId));
  };

  // Proceed to Checkout + GA4 begin_checkout
  const handleProceedToCheckout = () => {
    const subtotalUSD = cart.reduce((s, i) => s + i.product.priceUSD * i.quantity, 0);
    const subtotalINR = cart.reduce((s, i) => s + i.product.priceINR * i.quantity, 0);
    const shippingCost =
      region === 'IN' ? (subtotalINR >= 1999 ? 0 : 150) : subtotalUSD >= 50 ? 0 : 5;
    const total = (region === 'IN' ? subtotalINR : subtotalUSD) + shippingCost;

    trackBeginCheckout(cart, total, region === 'IN' ? 'INR' : 'USD', shippingCost);

    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  // Place order + GA4 purchase
  const handlePlaceOrder = (order: ConfirmedOrder) => {
    trackPurchase(order);
    setConfirmedOrder(order);
    setIsCheckoutOpen(false);
    setCart([]);
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const openInspectorToTab = (tab: 'questions' | 'funnel' | 'channels' | 'simulator' | 'viva' | 'gtag') => {
    setInspectorTab(tab);
    setIsGA4DeckOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#202124] flex flex-col font-sans selection:bg-[#E8F0FE] selection:text-[#1A73E8]">
      {/* Header */}
      <Header
        region={region}
        onRegionChange={setRegion}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenGA4Deck={() => openInspectorToTab('questions')}
        checkoutMode={checkoutMode}
        cartPulse={cartPulse}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Module A: Z-Pattern Hero Banner & Category Viewport Entries */}
        <DataDrivenHeroBanner
          products={PRODUCTS}
          region={region}
          onSelectProduct={handleSelectProduct}
          onSelectCategory={(cat) => setSelectedCategory(cat)}
          onOpenGA4Deck={() => openInspectorToTab('questions')}
        />

        {/* Module A & C: Data-Backed Catalog Listing */}
        <ProductListing
          products={PRODUCTS}
          region={region}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onSelectProduct={handleSelectProduct}
          onQuickAdd={handleQuickAdd}
          justAddedId={justAddedId}
          onOpenGA4Deck={() => openInspectorToTab('questions')}
        />
      </main>

      {/* Footer */}
      <Footer
        region={region}
        onOpenGA4Deck={() => openInspectorToTab('viva')}
        onSelectCategory={setSelectedCategory}
      />

      {/* Module B: Enhanced Product Detail Page Modal */}
      <ProductDetailModal
        product={selectedProduct}
        region={region}
        onClose={() => handleSelectProduct(null)}
        onAddToCart={handleAddToCart}
        onAddBundleItem={handleAddBundleItem}
        onOpenGA4Deck={() => openInspectorToTab('questions')}
      />

      {/* Module C: Transparent Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        region={region}
        checkoutMode={checkoutMode}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onProceedToCheckout={handleProceedToCheckout}
        onSelectCategory={(cat) => setSelectedCategory(cat as Category)}
        onAddQuickItem={(p) => handleAddToCart(p, 1)}
        onOpenGA4Deck={() => openInspectorToTab('funnel')}
      />

      {/* Module C: Streamlined Single-Page Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cart}
        region={region}
        checkoutMode={checkoutMode}
        onPlaceOrder={handlePlaceOrder}
        onOpenGA4Deck={() => openInspectorToTab('funnel')}
      />

      {/* Order Confirmation */}
      <OrderConfirmationModal
        order={confirmedOrder}
        onClose={() => setConfirmedOrder(null)}
        onOpenGA4Deck={() => openInspectorToTab('gtag')}
      />

      {/* GA4 5-Question Foundation & Viva Inspector */}
      <GA4VivaInspector
        isOpen={isGA4DeckOpen}
        onClose={() => setIsGA4DeckOpen(false)}
        checkoutMode={checkoutMode}
        onToggleCheckoutMode={() =>
          setCheckoutMode((prev) => (prev === 'optimized' ? 'baseline' : 'optimized'))
        }
        region={region}
        initialTab={inspectorTab}
      />

      {/* Floating GA4 Real-Time Dispatch Pill (Quick Viva / Evaluation Access) */}
      <div className="fixed bottom-4 right-4 z-40">
        <button
          onClick={() => openInspectorToTab('gtag')}
          className="group flex items-center space-x-2 bg-[#202124] text-white hover:bg-[#303134] px-3.5 py-2 rounded-full shadow-lg border border-[#5F6368]/40 transition-all cursor-pointer text-xs"
          title="Open GA4 Real-Time Event Stream"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34A853] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#34A853]"></span>
          </span>
          <Activity className="w-3.5 h-3.5 text-[#8AB4F8]" />
          <span className="font-semibold text-[11px]">
            {latestEvent ? (
              <>
                <span className="text-[#BDC1C6]">GA4:</span>{' '}
                <span className="font-mono text-[#81C995] font-bold">{latestEvent.eventName}</span>
              </>
            ) : (
              'GA4 gtag.js Active'
            )}
          </span>
        </button>
      </div>
    </div>
  );
}
