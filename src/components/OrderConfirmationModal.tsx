import React from 'react';
import {
  CheckCircle2,
  Package,
  Calendar,
  Truck,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  ShoppingBag,
  ExternalLink,
  GraduationCap,
} from 'lucide-react';
import { ConfirmedOrder } from '../types';

interface OrderConfirmationModalProps {
  order: ConfirmedOrder | null;
  onClose: () => void;
  onOpenGA4Deck?: () => void;
}

export const OrderConfirmationModal: React.FC<OrderConfirmationModalProps> = ({
  order,
  onClose,
  onOpenGA4Deck,
}) => {
  if (!order) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      <div className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#DADCE0] p-6 sm:p-8 space-y-6">
        {/* Success Header */}
        <div className="text-center space-y-2">
          <div className="w-16 h-16 rounded-full bg-[#E6F4EA] text-[#137333] flex items-center justify-center mx-auto ring-8 ring-[#E6F4EA]/50">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <span className="text-[10px] font-bold uppercase tracking-wider text-[#137333] bg-[#E6F4EA] px-3 py-0.5 rounded-full inline-block">
            Order Confirmed • Zero Drop-off
          </span>

          <h2 className="text-2xl font-extrabold text-[#202124] tracking-tight">
            Thank you for your order!
          </h2>

          <p className="text-xs text-[#5F6368] max-w-md mx-auto leading-relaxed">
            Order confirmation sent to <strong>{order.shippingDetails.email}</strong>. Your items have been dispatched to the Google packaging center.
          </p>
        </div>

        {/* Viva Assignment Success Callout */}
        <div className="p-4 bg-gradient-to-r from-[#E8F0FE] to-[#F1F3F4] rounded-2xl border border-[#D2E3FC] text-xs text-[#174EA6] space-y-1.5">
          <div className="flex items-center justify-between font-bold">
            <span className="flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-[#1A73E8]" />
              <span>GA4 Viva Funnel Victory:</span>
            </span>
            <span className="text-[#137333] font-bold bg-[#E6F4EA] px-2 py-0.5 rounded-full text-[10px]">
              Funnel Completed (Step 7)
            </span>
          </div>
          <p className="text-[11px] leading-relaxed text-[#1967D2]">
            By displaying transparent shipping upfront and providing a dynamic free-shipping progress bar, this session successfully bypassed the <strong>41.1% Step 2 abandonment cliff</strong> identified in the GA4 Demo Account!
          </p>
        </div>

        {/* Order Details Card */}
        <div className="p-5 bg-[#F8F9FA] rounded-2xl border border-[#DADCE0] space-y-4 text-xs">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 border-b border-[#E8EAED] pb-3">
            <div>
              <span className="text-[10px] uppercase font-bold text-[#5F6368] block">Order Number</span>
              <span className="font-bold text-[#202124] font-mono">{order.orderId}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-[#5F6368] block">Order Date</span>
              <span className="font-bold text-[#202124]">{order.createdAt}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-[#5F6368] block">Estimated Delivery</span>
              <span className="font-bold text-[#188038]">{order.estimatedDeliveryDate}</span>
            </div>
          </div>

          {/* Purchased Items List */}
          <div className="space-y-2">
            <span className="text-[10px] uppercase font-bold text-[#5F6368] block">
              Purchased Merchandise ({order.items.length} unique items)
            </span>
            <div className="space-y-2 max-h-44 overflow-y-auto pr-1">
              {order.items.map((item) => (
                <div key={item.id} className="flex items-center justify-between bg-white p-2.5 rounded-xl border border-[#E8EAED]">
                  <div className="flex items-center space-x-2">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-9 h-9 object-contain mix-blend-multiply"
                    />
                    <div>
                      <h4 className="font-bold text-[#202124]">{item.product.name}</h4>
                      <span className="text-[11px] text-[#5F6368]">
                        Qty: {item.quantity} {item.selectedSize ? `• ${item.selectedSize}` : ''}
                      </span>
                    </div>
                  </div>
                  <div className="font-bold text-[#202124]">
                    {order.currency === 'INR'
                      ? `₹${(item.product.priceINR * item.quantity).toLocaleString('en-IN')}`
                      : `$${(item.product.priceUSD * item.quantity).toFixed(2)}`}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Financials Breakdown */}
          <div className="pt-2 border-t border-[#E8EAED] space-y-1.5 text-xs text-[#5F6368]">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-bold text-[#202124]">
                {order.currency === 'INR'
                  ? `₹${order.subtotal.toLocaleString('en-IN')}`
                  : `$${order.subtotal.toFixed(2)}`}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span className="font-bold text-[#188038]">
                {order.deliveryFee === 0 ? 'FREE ($0.00 Saved)' : `$${order.deliveryFee.toFixed(2)}`}
              </span>
            </div>
            <div className="flex justify-between pt-1 border-t border-[#DADCE0] text-sm font-extrabold text-[#202124]">
              <span>Total Paid</span>
              <span>
                {order.currency === 'INR'
                  ? `₹${order.total.toLocaleString('en-IN')}`
                  : `$${order.total.toFixed(2)}`}
              </span>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          {onOpenGA4Deck && (
            <button
              onClick={() => {
                onClose();
                onOpenGA4Deck();
              }}
              className="px-4 py-2.5 bg-[#F1F3F4] hover:bg-[#E8EAED] text-[#3C4043] rounded-full text-xs font-bold flex items-center space-x-1.5 transition-colors cursor-pointer"
            >
              <GraduationCap className="w-4 h-4 text-[#1A73E8]" />
              <span>Inspect GA4 Viva Rationale</span>
            </button>
          )}

          <button
            onClick={onClose}
            className="flex-1 sm:flex-none px-6 py-2.5 bg-[#1A73E8] hover:bg-[#1765CC] text-white rounded-full text-xs font-bold shadow-xs transition-colors cursor-pointer text-center"
          >
            Continue Browsing Store
          </button>
        </div>
      </div>
    </div>
  );
};
