import React, { useState } from 'react';
import {
  X,
  Star,
  Truck,
  CheckCircle2,
  ShieldCheck,
  Ruler,
  ShoppingBag,
  ArrowRight,
  Sparkles,
  Layers,
  Award,
  Clock,
  Plus,
} from 'lucide-react';
import { Product, Region, BundleItem } from '../types';
import { SizeGuideModal } from './SizeGuideModal';

interface ProductDetailModalProps {
  product: Product | null;
  region: Region;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number, size?: string, color?: string) => void;
  onAddBundleItem?: (bundleItem: BundleItem) => void;
  onOpenGA4Deck?: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  region,
  onClose,
  onAddToCart,
  onAddBundleItem,
  onOpenGA4Deck,
}) => {
  if (!product) return null;

  const [selectedImage, setSelectedImage] = useState<string>(product.image);
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes ? product.sizes[0] : '');
  const [selectedColor, setSelectedColor] = useState<string>(
    product.colors ? product.colors[0].name : ''
  );
  const [quantity, setQuantity] = useState<number>(1);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState<boolean>(false);
  const [zipInput, setZipInput] = useState<string>('94043');
  const [isAddedSuccess, setIsAddedSuccess] = useState<boolean>(false);

  const isFreeShippingEligible =
    region === 'IN' ? product.priceINR >= 1999 : product.priceUSD >= 50;

  const handleAdd = () => {
    onAddToCart(product, quantity, selectedSize, selectedColor);
    setIsAddedSuccess(true);
    setTimeout(() => setIsAddedSuccess(false), 2000);
  };

  const handleAddBundle = () => {
    if (product.bundleRecommendation && onAddBundleItem) {
      onAddBundleItem(product.bundleRecommendation);
      setIsAddedSuccess(true);
      setTimeout(() => setIsAddedSuccess(false), 2000);
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
        <div className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#DADCE0]">
          {/* Top Bar */}
          <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-xs px-6 py-4 border-b border-[#E8EAED] flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-bold uppercase tracking-wider bg-[#F1F3F4] text-[#3C4043] px-2.5 py-1 rounded-full">
                {product.category}
              </span>
              {product.badge && (
                <span className="text-[10px] font-bold bg-[#E8F0FE] text-[#1A73E8] px-2.5 py-1 rounded-full">
                  {product.badge}
                </span>
              )}
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-[#5F6368] hover:text-[#202124] hover:bg-[#F1F3F4] transition-colors cursor-pointer"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column: Gallery (Module B: Multi-angle hover gallery) */}
              <div className="lg:col-span-6 space-y-4">
                {/* Main Image Stage */}
                <div className="relative aspect-square w-full bg-[#F8F9FA] rounded-2xl border border-[#E8EAED] flex items-center justify-center p-8 overflow-hidden">
                  <img
                    src={selectedImage}
                    alt={product.name}
                    className="w-full h-full object-contain mix-blend-multiply transition-all duration-300"
                  />

                  {/* Stock pill */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full text-[11px] font-semibold text-[#188038] border border-[#CEEAD6] flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#188038] animate-pulse" />
                    <span>In Stock • Ships in 24h</span>
                  </div>
                </div>

                {/* Multi-Angle Gallery Thumbnails (Module B) */}
                {product.gallery && product.gallery.length > 1 && (
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#5F6368] block">
                      Multi-Angle Views ({product.gallery.length} Angles Available)
                    </span>
                    <div className="flex items-center gap-2 overflow-x-auto pb-1">
                      {product.gallery.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedImage(img)}
                          className={`w-16 h-16 rounded-xl border p-1 shrink-0 bg-[#F8F9FA] transition-all cursor-pointer ${
                            selectedImage === img
                              ? 'border-[#1A73E8] ring-2 ring-[#1A73E8]/20 bg-white'
                              : 'border-[#DADCE0] hover:border-[#BDC1C6]'
                          }`}
                        >
                          <img
                            src={img}
                            alt={`${product.name} angle ${idx + 1}`}
                            className="w-full h-full object-contain mix-blend-multiply"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* GA4 Metric Callout for this product */}
                {product.ga4InsightTag && (
                  <div className="p-3.5 bg-[#E8F0FE]/50 rounded-xl border border-[#D2E3FC] space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-[#174EA6] uppercase tracking-wider flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>GA4 Merchandising Rationale</span>
                      </span>
                      {onOpenGA4Deck && (
                        <button
                          onClick={onOpenGA4Deck}
                          className="text-[10px] text-[#1A73E8] font-bold hover:underline"
                        >
                          View Funnel
                        </button>
                      )}
                    </div>
                    <p className="text-xs text-[#1967D2] leading-relaxed">
                      {product.ga4InsightTag}
                    </p>
                  </div>
                )}
              </div>

              {/* Right Column: Information, Specs, Sizing & Actions */}
              <div className="lg:col-span-6 space-y-5 flex flex-col justify-between">
                <div className="space-y-4">
                  {/* Title & Reviews */}
                  <div>
                    <h1 className="text-2xl font-extrabold text-[#202124] tracking-tight leading-tight">
                      {product.name}
                    </h1>

                    <div className="mt-2 flex items-center space-x-2 text-xs">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? 'fill-[#FBBC04] text-[#FBBC04]'
                                : 'fill-[#DADCE0] text-[#DADCE0]'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="font-bold text-[#202124]">{product.rating}</span>
                      <span className="text-[#5F6368]">({product.reviewsCount} customer reviews)</span>
                    </div>
                  </div>

                  {/* Pricing Stage */}
                  <div className="p-4 bg-[#F8F9FA] rounded-2xl border border-[#E8EAED] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-[#5F6368] uppercase block">
                        Official Store Price
                      </span>
                      <div className="text-2xl font-extrabold text-[#202124]">
                        {region === 'IN' ? (
                          <span>₹{product.priceINR.toLocaleString('en-IN')}</span>
                        ) : (
                          <span>${product.priceUSD.toFixed(2)}</span>
                        )}
                      </div>
                    </div>

                    <div className="text-right">
                      {isFreeShippingEligible ? (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-[#E6F4EA] text-[#137333] border border-[#CEEAD6]">
                          <Truck className="w-3.5 h-3.5" />
                          <span>FREE Standard Shipping</span>
                        </span>
                      ) : (
                        <span className="text-xs text-[#5F6368]">
                          Qualifies for Free Shipping over {region === 'IN' ? '₹1,999' : '$50'}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#5F6368] leading-relaxed">
                    {product.description}
                  </p>

                  {/* MODULE B: Prominent Fabric Quality Bullet Points */}
                  {product.fabricBullets && product.fabricBullets.length > 0 && (
                    <div className="p-4 bg-white rounded-2xl border border-[#DADCE0] space-y-2">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#202124]">
                        <Layers className="w-4 h-4 text-[#1A73E8]" />
                        <span>Fabric Specifications & Craftsmanship (Module B)</span>
                      </div>
                      <ul className="space-y-1.5 text-xs text-[#3C4043]">
                        {product.fabricBullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#188038] shrink-0 mt-0.5" />
                            <span className="leading-snug">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* MODULE B: Size Selector + Interactive Size Guide Modal Trigger */}
                  {product.sizes && product.sizes.length > 0 && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-bold text-[#202124]">
                          Select Size: <span className="text-[#1A73E8]">{selectedSize}</span>
                        </label>
                        <button
                          onClick={() => setIsSizeGuideOpen(true)}
                          className="text-xs font-bold text-[#1A73E8] hover:text-[#174EA6] hover:underline flex items-center gap-1 cursor-pointer"
                        >
                          <Ruler className="w-3.5 h-3.5" />
                          <span>Interactive Size Guide</span>
                        </button>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {product.sizes.map((s) => (
                          <button
                            key={s}
                            onClick={() => setSelectedSize(s)}
                            className={`min-w-11 py-2 px-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                              selectedSize === s
                                ? 'bg-[#1A73E8] text-white border-[#1A73E8] shadow-xs'
                                : 'bg-white text-[#3C4043] border-[#DADCE0] hover:border-[#BDC1C6]'
                            }`}
                          >
                            {s}
                          </button>
                        ))}
                      </div>

                      {product.fitInfo && (
                        <p className="text-[11px] text-[#5F6368] italic">
                          Fit Note: {product.fitInfo}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Colors */}
                  {product.colors && product.colors.length > 0 && (
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-[#202124]">
                        Color: <span className="text-[#5F6368] font-normal">{selectedColor}</span>
                      </label>
                      <div className="flex items-center gap-2">
                        {product.colors.map((c) => (
                          <button
                            key={c.name}
                            onClick={() => setSelectedColor(c.name)}
                            className={`w-8 h-8 rounded-full border-2 transition-all cursor-pointer flex items-center justify-center ${
                              selectedColor === c.name
                                ? 'border-[#1A73E8] ring-2 ring-[#1A73E8]/30 scale-110'
                                : 'border-[#DADCE0] hover:scale-105'
                            }`}
                            style={{ backgroundColor: c.hex }}
                            title={c.name}
                          >
                            {selectedColor === c.name && (
                              <span
                                className={`w-2 h-2 rounded-full ${
                                  c.hex === '#FFFFFF' ? 'bg-black' : 'bg-white'
                                }`}
                              />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* MODULE C / Q3: DYNAMIC BUNDLE COMPONENT (For Android Classic Plushie) */}
                  {product.bundleRecommendation && (
                    <div className="p-4 bg-gradient-to-r from-[#E6F4EA] to-[#F1F8E9] rounded-2xl border border-[#CEEAD6] space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#137333] flex items-center gap-1">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Q3 Merchandising: Free Shipping Booster Bundle</span>
                        </span>
                      </div>

                      <div className="flex items-center justify-between gap-3 bg-white/90 p-3 rounded-xl border border-[#CEEAD6]">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 rounded-lg bg-[#F8F9FA] p-1 shrink-0 border border-[#E8EAED]">
                            <img
                              src={product.bundleRecommendation.image}
                              alt={product.bundleRecommendation.name}
                              className="w-full h-full object-contain mix-blend-multiply"
                            />
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-[#202124]">
                              {product.bundleRecommendation.name}
                            </h4>
                            <p className="text-[11px] text-[#137333] font-medium">
                              {product.bundleRecommendation.blurb}
                            </p>
                          </div>
                        </div>

                        <button
                          onClick={handleAddBundle}
                          className="px-3 py-1.5 bg-[#188038] hover:bg-[#137333] text-white text-xs font-bold rounded-lg shrink-0 shadow-2xs flex items-center gap-1 cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>
                            + {region === 'IN' ? `₹${product.bundleRecommendation.priceINR}` : `$${product.bundleRecommendation.priceUSD}`}
                          </span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Transparent In-PDP Shipping Calculator (Zero Step 2 Surprises) */}
                <div className="pt-3 border-t border-[#E8EAED] space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#5F6368]">
                    <span className="flex items-center gap-1 font-semibold text-[#202124]">
                      <Truck className="w-3.5 h-3.5 text-[#188038]" />
                      <span>Transparent Shipping Check:</span>
                    </span>
                    <span className="text-[#137333] font-medium">
                      {isFreeShippingEligible ? 'FREE Delivery ($0.00)' : 'Standard $5.00 / Free with $50+'}
                    </span>
                  </div>

                  {/* Action Bar */}
                  <div className="flex items-center gap-3">
                    {/* Quantity Picker */}
                    <div className="flex items-center border border-[#DADCE0] rounded-xl bg-[#F8F9FA] overflow-hidden">
                      <button
                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                        className="w-8 h-11 flex items-center justify-center text-sm font-bold text-[#5F6368] hover:bg-white cursor-pointer"
                      >
                        -
                      </button>
                      <span className="w-10 text-center text-xs font-bold text-[#202124]">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity((q) => q + 1)}
                        className="w-8 h-11 flex items-center justify-center text-sm font-bold text-[#5F6368] hover:bg-white cursor-pointer"
                      >
                        +
                      </button>
                    </div>

                    {/* Add To Cart Primary Button */}
                    <button
                      id="pdp-add-to-cart-btn"
                      onClick={handleAdd}
                      className={`flex-1 py-3.5 px-6 rounded-xl font-bold text-sm flex items-center justify-center space-x-2 shadow-sm transition-all cursor-pointer ${
                        isAddedSuccess
                          ? 'bg-[#188038] text-white'
                          : 'bg-[#1A73E8] hover:bg-[#1765CC] text-white'
                      }`}
                    >
                      {isAddedSuccess ? (
                        <>
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Added to Shopping Bag!</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-4 h-4" />
                          <span>Add to Shopping Bag</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Trust guarantees */}
                  <div className="flex items-center justify-between text-[11px] text-[#5F6368] pt-1">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#188038]" />
                      <span>30-Day Hassle-Free Returns</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#1A73E8]" />
                      <span>Dispatch within 24 Hours</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Size Guide Sub-Modal */}
      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
        productName={product.name}
      />
    </>
  );
};
