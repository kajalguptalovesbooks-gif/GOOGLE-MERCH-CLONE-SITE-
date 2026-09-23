import React from 'react';
import { ShieldCheck, Truck, Sparkles, RefreshCw, GraduationCap, ArrowRight } from 'lucide-react';
import { Category, Region } from '../types';

interface FooterProps {
  region: Region;
  onOpenGA4Deck: () => void;
  onSelectCategory: (cat: Category) => void;
}

export const Footer: React.FC<FooterProps> = ({
  region,
  onOpenGA4Deck,
  onSelectCategory,
}) => {
  return (
    <footer className="bg-white border-t border-[#E8EAED] text-[#5F6368] text-xs">
      {/* Values Strip */}
      <div className="border-b border-[#F1F3F4] py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 rounded-full bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center shrink-0">
              <Truck className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-[#202124] text-xs">
                Transparent Shipping in Cart
              </div>
              <div className="text-[11px] text-[#70757A] mt-0.5 leading-relaxed">
                Free standard shipping unlocked at {region === 'IN' ? '₹1,999' : '$50'}. No surprise Step 2 checkout fees.
              </div>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 rounded-full bg-[#E6F4EA] text-[#188038] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-[#202124] text-xs">Certified Google Merchandise</div>
              <div className="text-[11px] text-[#70757A] mt-0.5 leading-relaxed">
                100% authentic Google and Android products crafted with certified organic and recycled materials.
              </div>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 rounded-full bg-[#FEF7E0] text-[#B06000] flex items-center justify-center shrink-0">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-[#202124] text-xs">GA4 Academic Viva Defense</div>
              <div className="text-[11px] text-[#70757A] mt-0.5 leading-relaxed">
                Built to satisfy 5 college assignment questions grounded in the Google Analytics 4 demo account.
              </div>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 rounded-full bg-[#FCE8E6] text-[#EA4335] flex items-center justify-center shrink-0">
              <RefreshCw className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-[#202124] text-xs">30-Day Easy Returns</div>
              <div className="text-[11px] text-[#70757A] mt-0.5 leading-relaxed">
                Complimentary size exchanges on apparel with zero restocking fees.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-2 md:grid-cols-5 gap-8">
        <div className="col-span-2 space-y-3">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <span className="w-3 h-3 rounded-full bg-[#4285F4]" />
              <span className="w-3 h-3 rounded-full bg-[#EA4335]" />
              <span className="w-3 h-3 rounded-full bg-[#FBBC04]" />
              <span className="w-3 h-3 rounded-full bg-[#34A853]" />
            </div>
            <span className="font-bold text-[#202124] text-sm">Google Merchandise Store Clone</span>
          </div>

          <p className="text-[11px] text-[#70757A] leading-relaxed max-w-sm">
            A data-backed e-commerce UX prototype built to solve the 41.1% Step 2 checkout drop-off, optimize Android merchandise discoverability, and anchor organic search revenue with the Marine Layer 1998 Pullover.
          </p>

          <button
            onClick={onOpenGA4Deck}
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-[#1A73E8] hover:bg-[#1765CC] text-white text-xs font-bold transition-all shadow-2xs cursor-pointer mt-2"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Launch GA4 Viva Presentation Mode</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        <div>
          <div className="font-bold text-[#202124] mb-3 uppercase tracking-wider text-[11px]">
            Brand Collections
          </div>
          <ul className="space-y-2 text-[11px] text-[#5F6368]">
            {[
              'Android Collectibles & Plushies',
              '1998 Retro Collection',
              'YouTube Kids & Apparel',
              'Chrome Dino Collectibles',
              'Classic Google Drinkware, Accessories & Stationery',
            ].map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => onSelectCategory(cat as Category)}
                  className="hover:text-[#1A73E8] transition-colors cursor-pointer text-left"
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="font-bold text-[#202124] mb-3 uppercase tracking-wider text-[11px]">
            Strategic Products
          </div>
          <ul className="space-y-2 text-[11px] text-[#5F6368]">
            <li>
              <span className="font-semibold text-[#202124]">Marine Layer 1998 Pullover</span>
              <span className="block text-[10px] text-[#1A73E8]">Q3 Organic Search Anchor</span>
            </li>
            <li>
              <span className="font-semibold text-[#202124]">Android Classic Plushie</span>
              <span className="block text-[10px] text-[#188038]">Q3 High Interest Opportunity</span>
            </li>
            <li>
              <span className="font-semibold text-[#202124]">Super G Gradient Tee</span>
              <span className="block text-[10px] text-[#5F6368]">Module B Enhanced PDP</span>
            </li>
          </ul>
        </div>

        <div>
          <div className="font-bold text-[#202124] mb-3 uppercase tracking-wider text-[11px]">
            Viva & Academic Info
          </div>
          <ul className="space-y-2 text-[11px] text-[#5F6368]">
            <li>Course: Advanced E-Commerce Analytics</li>
            <li>Dataset: GA4 Google Merch Store Demo</li>
            <li>Methodology: 5-Question Foundation</li>
            <li>Key Bottleneck: 41.1% Step 2 Shipping Drop</li>
          </ul>
        </div>
      </div>

      {/* Bottom Legal bar */}
      <div className="border-t border-[#E8EAED] py-4 px-4 sm:px-6 lg:px-8 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#70757A] gap-2">
          <div>
            Built for Google Analytics 4 assignment & viva demonstration. All merchandise styling modeled on the Google Merchandise Store.
          </div>
          <div className="flex items-center space-x-4">
            <span>Desktop-First Optimization</span>
            <span>•</span>
            <span>Zero-Sticker-Shock Checkout</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
