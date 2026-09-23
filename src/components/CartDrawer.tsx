import React, { useState, useEffect } from 'react';
import {
  X,
  Trash2,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  Truck,
  Sparkles,
  Lock,
  Clock,
  Plus,
  HelpCircle,
  AlertTriangle,
  Info,
} from 'lucide-react';
import { CartItem, Region, CheckoutMode, Product } from '../types';
import { calculateTransparentShipping, BUNDLE_ITEMS } from '../data/products';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  region: Region;
  checkoutMode: CheckoutMode;
  onUpdateQuantity: (cartItemId: string, newQty: number) => void;
  onRemoveItem: (cartItemId: string) => void;
  onProceedToCheckout: () => void;
  onSelectCategory?: (category: string) => void;
  onAddQuickItem?: (product: Product) => void;
  onOpenGA4Deck?: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  region,
  checkoutMode,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
  onSelectCategory,
  onAddQuickItem,
  onOpenGA4Deck,
}) => {
  const [zipInput, setZipInput] = useState<string>('94043');
  const [reservationSeconds, setReservationSeconds] = useState<number>(899); // 14:59

  // Reservation countdown timer (Module C Trust & Urgency)
  useEffect(() => {
    if (!isOpen) return;
    const timer = setInterval(() => {
      setReservationSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [isOpen]);

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  if (!isOpen) return null;

  // Calculate Subtotals
  const subtotalINR = items.reduce((acc, item) => acc + item.product.priceINR * item.quantity, 0);
  const subtotalUSD = items.reduce((acc, item) => acc + item.product.priceUSD * item.quantity, 0);

  // In Data-Optimized mode: Transparent shipping calculation
  // In Baseline mode: Hidden until Step 2 (simulating old store behavior)
  const shippingInfo = calculateTransparentShipping(subtotalUSD, subtotalINR, region === 'IN' ? 'INR' : 'USD', zipInput);

  const deliveryFee = checkoutMode === 'optimized' ? shippingInfo.cost : 0; // In baseline, fee is hidden at cart review!
  const totalUSD = subtotalUSD + (checkoutMode === 'optimized' ? shippingInfo.cost : 0);
  const totalINR = subtotalINR + (checkoutMode === 'optimized' ? shippingInfo.cost : 0);

  const thresholdTarget = region === 'IN' ? 1999 : 50.0;
  const currentSubtotal = region === 'IN' ? subtotalINR : subtotalUSD;
  const remainingForFree = Math.max(0, thresholdTarget - currentSubtotal);
  const progressPercent = Math.min(100, Math.round((currentSubtotal / thresholdTarget) * 100));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between border-l border-[#DADCE0] animate-in slide-in-from-right duration-250">
        {/* Cart Header */}
        <div className="p-4 sm:p-5 border-b border-[#E8EAED] bg-white flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-[#202124]">
                Shopping Bag ({items.reduce((sum, i) => sum + i.quantity, 0)})
              </h2>
              <span className="text-[11px] text-[#5F6368]">
                Currency: {region === 'IN' ? 'INR (₹)' : 'USD ($)'}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#5F6368] hover:text-[#202124] hover:bg-[#F1F3F4] transition-colors cursor-pointer"
            title="Close bag"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Urgency & Reservation Banner (Module C) */}
        {items.length > 0 && (
          <div className="bg-[#FEF7E0] border-b border-[#FEEFC3] px-4 py-2 flex items-center justify-between text-xs text-[#7A4B00]">
            <div className="flex items-center space-x-1.5">
              <Clock className="w-3.5 h-3.5 text-[#E37400] animate-pulse" />
              <span className="font-semibold">Items reserved for:</span>
            </div>
            <span className="font-mono font-bold bg-white/80 px-2 py-0.5 rounded-md border border-[#FEEFC3]">
              {formatTimer(reservationSeconds)}
            </span>
          </div>
        )}

        {/* Dynamic Free Shipping Progress Bar (Module C Core Requirement) */}
        {items.length > 0 && checkoutMode === 'optimized' && (
          <div className="p-3.5 bg-white border-b border-[#E8EAED] space-y-2">
            {remainingForFree === 0 ? (
              <div className="p-2.5 rounded-xl bg-[#E6F4EA] border border-[#CEEAD6] text-[#137333] text-xs font-bold flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#188038] shrink-0" />
                <span>Congratulations! You've unlocked FREE Standard Shipping.</span>
              </div>
            ) : (
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-medium text-[#3C4043]">
                  <span className="flex items-center gap-1">
                    <Truck className="w-3.5 h-3.5 text-[#1A73E8]" />
                    <span>
                      Add{' '}
                      <strong className="text-[#1A73E8]">
                        {region === 'IN' ? `₹${remainingForFree.toLocaleString('en-IN')}` : `$${remainingForFree.toFixed(2)}`}
                      </strong>{' '}
                      more to unlock <strong>FREE Shipping</strong>!
                    </span>
                  </span>
                  <span className="font-bold text-[#1A73E8]">{progressPercent}%</span>
                </div>

                <div className="h-2 w-full bg-[#F1F3F4] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#1A73E8] to-[#34A853] rounded-full transition-all duration-500"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {/* Baseline Warning notice if user toggled to baseline mode */}
        {items.length > 0 && checkoutMode === 'baseline' && (
          <div className="p-3 bg-[#FCE8E6] border-b border-[#FAD2CF] text-[#C5221F] text-xs flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-[#EA4335] shrink-0 mt-0.5" />
            <div>
              <strong>Control Variant Active:</strong> Shipping costs are hidden until Step 2 of checkout (representing the original 41.1% drop-off bottleneck).
            </div>
          </div>
        )}

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 divide-y divide-[#F1F3F4]">
          {items.length === 0 ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#F8F9FA] flex items-center justify-center mx-auto text-[#BDC1C6] border border-[#E8EAED]">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-bold text-[#202124] text-base">Your shopping bag is empty</h3>
                <p className="text-xs text-[#5F6368] max-w-xs mx-auto mt-1 leading-relaxed">
                  Explore our best-seller <em>Google Marine Layer Pullover</em> or the trending <em>Android Classic Plushie</em>:
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 max-w-xs mx-auto pt-2">
                {['Apparel', 'Android Collectibles', 'Drinkware', 'Lifestyle & Gear'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      if (onSelectCategory) onSelectCategory(cat);
                      onClose();
                    }}
                    className="p-2.5 rounded-xl border border-[#DADCE0] hover:border-[#1A73E8] hover:bg-[#E8F0FE]/40 text-xs font-semibold text-[#3C4043] transition-colors text-center cursor-pointer"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="pt-4 first:pt-0 flex space-x-3">
                {/* Thumbnail */}
                <div className="w-20 h-20 bg-[#F8F9FA] rounded-xl p-2 shrink-0 border border-[#E8EAED] flex items-center justify-center">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-full h-full object-contain mix-blend-multiply"
                  />
                </div>

                {/* Info & Quantity */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h4 className="text-xs font-bold text-[#202124] line-clamp-2">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-[#9AA0A6] hover:text-[#EA4335] p-1 transition-colors cursor-pointer"
                        title="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {(item.selectedSize || item.selectedColor) && (
                      <div className="text-[11px] text-[#70757A] mt-0.5">
                        {item.selectedSize && <span>Size: {item.selectedSize}</span>}
                        {item.selectedSize && item.selectedColor && <span> • </span>}
                        {item.selectedColor && <span>Color: {item.selectedColor}</span>}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    <div className="font-extrabold text-sm text-[#202124]">
                      {region === 'IN' ? (
                        <span>₹{(item.product.priceINR * item.quantity).toLocaleString('en-IN')}</span>
                      ) : (
                        <span>${(item.product.priceUSD * item.quantity).toFixed(2)}</span>
                      )}
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center border border-[#DADCE0] rounded-lg bg-[#F8F9FA] overflow-hidden">
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center text-xs font-bold text-[#5F6368] hover:bg-white transition-colors cursor-pointer"
                      >
                        -
                      </button>
                      <span className="w-7 text-center text-xs font-bold text-[#202124]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center text-xs font-bold text-[#5F6368] hover:bg-white transition-colors cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}

          {/* 1-Click Free Shipping Booster Item Recommendation (Module C) */}
          {items.length > 0 && remainingForFree > 0 && checkoutMode === 'optimized' && (
            <div className="pt-4">
              <div className="p-3 bg-[#E8F0FE]/40 rounded-xl border border-[#D2E3FC] space-y-2">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-bold text-[#174EA6] flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#1A73E8]" />
                    <span>Instant Threshold Booster</span>
                  </span>
                  <span className="text-[#5F6368]">Clear Free Shipping</span>
                </div>

                <div className="flex items-center justify-between gap-2 bg-white p-2.5 rounded-lg border border-[#E8EAED]">
                  <div className="flex items-center space-x-2">
                    <img
                      src={BUNDLE_ITEMS['android-pin'].image}
                      alt="Booster"
                      className="w-8 h-8 object-contain mix-blend-multiply rounded"
                    />
                    <div>
                      <div className="text-xs font-bold text-[#202124]">
                        Android Bugdroid Pin
                      </div>
                      <div className="text-[11px] text-[#188038] font-semibold">
                        {region === 'IN' ? '₹750' : '$9.00'} • Unlocks Free Delivery
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      if (onAddQuickItem) {
                        onAddQuickItem({
                          id: BUNDLE_ITEMS['android-pin'].id,
                          name: BUNDLE_ITEMS['android-pin'].name,
                          category: 'Stationery & Pins',
                          priceUSD: BUNDLE_ITEMS['android-pin'].priceUSD,
                          priceINR: BUNDLE_ITEMS['android-pin'].priceINR,
                          image: BUNDLE_ITEMS['android-pin'].image,
                          gallery: [BUNDLE_ITEMS['android-pin'].image],
                          rating: 4.9,
                          reviewsCount: 189,
                          description: 'Collectible pin set to clear shipping threshold.',
                          inStock: true,
                        });
                      }
                    }}
                    className="px-2.5 py-1 bg-[#1A73E8] hover:bg-[#1765CC] text-white text-[11px] font-bold rounded-lg shadow-2xs flex items-center gap-1 cursor-pointer"
                  >
                    <Plus className="w-3 h-3" />
                    <span>Add</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Cart Summary & Checkout CTA */}
        {items.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-[#E8EAED] bg-[#F8F9FA] space-y-3">
            {/* Transparent Shipping Calculator (Module C: Eliminates 41.1% drop-off) */}
            {checkoutMode === 'optimized' ? (
              <div className="space-y-2 p-3 bg-white rounded-xl border border-[#E8EAED] text-xs">
                <div className="flex items-center justify-between font-semibold text-[#202124]">
                  <span className="flex items-center gap-1.5">
                    <Truck className="w-3.5 h-3.5 text-[#188038]" />
                    <span>Transparent Shipping Estimate</span>
                  </span>
                  <span className="text-[11px] text-[#1A73E8]">Pre-calculated</span>
                </div>

                <div className="flex items-center justify-between text-[11px] text-[#5F6368]">
                  <span>Delivery destination:</span>
                  <div className="flex items-center gap-1">
                    <input
                      type="text"
                      value={zipInput}
                      onChange={(e) => setZipInput(e.target.value)}
                      className="w-16 px-1.5 py-0.5 border border-[#DADCE0] rounded text-[11px] text-center font-mono"
                      placeholder="Zip"
                    />
                    <span>({shippingInfo.estimatedDelivery})</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-2.5 bg-white rounded-xl border border-[#E8EAED] text-xs text-[#5F6368] flex items-center justify-between">
                <span>Shipping:</span>
                <span className="italic text-[#C5221F]">Calculated at Step 2</span>
              </div>
            )}

            {/* Calculations Breakdown */}
            <div className="space-y-1.5 text-xs text-[#5F6368]">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-bold text-[#202124]">
                  {region === 'IN' ? `₹${subtotalINR.toLocaleString('en-IN')}` : `$${subtotalUSD.toFixed(2)}`}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Shipping & Handling</span>
                <span>
                  {checkoutMode === 'optimized' ? (
                    shippingInfo.isFree ? (
                      <span className="text-[#188038] font-bold">FREE ($0.00)</span>
                    ) : region === 'IN' ? (
                      `₹${shippingInfo.cost}`
                    ) : (
                      `$${shippingInfo.cost.toFixed(2)}`
                    )
                  ) : (
                    <span className="text-[#C5221F] font-medium">Revealed at Step 2</span>
                  )}
                </span>
              </div>

              <div className="flex justify-between pt-2 border-t border-[#DADCE0] text-sm font-extrabold text-[#202124]">
                <span>Estimated Total</span>
                <span>
                  {region === 'IN' ? `₹${totalINR.toLocaleString('en-IN')}` : `$${totalUSD.toFixed(2)}`}
                </span>
              </div>
            </div>

            {/* Proceed to Checkout CTA */}
            <button
              id="proceed-to-checkout-btn"
              onClick={onProceedToCheckout}
              className="w-full py-3.5 bg-[#1A73E8] hover:bg-[#1765CC] text-white font-bold text-sm rounded-xl flex items-center justify-center space-x-2 shadow-sm transition-all cursor-pointer"
            >
              <Lock className="w-4 h-4" />
              <span>Proceed to Streamlined Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Trust & Security Badges (Module C) */}
            <div className="pt-1 flex items-center justify-between text-[11px] text-[#5F6368]">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#188038]" />
                <span>256-Bit SSL Encrypted</span>
              </span>
              <span className="font-semibold text-[#1A73E8]">Google Pay & Cards</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
