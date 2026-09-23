import React from 'react';
import { Star, Plus, Check, Truck, Sparkles, Ruler, ShoppingBag } from 'lucide-react';
import { Product, Region } from '../types';

interface ProductCardProps {
  product: Product;
  region: Region;
  onSelect: (product: Product) => void;
  onQuickAdd: (product: Product, e: React.MouseEvent) => void;
  isAddedJustNow?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  region,
  onSelect,
  onQuickAdd,
  isAddedJustNow = false,
}) => {
  const isFreeShipping =
    region === 'IN' ? product.priceINR >= 1999 : product.priceUSD >= 50;

  return (
    <div
      id={`product-card-${product.id}`}
      onClick={() => onSelect(product)}
      className="group relative bg-white rounded-2xl border border-[#E8EAED] hover:border-[#1A73E8]/50 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden"
    >
      {/* Top Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1 items-start pointer-events-none">
        {product.isBestSeller && (
          <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#1A73E8] text-white shadow-2xs">
            Best-Seller • Staple
          </span>
        )}
        {product.isHighInterestOpportunity && (
          <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#188038] text-white shadow-2xs">
            Trending • High Demand
          </span>
        )}
        {!product.isBestSeller && !product.isHighInterestOpportunity && product.badge && (
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-[#F1F3F4] text-[#3C4043] border border-[#DADCE0]">
            {product.badge}
          </span>
        )}
      </div>

      {/* Free Shipping Pill */}
      {isFreeShipping && (
        <div className="absolute top-3 right-3 z-10">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#E6F4EA] text-[#137333] border border-[#CEEAD6]">
            <Truck className="w-3 h-3" />
            <span>Free Shipping</span>
          </span>
        </div>
      )}

      {/* Product Image Stage */}
      <div className="relative aspect-square w-full overflow-hidden bg-[#F8F9FA] flex items-center justify-center p-6">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />

        {/* Quick Size Guide Tag if apparel */}
        {product.hasInteractiveSizeGuide && (
          <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded-md border border-[#DADCE0] text-[10px] font-semibold text-[#1A73E8] flex items-center gap-1 shadow-2xs">
            <Ruler className="w-3 h-3" />
            <span>Size Guide</span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs text-[#5F6368]">
            <span className="tracking-wide uppercase text-[10px] font-bold text-[#70757A]">
              {product.category}
            </span>
            <div className="flex items-center space-x-1">
              <Star className="w-3.5 h-3.5 fill-[#FBBC04] text-[#FBBC04]" />
              <span className="font-semibold text-[#202124]">{product.rating}</span>
              <span className="text-[#80868B] text-[11px]">({product.reviewsCount})</span>
            </div>
          </div>

          <h3 className="font-semibold text-sm sm:text-base text-[#202124] group-hover:text-[#1A73E8] transition-colors line-clamp-2">
            {product.name}
          </h3>

          {/* GA4 Insight Callout */}
          {product.ga4InsightTag && (
            <p className="text-[11px] text-[#174EA6] bg-[#E8F0FE]/50 p-1.5 rounded-lg border border-[#D2E3FC] line-clamp-2 leading-relaxed">
              💡 {product.ga4InsightTag}
            </p>
          )}
        </div>

        {/* Pricing & Quick Add Button */}
        <div className="pt-2 border-t border-[#F1F3F4] flex items-center justify-between">
          <div>
            <div className="text-base sm:text-lg font-bold text-[#202124]">
              {region === 'IN' ? (
                <span>₹{product.priceINR.toLocaleString('en-IN')}</span>
              ) : (
                <span>${product.priceUSD.toFixed(2)}</span>
              )}
            </div>
            <span className="text-[10px] text-[#5F6368] block">
              {isFreeShipping
                ? 'Standard Delivery: $0.00'
                : `+ $5.00 / ₹150 or bundle`}
            </span>
          </div>

          <button
            onClick={(e) => onQuickAdd(product, e)}
            className={`p-2 sm:px-3 sm:py-2 rounded-full text-xs font-semibold flex items-center space-x-1 transition-all cursor-pointer shadow-xs ${
              isAddedJustNow
                ? 'bg-[#188038] text-white'
                : 'bg-[#1A73E8] hover:bg-[#1765CC] text-white'
            }`}
            title="Add to Shopping Bag"
          >
            {isAddedJustNow ? (
              <>
                <Check className="w-4 h-4" />
                <span className="hidden sm:inline">Added</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Add</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
