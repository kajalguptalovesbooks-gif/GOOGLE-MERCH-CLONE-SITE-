import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  TrendingUp,
  Sparkles,
  ShoppingBag,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Truck,
  CheckCircle2,
  Info,
  Flame,
  Award,
} from 'lucide-react';
import { Category, Product, Region } from '../types';

interface DataDrivenHeroBannerProps {
  products: Product[];
  region: Region;
  onSelectProduct: (product: Product) => void;
  onSelectCategory: (category: Category) => void;
  onOpenGA4Deck: () => void;
}

export const DataDrivenHeroBanner: React.FC<DataDrivenHeroBannerProps> = ({
  products,
  region,
  onSelectProduct,
  onSelectCategory,
  onOpenGA4Deck,
}) => {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  // Find the two PRD anchor items
  const marinePullover = products.find((p) => p.id === 'google-marine-layer-1998-pullover') || products[0];
  const androidPlushie = products.find((p) => p.id === 'android-classic-plushie') || products[1];

  const slides = [
    {
      id: 'slide-marine-pullover',
      product: marinePullover,
      badge: 'Q3 PRD Strategy • The Best-Seller Staple',
      badgeColor: 'bg-[#1A73E8] text-white',
      tagline: 'Organic Search Revenue Anchor',
      headline: 'Google Marine Layer 1998 Pullover',
      subtitle:
        'Single-handedly anchors consistent, predictable organic search apparel revenue. Engineered with absurdly soft Supima cotton fleece and vintage 1998 Google heritage embroidery.',
      metricPill: '40%+ Organic Revenue Share • 4.6% CVR',
      actionText: 'Shop Best-Seller Pullover',
      ctaStyle: 'bg-[#1A73E8] hover:bg-[#1765CC] text-white',
      accentBg: 'from-[#E8F0FE]/90 via-[#F8F9FA] to-white',
    },
    {
      id: 'slide-android-plushie',
      product: androidPlushie,
      badge: 'Q3 PRD Strategy • High-Interest Opportunity',
      badgeColor: 'bg-[#34A853] text-white',
      tagline: 'Repositioned From Deep Catalog to Homepage',
      headline: 'Android Classic Plushie',
      subtitle:
        'Attracts over 12,000 views and immense add-to-cart demand. Repositioned front-and-center with 1-click dynamic bundling to eliminate the 41.1% Step 2 shipping abandonment rate.',
      metricPill: '12k+ PDP Views • Paired with $9 Free Shipping Booster',
      actionText: 'View Plushie & Bundle',
      ctaStyle: 'bg-[#188038] hover:bg-[#137333] text-white',
      accentBg: 'from-[#E6F4EA]/90 via-[#F8F9FA] to-white',
    },
  ];

  // Auto rotate carousel every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const currentSlide = slides[activeSlide];

  return (
    <section className="relative overflow-hidden bg-white border-b border-[#DADCE0]">
      {/* Top Banner Notice: Z-Pattern entry & GA4 alignment */}
      <div className="bg-[#F8F9FA] border-b border-[#E8EAED] py-2 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-2">
            <span className="inline-flex items-center gap-1 font-semibold text-[#1A73E8]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Data-Driven Merchandising:</span>
            </span>
            <span className="text-[#5F6368] hidden sm:inline">
              Positioning dictated by Google Analytics 4 Demo Account metrics & 5-Question Foundation.
            </span>
            <span className="text-[#5F6368] sm:hidden">
              GA4 Data-Driven E-Commerce Clone
            </span>
          </div>

          <button
            onClick={onOpenGA4Deck}
            className="inline-flex items-center space-x-1 font-bold text-[#1A73E8] hover:text-[#174EA6] hover:underline cursor-pointer"
          >
            <span>View GA4 Viva Rationale & Funnel</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Main Hero Slider Container */}
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-gradient-to-r ${currentSlide.accentBg} transition-all duration-700`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-5 animate-in fade-in slide-in-from-left duration-300">
            <div className="flex flex-wrap items-center gap-2">
              <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-2xs ${currentSlide.badgeColor}`}>
                {currentSlide.badge}
              </span>
              <span className="text-xs font-semibold text-[#5F6368] flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-[#EA4335]" />
                <span>{currentSlide.tagline}</span>
              </span>
            </div>

            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#202124] tracking-tight leading-tight">
                {currentSlide.headline}
              </h1>
              <p className="mt-3 text-sm sm:text-base text-[#5F6368] max-w-2xl leading-relaxed">
                {currentSlide.subtitle}
              </p>
            </div>

            {/* Price & Metric Callout */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#202124]">
                {region === 'IN' ? (
                  <span>₹{currentSlide.product.priceINR.toLocaleString('en-IN')}</span>
                ) : (
                  <span>${currentSlide.product.priceUSD.toFixed(2)}</span>
                )}
              </div>
              <div className="bg-white/80 backdrop-blur-xs px-3 py-1.5 rounded-xl border border-[#DADCE0] text-xs font-semibold text-[#174EA6] shadow-2xs">
                {currentSlide.metricPill}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onSelectProduct(currentSlide.product)}
                className={`px-6 py-3.5 rounded-full font-bold text-sm flex items-center space-x-2 shadow-sm transition-all cursor-pointer ${currentSlide.ctaStyle}`}
              >
                <ShoppingBag className="w-4 h-4" />
                <span>{currentSlide.actionText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenGA4Deck}
                className="px-5 py-3.5 bg-white hover:bg-[#F8F9FA] text-[#3C4043] border border-[#DADCE0] hover:border-[#BDC1C6] rounded-full font-semibold text-xs flex items-center space-x-1.5 transition-colors cursor-pointer shadow-2xs"
              >
                <Info className="w-4 h-4 text-[#1A73E8]" />
                <span>Why Was This Item Promoted? (Q3)</span>
              </button>
            </div>

            {/* Micro value props */}
            <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#5F6368]">
              <span className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-[#188038]" />
                <span>Free Shipping over {region === 'IN' ? '₹1,999' : '$50'}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1A73E8]" />
                <span>100% Certified Google Official Product</span>
              </span>
            </div>
          </div>

          {/* Right Column: High-Res Interactive Product Showcase */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div
              onClick={() => onSelectProduct(currentSlide.product)}
              className="group relative w-full max-w-md aspect-square bg-white rounded-3xl p-6 shadow-xl border border-[#E8EAED] hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden flex flex-col items-center justify-center"
            >
              {/* Product Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 bg-[#202124]/85 backdrop-blur-xs text-white text-[11px] font-bold rounded-full shadow-xs">
                  {currentSlide.product.badge || 'Featured'}
                </span>
              </div>

              {/* Main Image with smooth zoom hover */}
              <img
                src={currentSlide.product.image}
                alt={currentSlide.product.name}
                className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
              />

              {/* Hover Quick-View pill */}
              <div className="absolute bottom-4 inset-x-6 bg-[#202124]/90 backdrop-blur-xs text-white py-2.5 px-4 rounded-xl text-xs font-semibold text-center opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-1.5 shadow-lg">
                <span>Click to Inspect Specifications & Sizing</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Slider Dots & Arrow Navigation */}
            <div className="absolute -bottom-6 flex items-center space-x-3">
              <button
                onClick={() => setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
                className="p-1.5 rounded-full bg-white border border-[#DADCE0] text-[#5F6368] hover:text-[#202124] shadow-xs cursor-pointer"
                title="Previous hero item"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center space-x-1.5">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      activeSlide === idx ? 'w-6 bg-[#1A73E8]' : 'w-2 bg-[#BDC1C6]'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => setActiveSlide((prev) => (prev + 1) % slides.length)}
                className="p-1.5 rounded-full bg-white border border-[#DADCE0] text-[#5F6368] hover:text-[#202124] shadow-xs cursor-pointer"
                title="Next hero item"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MODULE A: Z-PATTERN PRIMARY VIEWPORT ENTRY POINTS & BRAND COLLECTIONS */}
      <div className="bg-[#F8F9FA] border-t border-[#E8EAED] py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#1A73E8] bg-[#E8F0FE] px-2.5 py-0.5 rounded-full">
                Brand & Collection Navigation
              </span>
              <h2 className="text-sm sm:text-base font-bold text-[#202124] mt-1">
                Explore Official Google Collections & Merchandising
              </h2>
            </div>
            <span className="text-xs text-[#5F6368] hidden md:inline">
              Positioned at top viewport per PRD Section 3 specifications
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {/* 1. 1998 Retro Collection */}
            <div
              onClick={() => onSelectCategory('1998 Retro Collection')}
              className="group bg-white p-4 rounded-2xl border border-[#DADCE0] hover:border-[#1A73E8] hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-[#1A73E8] bg-[#E8F0FE] px-2 py-0.5 rounded-md inline-block">
                  Organic Anchor
                </span>
                <h3 className="text-xs sm:text-sm font-bold text-[#202124] group-hover:text-[#1A73E8] transition-colors line-clamp-1">
                  1998 Retro Collection
                </h3>
                <p className="text-[11px] text-[#5F6368] line-clamp-2">
                  Featuring Marine Layer 1998 Pullover, vintage mugs, and baseball tees.
                </p>
              </div>
              <div className="pt-3 flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#1A73E8] flex items-center gap-1">
                  Shop 1998
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-[10px] text-[#70757A] font-semibold">4 items</span>
              </div>
            </div>

            {/* 2. Android Collectibles & Plushies */}
            <div
              onClick={() => onSelectCategory('Android Collectibles & Plushies')}
              className="group bg-white p-4 rounded-2xl border border-[#DADCE0] hover:border-[#34A853] hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-[#137333] bg-[#E6F4EA] px-2 py-0.5 rounded-md inline-block">
                  Trending Showcase
                </span>
                <h3 className="text-xs sm:text-sm font-bold text-[#202124] group-hover:text-[#137333] transition-colors line-clamp-1">
                  Android Collectibles
                </h3>
                <p className="text-[11px] text-[#5F6368] line-clamp-2">
                  Viral Bugdroid Plushie, mini bot vinyls, and $9 lapel pin boosters.
                </p>
              </div>
              <div className="pt-3 flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#137333] flex items-center gap-1">
                  Shop Android
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-[10px] text-[#70757A] font-semibold">4 items</span>
              </div>
            </div>

            {/* 3. YouTube Kids & Apparel */}
            <div
              onClick={() => onSelectCategory('YouTube Kids & Apparel')}
              className="group bg-white p-4 rounded-2xl border border-[#DADCE0] hover:border-[#EA4335] hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-[#EA4335] bg-[#FCE8E6] px-2 py-0.5 rounded-md inline-block">
                  Creator Gear
                </span>
                <h3 className="text-xs sm:text-sm font-bold text-[#202124] group-hover:text-[#EA4335] transition-colors line-clamp-1">
                  YouTube Kids & Apparel
                </h3>
                <p className="text-[11px] text-[#5F6368] line-clamp-2">
                  Iconic red hoodies, creator pins, tumbler, and playful doodle tees.
                </p>
              </div>
              <div className="pt-3 flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#EA4335] flex items-center gap-1">
                  Shop YouTube
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-[10px] text-[#70757A] font-semibold">4 items</span>
              </div>
            </div>

            {/* 4. Chrome Dino Collectibles */}
            <div
              onClick={() => onSelectCategory('Chrome Dino Collectibles')}
              className="group bg-white p-4 rounded-2xl border border-[#DADCE0] hover:border-[#FBBC04] hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-[#B06000] bg-[#FEF7E0] px-2 py-0.5 rounded-md inline-block">
                  Developer Icon
                </span>
                <h3 className="text-xs sm:text-sm font-bold text-[#202124] group-hover:text-[#B06000] transition-colors line-clamp-1">
                  Chrome Dino Collectibles
                </h3>
                <p className="text-[11px] text-[#5F6368] line-clamp-2">
                  "No Internet" 8-bit runner desk figurine, pixel tee, and strapback cap.
                </p>
              </div>
              <div className="pt-3 flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#B06000] flex items-center gap-1">
                  Shop Dino
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-[10px] text-[#70757A] font-semibold">4 items</span>
              </div>
            </div>

            {/* 5. Classic Google Drinkware & Accessories */}
            <div
              onClick={() => onSelectCategory('Classic Google Drinkware, Accessories & Stationery')}
              className="group bg-white p-4 rounded-2xl border border-[#DADCE0] hover:border-[#4285F4] hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-[#1A73E8] bg-[#E8F0FE] px-2 py-0.5 rounded-md inline-block">
                  Campus & Office
                </span>
                <h3 className="text-xs sm:text-sm font-bold text-[#202124] group-hover:text-[#1A73E8] transition-colors line-clamp-1">
                  Classic Drinkware & Gear
                </h3>
                <p className="text-[11px] text-[#5F6368] line-clamp-2">
                  Recycled backpack, Super G tee, Eco insulated bottle, and bamboo journal.
                </p>
              </div>
              <div className="pt-3 flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#1A73E8] flex items-center gap-1">
                  Shop Classic
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-[10px] text-[#70757A] font-semibold">7 items</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
