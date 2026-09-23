import React, { useState } from 'react';
import { X, Ruler, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({
  isOpen,
  onClose,
  productName,
}) => {
  const [unit, setUnit] = useState<'inches' | 'cm'>('inches');
  const [selectedFit, setSelectedFit] = useState<'regular' | 'relaxed' | 'slim'>('regular');

  if (!isOpen) return null;

  const sizeChartInches = [
    { size: 'XS', chest: '34 - 36', length: '27.0', sleeve: '32.5' },
    { size: 'S', chest: '36 - 38', length: '28.0', sleeve: '33.5' },
    { size: 'M', chest: '39 - 41', length: '29.0', sleeve: '34.5' },
    { size: 'L', chest: '42 - 44', length: '30.0', sleeve: '35.5' },
    { size: 'XL', chest: '45 - 48', length: '31.0', sleeve: '36.5' },
    { size: 'XXL', chest: '49 - 52', length: '32.0', sleeve: '37.5' },
  ];

  const sizeChartCm = [
    { size: 'XS', chest: '86 - 91', length: '68.5', sleeve: '82.5' },
    { size: 'S', chest: '91 - 96', length: '71.0', sleeve: '85.0' },
    { size: 'M', chest: '99 - 104', length: '73.5', sleeve: '87.5' },
    { size: 'L', chest: '107 - 112', length: '76.0', sleeve: '90.0' },
    { size: 'XL', chest: '114 - 122', length: '78.5', sleeve: '92.5' },
    { size: 'XXL', chest: '124 - 132', length: '81.0', sleeve: '95.0' },
  ];

  const activeChart = unit === 'inches' ? sizeChartInches : sizeChartCm;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      <div className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#DADCE0] p-6">
        {/* Modal Header */}
        <div className="flex items-start justify-between border-b border-[#E8EAED] pb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center">
              <Ruler className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#E8F0FE] text-[#1A73E8]">
                  Module B • PDP Enhancement
                </span>
              </div>
              <h2 className="text-lg font-bold text-[#202124] mt-0.5">
                Interactive Size & Fit Guide
              </h2>
              <p className="text-xs text-[#5F6368]">
                Precise measurements for {productName}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#5F6368] hover:text-[#202124] hover:bg-[#F1F3F4] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* GA4 Context Callout */}
        <div className="mt-4 p-3 bg-[#F8F9FA] rounded-xl border border-[#E8EAED] text-xs text-[#3C4043] flex items-start space-x-2">
          <Sparkles className="w-4 h-4 text-[#1A73E8] shrink-0 mt-0.5" />
          <p className="leading-relaxed text-[11px]">
            <strong>Data-Driven Reason:</strong> GA4 metrics showed high product view volume on apparel like the <em>Super G Gradient Tee</em> but elevated drop-off before cart addition. Providing transparent, verifiable sizing eliminates sizing uncertainty and drives add-to-cart confidence.
          </p>
        </div>

        {/* Measurement Unit Toggle */}
        <div className="mt-5 flex items-center justify-between">
          <div className="text-xs font-semibold text-[#202124]">
            Measurement Specifications
          </div>
          <div className="inline-flex p-1 bg-[#F1F3F4] rounded-lg text-xs font-medium">
            <button
              onClick={() => setUnit('inches')}
              className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                unit === 'inches'
                  ? 'bg-white text-[#1A73E8] shadow-xs font-semibold'
                  : 'text-[#5F6368] hover:text-[#202124]'
              }`}
            >
              Inches (in)
            </button>
            <button
              onClick={() => setUnit('cm')}
              className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                unit === 'cm'
                  ? 'bg-white text-[#1A73E8] shadow-xs font-semibold'
                  : 'text-[#5F6368] hover:text-[#202124]'
              }`}
            >
              Centimeters (cm)
            </button>
          </div>
        </div>

        {/* Size Table */}
        <div className="mt-3 overflow-x-auto border border-[#E8EAED] rounded-xl">
          <table className="w-full text-xs text-left">
            <thead className="bg-[#F8F9FA] text-[#5F6368] font-semibold border-b border-[#E8EAED]">
              <tr>
                <th className="py-2.5 px-4">Size</th>
                <th className="py-2.5 px-4">Chest ({unit})</th>
                <th className="py-2.5 px-4">Body Length ({unit})</th>
                <th className="py-2.5 px-4">Sleeve Length ({unit})</th>
                <th className="py-2.5 px-4 text-center">Fit Suggestion</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F1F3F4]">
              {activeChart.map((row) => (
                <tr key={row.size} className="hover:bg-[#F8F9FA]/80 transition-colors">
                  <td className="py-2.5 px-4 font-bold text-[#202124]">{row.size}</td>
                  <td className="py-2.5 px-4 text-[#3C4043]">{row.chest}</td>
                  <td className="py-2.5 px-4 text-[#3C4043]">{row.length}</td>
                  <td className="py-2.5 px-4 text-[#3C4043]">{row.sleeve}</td>
                  <td className="py-2.5 px-4 text-center">
                    <span className="inline-block px-2 py-0.5 rounded-full bg-[#E8F0FE] text-[#1A73E8] text-[10px] font-medium">
                      True to Size
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Fit Preference Guide */}
        <div className="mt-5 space-y-2">
          <label className="text-xs font-semibold text-[#202124] block">
            How do you prefer your apparel to fit?
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { key: 'slim', label: 'Slim / Tailored', desc: 'Order 1 size down for athletic snug fit' },
              { key: 'regular', label: 'Classic / Regular', desc: 'Standard true to size drape (Recommended)' },
              { key: 'relaxed', label: 'Relaxed / Streetwear', desc: 'Order 1 size up for oversized drop shoulder' },
            ].map((pref) => (
              <button
                key={pref.key}
                onClick={() => setSelectedFit(pref.key as any)}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  selectedFit === pref.key
                    ? 'border-[#1A73E8] bg-[#E8F0FE]/30 ring-1 ring-[#1A73E8]'
                    : 'border-[#DADCE0] hover:border-[#BDC1C6] bg-white'
                }`}
              >
                <div className="text-xs font-bold text-[#202124] flex items-center justify-between">
                  <span>{pref.label}</span>
                  {selectedFit === pref.key && <CheckCircle2 className="w-3.5 h-3.5 text-[#1A73E8]" />}
                </div>
                <div className="text-[10px] text-[#5F6368] mt-1 leading-snug">
                  {pref.desc}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Measuring Tips */}
        <div className="mt-5 p-4 rounded-xl bg-[#F8F9FA] border border-[#E8EAED] text-xs space-y-2">
          <div className="font-semibold text-[#202124] flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#188038]" />
            <span>Google Merchandise Quality & Exchange Assurance</span>
          </div>
          <ul className="list-disc list-inside space-y-1 text-[11px] text-[#5F6368]">
            <li><strong>Chest:</strong> Measure around the fullest part of your chest, keeping tape horizontal.</li>
            <li><strong>Pre-Shrunk:</strong> All cotton apparel is bio-washed to eliminate post-laundry shrinkage.</li>
            <li><strong>Free Size Exchanges:</strong> Hassle-free 30-day exchange if the fit isn't 100% perfect.</li>
          </ul>
        </div>

        {/* Close CTA */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-[#1A73E8] hover:bg-[#1765CC] text-white text-xs font-semibold rounded-full shadow-xs transition-colors cursor-pointer"
          >
            Got It, Back to Product
          </button>
        </div>
      </div>
    </div>
  );
};
