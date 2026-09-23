import React, { useState, useMemo } from 'react';
import {
  ArrowUpDown,
  SlidersHorizontal,
  X,
  Sparkles,
  Filter,
  Check,
  Star,
  Award,
  Flame,
  Search,
} from 'lucide-react';
import { Product, Category, Region } from '../types';
import { ProductCard } from './ProductCard';

interface ProductListingProps {
  products: Product[];
  region: Region;
  selectedCategory: Category;
  onSelectCategory: (c: Category) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onSelectProduct: (product: Product) => void;
  onQuickAdd: (product: Product, e: React.MouseEvent) => void;
  justAddedId: string | null;
  onOpenGA4Deck?: () => void;
}

export const ProductListing: React.FC<ProductListingProps> = ({
  products,
  region,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  onSelectProduct,
  onQuickAdd,
  justAddedId,
  onOpenGA4Deck,
}) => {
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [onlyInStock, setOnlyInStock] = useState<boolean>(false);
  const [freeShippingOnly, setFreeShippingOnly] = useState<boolean>(false);

  const categories: Category[] = [
    'All',
    'Android Collectibles & Plushies',
    '1998 Retro Collection',
    'YouTube Kids & Apparel',
    'Chrome Dino Collectibles',
    'Classic Google Drinkware, Accessories & Stationery',
  ];

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: products.length };
    categories.forEach((cat) => {
      if (cat !== 'All') {
        counts[cat] = products.filter((p) => p.category === cat).length;
      }
    });
    return counts;
  }, [products]);

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    let result = products.filter((p) => {
      // Category filter
      const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;

      // Search filter
      const matchesSearch =
        !searchQuery ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (p.badge && p.badge.toLowerCase().includes(searchQuery.toLowerCase()));

      // In stock
      const matchesStock = !onlyInStock || p.inStock;

      // Free shipping
      const isFree = region === 'IN' ? p.priceINR >= 1999 : p.priceUSD >= 50;
      const matchesFreeShipping = !freeShippingOnly || isFree;

      return matchesCategory && matchesSearch && matchesStock && matchesFreeShipping;
    });

    // Sorting
    result.sort((a, b) => {
      if (sortBy === 'price-asc') {
        return region === 'IN' ? a.priceINR - b.priceINR : a.priceUSD - b.priceUSD;
      }
      if (sortBy === 'price-desc') {
        return region === 'IN' ? b.priceINR - a.priceINR : b.priceUSD - a.priceUSD;
      }
      if (sortBy === 'rating') {
        return b.rating - a.rating;
      }
      // Featured / Data-driven priority: Best-seller first, then high-interest opportunity
      if (a.isBestSeller && !b.isBestSeller) return -1;
      if (!a.isBestSeller && b.isBestSeller) return 1;
      if (a.isHighInterestOpportunity && !b.isHighInterestOpportunity) return -1;
      if (!a.isHighInterestOpportunity && b.isHighInterestOpportunity) return 1;
      return 0;
    });

    return result;
  }, [products, selectedCategory, searchQuery, onlyInStock, freeShippingOnly, sortBy, region]);

  return (
    <section id="catalog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-8">
      {/* Section Title & Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E8EAED] pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#1A73E8] bg-[#E8F0FE] px-2.5 py-0.5 rounded-full">
              Module A & C • Catalog Optimization
            </span>
            <span className="text-[10px] text-[#5F6368] font-semibold">
              Showing {filteredProducts.length} of {products.length} Products
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#202124] mt-1.5 tracking-tight">
            {selectedCategory === 'All'
              ? 'Data-Backed Google Merchandise Catalog'
              : `${selectedCategory} Collection`}
          </h2>

          <p className="text-xs sm:text-sm text-[#5F6368] mt-1 max-w-2xl leading-relaxed">
            {selectedCategory === 'All' &&
              'Products strategically positioned based on Google Analytics 4 conversion metrics, brand collections, and free-shipping threshold optimization.'}
            {selectedCategory === '1998 Retro Collection' &&
              'Featuring the Google Marine Layer 1998 Pullover (Primary Apparel Anchor), retro camp mugs, vintage baseball raglans, and organic totes.'}
            {selectedCategory === 'Android Collectibles & Plushies' &&
              'High-interest commercial audience category. Featuring the viral Android Classic Plushie with dynamic bundle cross-sells to eliminate Step 2 drop-off.'}
            {selectedCategory === 'YouTube Kids & Apparel' &&
              'Official YouTube creator gear: iconic red pullovers, silver play button enamel badges, travel tumblers, and playful kids doodle tees.'}
            {selectedCategory === 'Chrome Dino Collectibles' &&
              'Developer & student favorite: "No Internet" 8-bit runner desk figurine, pixel tees, and relaxed cactus runner strapback caps.'}
            {selectedCategory === 'Classic Google Drinkware, Accessories & Stationery' &&
              'Campus essentials: Eco insulated bottles, recycled commuter backpacks, minimal stoneware mugs, and bamboo journals.'}
          </p>
        </div>

        {/* Sort and Filters */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          {/* Free shipping filter pill */}
          <button
            onClick={() => setFreeShippingOnly(!freeShippingOnly)}
            className={`px-3 py-2 rounded-full border transition-all cursor-pointer font-semibold flex items-center gap-1.5 ${
              freeShippingOnly
                ? 'bg-[#E6F4EA] text-[#137333] border-[#34A853]'
                : 'bg-white text-[#5F6368] border-[#DADCE0] hover:bg-[#F8F9FA]'
            }`}
          >
            {freeShippingOnly && <Check className="w-3.5 h-3.5" />}
            <span>Free Delivery ({region === 'IN' ? '₹1,999+' : '$50+'})</span>
          </button>

          {/* Sort selector */}
          <div className="relative inline-flex items-center bg-white border border-[#DADCE0] rounded-full px-3 py-1.5 shadow-2xs">
            <ArrowUpDown className="w-3.5 h-3.5 text-[#5F6368] mr-1.5" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="text-xs font-semibold text-[#202124] bg-transparent outline-none cursor-pointer pr-1"
            >
              <option value="featured">Featured (GA4 Positioned)</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Customer Rating (High to Low)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Category Pills Bar (Module A Z-pattern) */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none text-xs font-semibold">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
          const count = categoryCounts[cat] || 0;

          return (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`px-4 py-2 rounded-full transition-all cursor-pointer whitespace-nowrap flex items-center space-x-2 ${
                isSelected
                  ? 'bg-[#1A73E8] text-white shadow-xs font-bold'
                  : 'bg-white hover:bg-[#F1F3F4] text-[#3C4043] border border-[#DADCE0]'
              }`}
            >
              <span>{cat}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-[#F1F3F4] text-[#5F6368]'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Search & Filter reset notice */}
      {searchQuery && (
        <div className="p-3 bg-[#F8F9FA] rounded-xl border border-[#DADCE0] flex items-center justify-between text-xs text-[#3C4043]">
          <div className="flex items-center space-x-2">
            <Search className="w-4 h-4 text-[#1A73E8]" />
            <span>
              Searching for: <strong>"{searchQuery}"</strong> ({filteredProducts.length} matches found)
            </span>
          </div>
          <button
            onClick={() => onSearchChange('')}
            className="text-[#1A73E8] hover:underline font-semibold cursor-pointer"
          >
            Clear Search
          </button>
        </div>
      )}

      {/* Main Products Grid (Module A Mobile Grid Polish) */}
      {filteredProducts.length === 0 ? (
        <div className="py-16 text-center space-y-4 bg-white rounded-3xl border border-[#DADCE0] p-8">
          <div className="w-16 h-16 rounded-full bg-[#F8F9FA] flex items-center justify-center mx-auto text-[#BDC1C6]">
            <Search className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-base font-bold text-[#202124]">
              No products found matching your filter
            </h3>
            <p className="text-xs text-[#5F6368] max-w-sm mx-auto mt-1">
              Try adjusting your category selection, search terms, or clearing the free shipping filter.
            </p>
          </div>
          <button
            onClick={() => {
              onSelectCategory('All');
              onSearchChange('');
              setFreeShippingOnly(false);
            }}
            className="px-5 py-2.5 bg-[#1A73E8] hover:bg-[#1765CC] text-white text-xs font-bold rounded-full shadow-xs cursor-pointer"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              region={region}
              onSelect={onSelectProduct}
              onQuickAdd={onQuickAdd}
              isAddedJustNow={justAddedId === product.id}
            />
          ))}
        </div>
      )}
    </section>
  );
};
