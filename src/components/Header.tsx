import React, { useState } from 'react';
import {
  ShoppingBag,
  Search,
  Sparkles,
  Globe,
  SlidersHorizontal,
  BarChart3,
  X,
  Menu,
  GraduationCap,
  Truck,
  ShieldCheck,
} from 'lucide-react';
import { Category, Region, CheckoutMode } from '../types';

interface HeaderProps {
  region: Region;
  onRegionChange: (r: Region) => void;
  selectedCategory: Category;
  onSelectCategory: (c: Category) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenGA4Deck: () => void;
  checkoutMode: CheckoutMode;
  cartPulse?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  region,
  onRegionChange,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  cartCount,
  onOpenCart,
  onOpenGA4Deck,
  checkoutMode,
  cartPulse = false,
}) => {
  const [showSearch, setShowSearch] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories: Category[] = [
    'All',
    'Android Collectibles & Plushies',
    '1998 Retro Collection',
    'YouTube Kids & Apparel',
    'Chrome Dino Collectibles',
    'Classic Google Drinkware, Accessories & Stationery',
  ];

  const handleCategoryClick = (cat: Category) => {
    onSelectCategory(cat);
    setMobileMenuOpen(false);
    // Smooth scroll down to catalog
    setTimeout(() => {
      const el = document.getElementById('catalog');
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#E8EAED] shadow-xs">
      {/* Top Academic & Value Announcement Bar */}
      <div className="bg-[#202124] text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          {/* Free Shipping & Data Note */}
          <div className="flex items-center space-x-2 truncate">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#34A853]/20 text-[#34A853] shrink-0">
              <Truck className="w-3.5 h-3.5" />
            </span>
            <span className="font-semibold text-white">
              Free Standard Shipping on Orders Over {region === 'IN' ? '₹1,999' : '$50'}!
            </span>
            <span className="hidden md:inline text-neutral-400">
              • Transparent pricing directly in cart (Eliminating 41.1% Step 2 drop-off)
            </span>
          </div>

          {/* Right Actions: GA4 Viva Presentation Button & Currency Switcher */}
          <div className="flex items-center space-x-3 shrink-0 text-xs">
            <button
              onClick={onOpenGA4Deck}
              className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#1A73E8] hover:bg-[#1765CC] text-white font-bold transition-all shadow-xs cursor-pointer text-[11px]"
              title="Open Google Analytics 4 Viva & Data Intelligence Deck"
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">GA4 Viva Presentation Deck</span>
              <span className="sm:hidden">Viva Deck</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse ml-0.5" />
            </button>

            {/* Currency Selector */}
            <div className="flex items-center bg-white/10 rounded-full p-0.5 border border-white/20 text-[11px] font-bold">
              <button
                onClick={() => onRegionChange('US')}
                className={`px-2.5 py-0.5 rounded-full transition-all cursor-pointer ${
                  region === 'US'
                    ? 'bg-white text-[#202124] shadow-xs'
                    : 'text-white hover:text-white/80'
                }`}
              >
                USD ($)
              </button>
              <button
                onClick={() => onRegionChange('IN')}
                className={`px-2.5 py-0.5 rounded-full transition-all cursor-pointer ${
                  region === 'IN'
                    ? 'bg-white text-[#202124] shadow-xs'
                    : 'text-white hover:text-white/80'
                }`}
              >
                INR (₹)
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex items-center justify-between gap-4">
          {/* Logo Stage */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-lg text-[#5F6368] hover:text-[#202124] hover:bg-[#F1F3F4] cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center space-x-2.5 cursor-pointer group"
            >
              {/* Google 4-Color Logo Mark */}
              <div className="flex items-center space-x-1">
                <span className="w-3.5 h-3.5 rounded-full bg-[#4285F4]" />
                <span className="w-3.5 h-3.5 rounded-full bg-[#EA4335]" />
                <span className="w-3.5 h-3.5 rounded-full bg-[#FBBC04]" />
                <span className="w-3.5 h-3.5 rounded-full bg-[#34A853]" />
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold text-[#202124] group-hover:text-[#1A73E8] transition-colors leading-none">
                  Google <span className="font-medium text-[#5F6368]">Merchandise Store</span>
                </span>
                <span className="text-[10px] font-semibold text-[#1A73E8] tracking-wider uppercase mt-0.5">
                  GA4 Data-Driven Clone
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5F6368]" />
              <input
                type="text"
                placeholder="Search products (e.g. Marine Layer Pullover, Android Plushie, Tee)..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-[#F1F3F4] hover:bg-[#E8EAED] focus:bg-white text-xs text-[#202124] rounded-full border border-transparent focus:border-[#1A73E8] focus:ring-1 focus:ring-[#1A73E8] outline-none transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#5F6368] hover:text-[#202124]"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Right Action Icons: Search (mobile), GA4 Inspector Badge & Cart Button */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="md:hidden p-2 rounded-full text-[#5F6368] hover:text-[#202124] hover:bg-[#F1F3F4] cursor-pointer"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Shopping Bag Button with Pulse */}
            <button
              id="cart-drawer-toggle-btn"
              onClick={onOpenCart}
              className={`relative px-3.5 py-2 rounded-full bg-[#1A73E8] hover:bg-[#1765CC] text-white flex items-center space-x-2 text-xs font-bold transition-all cursor-pointer shadow-xs ${
                cartPulse ? 'scale-105 ring-4 ring-[#1A73E8]/30' : ''
              }`}
              title="Open Shopping Bag"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Bag</span>
              <span className="inline-flex items-center justify-center bg-white text-[#1A73E8] rounded-full w-5 h-5 text-[11px] font-extrabold ml-1">
                {cartCount}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Search Dropdown */}
        {showSearch && (
          <div className="md:hidden pt-3 pb-1">
            <div className="relative w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5F6368]" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-[#F1F3F4] text-xs text-[#202124] rounded-full border border-transparent focus:border-[#1A73E8] outline-none"
              />
            </div>
          </div>
        )}
      </div>

      {/* Desktop Category Navigation Bar (Module A: High-converting categories top viewport) */}
      <nav className="hidden lg:block border-t border-[#E8EAED] bg-[#F8F9FA]/80 backdrop-blur-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-1 py-1.5 overflow-x-auto text-xs font-semibold text-[#3C4043]">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              const isRetroAnchor = cat === '1998 Retro Collection';
              const isAndroidFocus = cat === 'Android Collectibles & Plushies';
              const isChromeDino = cat === 'Chrome Dino Collectibles';
              const isYouTube = cat === 'YouTube Kids & Apparel';

              return (
                <button
                  key={cat}
                  onClick={() => handleCategoryClick(cat)}
                  className={`px-3.5 py-1.5 rounded-full transition-all cursor-pointer whitespace-nowrap flex items-center space-x-1.5 ${
                    isSelected
                      ? 'bg-[#1A73E8] text-white shadow-2xs font-bold'
                      : 'hover:bg-[#E8EAED] text-[#3C4043]'
                  }`}
                >
                  <span>{cat}</span>
                  {isRetroAnchor && !isSelected && (
                    <span className="text-[10px] bg-[#E8F0FE] text-[#1A73E8] px-1.5 py-0.2 rounded-md font-bold">
                      Pullover Anchor
                    </span>
                  )}
                  {isAndroidFocus && !isSelected && (
                    <span className="text-[10px] bg-[#E6F4EA] text-[#137333] px-1.5 py-0.2 rounded-md font-bold">
                      Trending
                    </span>
                  )}
                  {isChromeDino && !isSelected && (
                    <span className="text-[10px] bg-[#FEF7E0] text-[#B06000] px-1.5 py-0.2 rounded-md font-bold">
                      Viral
                    </span>
                  )}
                  {isYouTube && !isSelected && (
                    <span className="text-[10px] bg-[#FCE8E6] text-[#EA4335] px-1.5 py-0.2 rounded-md font-bold">
                      Creator
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E8EAED] bg-white p-4 space-y-3 animate-in slide-in-from-top duration-200">
          <span className="text-[10px] font-bold uppercase text-[#5F6368] tracking-wider block">
            Product Categories (Z-Pattern Layout)
          </span>
          <div className="grid grid-cols-2 gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryClick(cat)}
                className={`p-2.5 rounded-xl border text-left text-xs font-bold transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'border-[#1A73E8] bg-[#E8F0FE] text-[#1A73E8]'
                    : 'border-[#DADCE0] text-[#3C4043]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-[#E8EAED]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGA4Deck();
              }}
              className="w-full py-2.5 px-4 rounded-xl bg-[#E8F0FE] text-[#1A73E8] font-bold text-xs flex items-center justify-center space-x-2"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Open GA4 Viva Presentation Deck</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
