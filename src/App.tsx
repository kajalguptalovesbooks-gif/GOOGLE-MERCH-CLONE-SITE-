import React, { useState, useEffect, useCallback } from 'react';
import { PRODUCTS, BUNDLE_ITEMS } from './data/products';
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

  // Trigger brief cart pulse animation
  const triggerCartPulse = useCallback(() => {
    setCartPulse(true);
    setTimeout(() => setCartPulse(false), 600);
  }, []);

  // Add product to cart
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
  };

  // Quick Add handler from card
  const handleQuickAdd = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    handleAddToCart(product, 1, product.sizes ? product.sizes[0] : undefined);
  };

  // 1-Click Bundle Add
  const handleAddBundleItem = (bundleItem: BundleItem) => {
    // Find or convert bundle item to product
    const mockProduct: Product = {
      id: bundleItem.id,
      name: bundleItem.name,
      category: 'Stationery & Pins',
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

  // Proceed to Checkout
  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  // Place order
  const handlePlaceOrder = (order: ConfirmedOrder) => {
    setConfirmedOrder(order);
    setIsCheckoutOpen(false);
    setCart([]);
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

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
        onOpenGA4Deck={() => setIsGA4DeckOpen(true)}
        checkoutMode={checkoutMode}
        cartPulse={cartPulse}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Module A: Z-Pattern Hero Banner & Category Viewport Entries */}
        <DataDrivenHeroBanner
          products={PRODUCTS}
          region={region}
          onSelectProduct={(p) => setSelectedProduct(p)}
          onSelectCategory={(cat) => setSelectedCategory(cat)}
          onOpenGA4Deck={() => setIsGA4DeckOpen(true)}
        />

        {/* Module A & C: Data-Backed Catalog Listing */}
        <ProductListing
          products={PRODUCTS}
          region={region}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onSelectProduct={(p) => setSelectedProduct(p)}
          onQuickAdd={handleQuickAdd}
          justAddedId={justAddedId}
          onOpenGA4Deck={() => setIsGA4DeckOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        region={region}
        onOpenGA4Deck={() => setIsGA4DeckOpen(true)}
        onSelectCategory={setSelectedCategory}
      />

      {/* Module B: Enhanced Product Detail Page Modal */}
      <ProductDetailModal
        product={selectedProduct}
        region={region}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onAddBundleItem={handleAddBundleItem}
        onOpenGA4Deck={() => setIsGA4DeckOpen(true)}
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
        onOpenGA4Deck={() => setIsGA4DeckOpen(true)}
      />

      {/* Module C: Streamlined Single-Page Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cart}
        region={region}
        checkoutMode={checkoutMode}
        onPlaceOrder={handlePlaceOrder}
        onOpenGA4Deck={() => setIsGA4DeckOpen(true)}
      />

      {/* Order Confirmation */}
      <OrderConfirmationModal
        order={confirmedOrder}
        onClose={() => setConfirmedOrder(null)}
        onOpenGA4Deck={() => setIsGA4DeckOpen(true)}
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
      />
    </div>
  );
}
