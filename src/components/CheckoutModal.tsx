import React, { useState } from 'react';
import {
  X,
  ShieldCheck,
  CreditCard,
  CheckCircle2,
  ArrowLeft,
  Truck,
  Lock,
  Clock,
  Sparkles,
  AlertTriangle,
  HelpCircle,
} from 'lucide-react';
import { CartItem, Region, CheckoutFormData, ConfirmedOrder, CheckoutMode } from '../types';
import { calculateTransparentShipping } from '../data/products';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  region: Region;
  checkoutMode: CheckoutMode;
  onPlaceOrder: (order: ConfirmedOrder) => void;
  onOpenGA4Deck?: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  region,
  checkoutMode,
  onPlaceOrder,
  onOpenGA4Deck,
}) => {
  if (!isOpen) return null;

  const [activeStep, setActiveStep] = useState<'details' | 'payment'>('details');
  const [formData, setFormData] = useState<CheckoutFormData>({
    fullName: 'Alex Chen',
    email: 'alex.chen@example.com',
    phone: '+1 (555) 234-5678',
    address: '1600 Amphitheatre Pkwy',
    city: 'Mountain View',
    state: 'California',
    pinCode: '94043',
    country: region === 'IN' ? 'India' : 'United States',
    paymentMethod: 'gpay',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Subtotals
  const subtotalINR = items.reduce((acc, item) => acc + item.product.priceINR * item.quantity, 0);
  const subtotalUSD = items.reduce((acc, item) => acc + item.product.priceUSD * item.quantity, 0);

  const shippingInfo = calculateTransparentShipping(
    subtotalUSD,
    subtotalINR,
    region === 'IN' ? 'INR' : 'USD',
    formData.pinCode
  );

  const isFreeShipping = shippingInfo.isFree;
  const deliveryFee = isFreeShipping ? 0 : region === 'IN' ? 150 : 5.0;

  const totalUSD = subtotalUSD + deliveryFee;
  const totalINR = subtotalINR + deliveryFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const order: ConfirmedOrder = {
        orderId: `GMS-${region}-${Math.floor(100000 + Math.random() * 900000)}`,
        createdAt: new Date().toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        }),
        items,
        subtotal: region === 'IN' ? subtotalINR : subtotalUSD,
        deliveryFee,
        discount: 0,
        total: region === 'IN' ? totalINR : totalUSD,
        currency: region === 'IN' ? 'INR' : 'USD',
        shippingDetails: formData,
        estimatedDeliveryDate: shippingInfo.estimatedDelivery,
        paymentMethod: formData.paymentMethod === 'gpay' ? 'Google Pay' : 'Credit / Debit Card',
        freeShippingUnlocked: isFreeShipping,
      };

      setIsSubmitting(false);
      onPlaceOrder(order);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      <div className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[94vh] overflow-y-auto shadow-2xl border border-[#DADCE0]">
        {/* Header Bar */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-xs px-6 py-4 border-b border-[#E8EAED] flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button
              onClick={onClose}
              className="p-1 rounded-full text-[#5F6368] hover:text-[#202124] hover:bg-[#F1F3F4] transition-colors mr-1 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-[#202124] flex items-center gap-2">
                <span>Google Merchandise Store Checkout</span>
                <span className="text-[10px] uppercase font-extrabold bg-[#E6F4EA] text-[#137333] px-2.5 py-0.5 rounded-full">
                  Streamlined
                </span>
              </h2>
              <p className="text-xs text-[#5F6368]">
                Module C: Single-Page Transparent Checkout (No surprise Step 2 fees)
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#5F6368] hover:text-[#202124] hover:bg-[#F1F3F4] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Urgency & Step 2 Context Header */}
        <div className="bg-[#E8F0FE]/70 border-b border-[#D2E3FC] px-6 py-2.5 flex flex-wrap items-center justify-between text-xs text-[#174EA6] gap-2">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-[#1A73E8]" />
            <span className="font-semibold">
              Transparent Pricing Guarantee: All shipping & tax displayed upfront.
            </span>
          </div>

          {onOpenGA4Deck && (
            <button
              onClick={onOpenGA4Deck}
              className="text-xs font-bold text-[#1A73E8] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Why Step 2 Was Rebuilt (GA4 41.1% Drop)</span>
            </button>
          )}
        </div>

        {/* Form & Summary Container */}
        <div className="p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Checkout Form (Shipping & Payment) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Step Navigation Pill */}
              <div className="flex items-center space-x-2 text-xs font-semibold pb-2 border-b border-[#E8EAED]">
                <button
                  type="button"
                  onClick={() => setActiveStep('details')}
                  className={`px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                    activeStep === 'details'
                      ? 'bg-[#1A73E8] text-white shadow-2xs font-bold'
                      : 'bg-[#F1F3F4] text-[#5F6368]'
                  }`}
                >
                  1. Shipping & Contact
                </button>
                <span className="text-[#BDC1C6]">→</span>
                <button
                  type="button"
                  onClick={() => setActiveStep('payment')}
                  className={`px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                    activeStep === 'payment'
                      ? 'bg-[#1A73E8] text-white shadow-2xs font-bold'
                      : 'bg-[#F1F3F4] text-[#5F6368]'
                  }`}
                >
                  2. Payment Method
                </button>
              </div>

              {activeStep === 'details' ? (
                <div className="space-y-4 animate-in fade-in duration-150">
                  <h3 className="font-bold text-sm text-[#202124] flex items-center gap-2">
                    <Truck className="w-4 h-4 text-[#1A73E8]" />
                    <span>Fulfillment Address (Pre-Calculated Delivery)</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <label className="block text-[11px] font-semibold text-[#5F6368] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-[#DADCE0] focus:border-[#1A73E8] focus:ring-1 focus:ring-[#1A73E8] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-[#5F6368] mb-1">
                        Email for Tracking Updates *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-[#DADCE0] focus:border-[#1A73E8] focus:ring-1 focus:ring-[#1A73E8] outline-none"
                      />
                    </div>
                  </div>

                  <div className="text-xs">
                    <label className="block text-[11px] font-semibold text-[#5F6368] mb-1">
                      Street Address *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-[#DADCE0] focus:border-[#1A73E8] focus:ring-1 focus:ring-[#1A73E8] outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-3 text-xs">
                    <div>
                      <label className="block text-[11px] font-semibold text-[#5F6368] mb-1">
                        City *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-[#DADCE0] focus:border-[#1A73E8] focus:ring-1 focus:ring-[#1A73E8] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-[#5F6368] mb-1">
                        State / Province *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-[#DADCE0] focus:border-[#1A73E8] focus:ring-1 focus:ring-[#1A73E8] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-[#5F6368] mb-1">
                        ZIP / Postal Code *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.pinCode}
                        onChange={(e) => setFormData({ ...formData, pinCode: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-[#DADCE0] focus:border-[#1A73E8] focus:ring-1 focus:ring-[#1A73E8] outline-none font-mono"
                      />
                    </div>
                  </div>

                  {/* Shipping Method Card (Already transparent!) */}
                  <div className="p-3.5 bg-[#F8F9FA] rounded-xl border border-[#DADCE0] space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-[#188038]" />
                        <span className="font-bold text-[#202124]">
                          {isFreeShipping ? 'Standard Free Shipping (Unlocked)' : 'Standard Ground Delivery'}
                        </span>
                      </div>
                      <span className="font-extrabold text-xs text-[#188038]">
                        {isFreeShipping ? 'FREE' : region === 'IN' ? '₹150' : '$5.00'}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#5F6368] pl-6">
                      Estimated delivery: <strong>{shippingInfo.estimatedDelivery}</strong> via {shippingInfo.carrier}
                    </p>
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setActiveStep('payment')}
                      className="px-6 py-3 bg-[#1A73E8] hover:bg-[#1765CC] text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
                    >
                      Continue to Payment Method →
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4 animate-in fade-in duration-150">
                  <h3 className="font-bold text-sm text-[#202124] flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-[#1A73E8]" />
                    <span>Select Payment Option</span>
                  </h3>

                  {/* Payment Options Radio Group */}
                  <div className="space-y-2.5">
                    {[
                      {
                        id: 'gpay',
                        title: 'Google Pay Express',
                        desc: 'Fast, encrypted 1-tap checkout with your Google account',
                        badge: 'Recommended',
                      },
                      {
                        id: 'card',
                        title: 'Credit / Debit Card',
                        desc: 'Visa, Mastercard, American Express, Discover',
                      },
                      {
                        id: 'paypal',
                        title: 'PayPal',
                        desc: 'Pay using your PayPal balance or bank account',
                      },
                    ].map((method) => (
                      <label
                        key={method.id}
                        className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                          formData.paymentMethod === method.id
                            ? 'border-[#1A73E8] bg-[#E8F0FE]/20 ring-1 ring-[#1A73E8]'
                            : 'border-[#DADCE0] hover:border-[#BDC1C6]'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <input
                            type="radio"
                            name="paymentMethod"
                            checked={formData.paymentMethod === method.id}
                            onChange={() =>
                              setFormData({ ...formData, paymentMethod: method.id as any })
                            }
                            className="text-[#1A73E8] focus:ring-[#1A73E8]"
                          />
                          <div>
                            <div className="text-xs font-bold text-[#202124] flex items-center gap-2">
                              <span>{method.title}</span>
                              {method.badge && (
                                <span className="text-[10px] bg-[#E6F4EA] text-[#137333] font-bold px-2 py-0.5 rounded-full">
                                  {method.badge}
                                </span>
                              )}
                            </div>
                            <span className="text-[11px] text-[#5F6368] block mt-0.5">
                              {method.desc}
                            </span>
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>

                  <div className="p-3 bg-[#F8F9FA] rounded-xl border border-[#E8EAED] text-xs text-[#5F6368] flex items-center gap-2">
                    <Lock className="w-4 h-4 text-[#188038] shrink-0" />
                    <span>
                      Demo checkout simulation: No actual financial charge will occur.
                    </span>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setActiveStep('details')}
                      className="text-xs font-bold text-[#5F6368] hover:text-[#202124] cursor-pointer"
                    >
                      ← Back to Shipping
                    </button>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-3.5 bg-[#1A73E8] hover:bg-[#1765CC] text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer flex items-center space-x-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Processing Order...</span>
                      ) : (
                        <>
                          <Lock className="w-4 h-4" />
                          <span>
                            Complete Order (
                            {region === 'IN' ? `₹${totalINR.toLocaleString('en-IN')}` : `$${totalUSD.toFixed(2)}`}
                            )
                          </span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Order Summary & Reassurance */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-[#F8F9FA] p-5 rounded-2xl border border-[#DADCE0] space-y-4">
                <h3 className="font-bold text-xs uppercase tracking-wider text-[#202124]">
                  Order Summary ({items.reduce((s, i) => s + i.quantity, 0)} Items)
                </h3>

                {/* Items preview list */}
                <div className="space-y-3 max-h-56 overflow-y-auto divide-y divide-[#E8EAED] pr-1">
                  {items.map((item) => (
                    <div key={item.id} className="pt-2 first:pt-0 flex items-center space-x-3 text-xs">
                      <div className="w-12 h-12 bg-white rounded-lg p-1 shrink-0 border border-[#DADCE0] flex items-center justify-center">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-contain mix-blend-multiply"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-[#202124] truncate">{item.product.name}</h4>
                        <div className="text-[11px] text-[#5F6368]">
                          Qty: {item.quantity} {item.selectedSize ? `• Size: ${item.selectedSize}` : ''}
                        </div>
                      </div>
                      <div className="font-bold text-[#202124] text-xs">
                        {region === 'IN' ? (
                          <span>₹{(item.product.priceINR * item.quantity).toLocaleString('en-IN')}</span>
                        ) : (
                          <span>${(item.product.priceUSD * item.quantity).toFixed(2)}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pricing Details */}
                <div className="space-y-2 pt-3 border-t border-[#DADCE0] text-xs text-[#5F6368]">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-bold text-[#202124]">
                      {region === 'IN' ? `₹${subtotalINR.toLocaleString('en-IN')}` : `$${subtotalUSD.toFixed(2)}`}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span>Shipping & Handling</span>
                    <span>
                      {isFreeShipping ? (
                        <span className="text-[#188038] font-bold">FREE ($0.00)</span>
                      ) : (
                        <span>{region === 'IN' ? `₹${deliveryFee}` : `$${deliveryFee.toFixed(2)}`}</span>
                      )}
                    </span>
                  </div>

                  <div className="flex justify-between pt-2 border-t border-[#DADCE0] text-sm font-extrabold text-[#202124]">
                    <span>Total Due</span>
                    <span>
                      {region === 'IN' ? `₹${totalINR.toLocaleString('en-IN')}` : `$${totalUSD.toFixed(2)}`}
                    </span>
                  </div>
                </div>
              </div>

              {/* Secure Trust Guarantee */}
              <div className="p-4 bg-white rounded-2xl border border-[#DADCE0] space-y-2 text-xs text-[#5F6368]">
                <div className="flex items-center space-x-2 font-bold text-[#202124]">
                  <ShieldCheck className="w-4 h-4 text-[#188038]" />
                  <span>Google Store Satisfaction Guarantee</span>
                </div>
                <p className="text-[11px] leading-relaxed">
                  Transparent shipping policy ensures you are never surprised by hidden checkout fees. 30-day money-back guarantee with complimentary return shipping on eligible items.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
