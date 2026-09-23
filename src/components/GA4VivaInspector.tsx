import React, { useState } from 'react';
import {
  X,
  BarChart3,
  TrendingUp,
  Users,
  AlertTriangle,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  Smartphone,
  Laptop,
  Search,
  ShoppingCart,
  DollarSign,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  GraduationCap,
} from 'lucide-react';
import {
  GA4_FIVE_QUESTIONS,
  GA4_FUNNEL_METRICS,
  DEVICE_METRICS,
  CHANNEL_METRICS,
} from '../data/ga4Data';
import { CheckoutMode, Region } from '../types';

interface GA4VivaInspectorProps {
  isOpen: boolean;
  onClose: () => void;
  checkoutMode: CheckoutMode;
  onToggleCheckoutMode: () => void;
  region: Region;
}

export const GA4VivaInspector: React.FC<GA4VivaInspectorProps> = ({
  isOpen,
  onClose,
  checkoutMode,
  onToggleCheckoutMode,
  region: _region,
}) => {
  const [activeTab, setActiveTab] = useState<'questions' | 'funnel' | 'channels' | 'simulator' | 'viva'>('questions');
  const [selectedQuestion, setSelectedQuestion] = useState<number>(1);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div className="w-full max-w-2xl bg-white h-full shadow-2xl flex flex-col justify-between border-l border-[#DADCE0] animate-in slide-in-from-right duration-250">
        {/* Header */}
        <div className="p-5 border-b border-[#E8EAED] bg-gradient-to-r from-[#F8F9FA] to-[#E8F0FE]/40 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#1A73E8] text-white flex items-center justify-center shadow-xs">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#E8F0FE] text-[#1A73E8]">
                  College Assignment & Viva Defense
                </span>
                <span className="text-[10px] font-medium bg-[#E6F4EA] text-[#137333] px-2 py-0.5 rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#137333] animate-ping" />
                  GA4 Live Demo Data
                </span>
              </div>
              <h2 className="text-base font-bold text-[#202124] mt-0.5">
                Data-Driven Google Merchandise Store Intelligence
              </h2>
              <p className="text-xs text-[#5F6368]">
                GA4 Demo Account Analysis & Five-Question Defense Foundation
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#5F6368] hover:text-[#202124] hover:bg-white transition-colors cursor-pointer shadow-2xs border border-[#DADCE0]"
            title="Close inspector"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="px-5 pt-3 bg-white border-b border-[#E8EAED] flex items-center space-x-2 overflow-x-auto text-xs font-semibold">
          {[
            { id: 'questions', label: '5-Question Foundation', icon: HelpCircle },
            { id: 'funnel', label: 'Funnel & Step 2 Drop-off', icon: AlertTriangle },
            { id: 'channels', label: 'Audience & Channels', icon: BarChart3 },
            { id: 'simulator', label: 'A/B Test Simulator', icon: Sparkles },
            { id: 'viva', label: 'Viva Talking Points', icon: GraduationCap },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-2 px-3 border-b-2 flex items-center space-x-1.5 whitespace-nowrap cursor-pointer transition-all ${
                  isActive
                    ? 'border-[#1A73E8] text-[#1A73E8] bg-[#E8F0FE]/30 rounded-t-lg'
                    : 'border-transparent text-[#5F6368] hover:text-[#202124]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6 text-xs text-[#3C4043]">
          {/* TAB 1: 5-QUESTION FOUNDATION */}
          {activeTab === 'questions' && (
            <div className="space-y-4">
              <div className="p-3 bg-[#E8F0FE]/40 rounded-xl border border-[#D2E3FC] flex items-start space-x-2">
                <Sparkles className="w-4 h-4 text-[#1A73E8] shrink-0 mt-0.5" />
                <p className="text-[11px] text-[#174EA6] leading-relaxed">
                  The Google Merchandise Store clone is anchored entirely in these 5 empirical questions drawn from the GA4 Demo Account. Click each question below to inspect its data findings, reasoning, and technical solution.
                </p>
              </div>

              {/* Question selector pills */}
              <div className="grid grid-cols-5 gap-1.5">
                {GA4_FIVE_QUESTIONS.map((q) => (
                  <button
                    key={q.questionNumber}
                    onClick={() => setSelectedQuestion(q.questionNumber)}
                    className={`py-2 px-2 rounded-xl text-center text-xs font-bold border transition-all cursor-pointer ${
                      selectedQuestion === q.questionNumber
                        ? 'bg-[#1A73E8] text-white border-[#1A73E8] shadow-xs'
                        : 'bg-[#F8F9FA] text-[#5F6368] border-[#DADCE0] hover:bg-white'
                    }`}
                  >
                    Q{q.questionNumber}
                  </button>
                ))}
              </div>

              {/* Active Question Detail Card */}
              {(() => {
                const q = GA4_FIVE_QUESTIONS.find((item) => item.questionNumber === selectedQuestion) || GA4_FIVE_QUESTIONS[0];
                return (
                  <div className="p-4 bg-[#F8F9FA] rounded-2xl border border-[#DADCE0] space-y-4 animate-in fade-in duration-200">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] uppercase tracking-wider font-bold text-[#1A73E8] bg-[#E8F0FE] px-2.5 py-0.5 rounded-full">
                          Question {q.questionNumber} of 5
                        </span>
                        <span className="text-xs font-semibold text-[#5F6368]">
                          {q.title}
                        </span>
                      </div>
                      <h3 className="font-bold text-sm text-[#202124] mt-2">
                        {q.question}
                      </h3>
                    </div>

                    {/* Finding Box */}
                    <div className="p-3.5 bg-white rounded-xl border-l-4 border-l-[#1A73E8] border border-[#E8EAED] shadow-2xs space-y-1">
                      <span className="text-[10px] font-bold uppercase text-[#5F6368] tracking-wider block">
                        GA4 Data Finding
                      </span>
                      <p className="font-bold text-xs text-[#1A73E8]">
                        {q.finding}
                      </p>
                      <div className="text-[11px] text-[#5F6368] pt-1">
                        <strong>Metric:</strong> {q.ga4Metric}
                      </div>
                    </div>

                    {/* Reasoning */}
                    <div className="space-y-1">
                      <span className="font-bold text-xs text-[#202124] block">
                        Analytical Reasoning:
                      </span>
                      <p className="text-[11px] leading-relaxed text-[#3C4043] bg-white p-3 rounded-xl border border-[#E8EAED]">
                        {q.reasoning}
                      </p>
                    </div>

                    {/* Solution in Clone */}
                    <div className="space-y-1">
                      <span className="font-bold text-xs text-[#137333] flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Implemented in this Clone:</span>
                      </span>
                      <p className="text-[11px] leading-relaxed text-[#137333] bg-[#E6F4EA] p-3 rounded-xl border border-[#CEEAD6]">
                        {q.solutionInClone}
                      </p>
                    </div>

                    {/* Viva Presentation Talking Point */}
                    <div className="p-3.5 bg-gradient-to-r from-[#FEF7E0] to-[#FFF8E1] rounded-xl border border-[#FEEFC3] text-[#B06000] space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider block">
                        🎓 Recommended Viva Defense Soundbite
                      </span>
                      <p className="italic text-[11px] leading-relaxed">
                        {q.vivaTalkingPoint}
                      </p>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}

          {/* TAB 2: FUNNEL DROP-OFF (STEP 2 SHIPPING) */}
          {activeTab === 'funnel' && (
            <div className="space-y-4">
              <div className="p-3.5 bg-[#FCE8E6] rounded-xl border border-[#FAD2CF] text-[#C5221F] space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-xs">
                  <AlertTriangle className="w-4 h-4 text-[#EA4335]" />
                  <span>Q4 Key Insight: The 41.1% Step 2 Bottleneck</span>
                </div>
                <p className="text-[11px] leading-relaxed text-[#B31412]">
                  GA4 Funnel Analytics show that <strong>41.1% of active checkouts abandon specifically at Step 2 (Add Shipping)</strong>. Users happily add products to their carts, but drop out when shipping fees and surprise costs are revealed late.
                </p>
              </div>

              {/* Visual Funnel Diagram */}
              <div className="space-y-2.5">
                <h3 className="font-bold text-xs text-[#202124] uppercase tracking-wider">
                  GA4 Demo Account E-Commerce Funnel Flow
                </h3>

                {GA4_FUNNEL_METRICS.map((step) => {
                  const widthPercent = Math.max(12, (step.users / 100000) * 100);
                  const isDrop = step.isDropoffBottleneck;

                  return (
                    <div
                      key={step.stepNumber}
                      className={`p-3 rounded-xl border transition-all ${
                        isDrop
                          ? 'bg-[#FDF2F2] border-[#EA4335] ring-2 ring-[#EA4335]/20'
                          : 'bg-white border-[#E8EAED]'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs mb-1.5">
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                              isDrop
                                ? 'bg-[#EA4335] text-white'
                                : 'bg-[#E8F0FE] text-[#1A73E8]'
                            }`}
                          >
                            {step.stepNumber}
                          </span>
                          <span className={`font-bold ${isDrop ? 'text-[#C5221F]' : 'text-[#202124]'}`}>
                            {step.name}
                          </span>
                        </div>
                        <div className="font-bold text-xs">
                          <span className={isDrop ? 'text-[#C5221F]' : 'text-[#202124]'}>
                            {step.users.toLocaleString()} users
                          </span>
                        </div>
                      </div>

                      {/* Bar indicator */}
                      <div className="h-2 w-full bg-[#F1F3F4] rounded-full overflow-hidden mb-1.5">
                        <div
                          className={`h-full rounded-full ${
                            isDrop ? 'bg-[#EA4335]' : 'bg-[#1A73E8]'
                          }`}
                          style={{ width: `${widthPercent}%` }}
                        />
                      </div>

                      <div className="flex items-start justify-between text-[11px] text-[#5F6368]">
                        <span className="leading-snug">{step.note}</span>
                        {isDrop && (
                          <span className="font-bold text-[#C5221F] bg-[#FCE8E6] px-2 py-0.5 rounded-full shrink-0 ml-2">
                            -41.1% Drop-off
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Solution Summary */}
              <div className="p-4 bg-white rounded-xl border border-[#DADCE0] space-y-2">
                <h4 className="font-bold text-xs text-[#202124] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#188038]" />
                  <span>How This Clone Eliminates The 41.1% Drop-off:</span>
                </h4>
                <ul className="space-y-1.5 text-[11px] text-[#3C4043] list-disc list-inside leading-relaxed">
                  <li><strong>Transparent Shipping Calculator in Cart:</strong> Computes delivery fee before user even starts checkout.</li>
                  <li><strong>Dynamic Free-Shipping Progress Bar:</strong> Real-time feedback showing exact amount to qualify for free shipping ($50 / ₹1,999).</li>
                  <li><strong>1-Click Low-Ticket Bundles:</strong> Suggests $9 Android Enamel Pin or $5 Stickers to surpass the threshold with a single click.</li>
                  <li><strong>Order Reservation Timer:</strong> Displays a 15-minute countdown reserving cart items to create urgency.</li>
                </ul>
              </div>
            </div>
          )}

          {/* TAB 3: AUDIENCE & CHANNELS */}
          {activeTab === 'channels' && (
            <div className="space-y-5">
              {/* Q1: Devices */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-xs text-[#202124] uppercase tracking-wider flex items-center gap-1.5">
                    <Laptop className="w-4 h-4 text-[#1A73E8]" />
                    <span>Q1: Device Conversion Efficiency (Desktop vs Mobile)</span>
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {DEVICE_METRICS.slice(0, 2).map((dev) => (
                    <div
                      key={dev.device}
                      className={`p-3.5 rounded-xl border ${
                        dev.highlight
                          ? 'bg-[#E8F0FE]/40 border-[#1A73E8]'
                          : 'bg-white border-[#E8EAED]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          {dev.device === 'Desktop' ? (
                            <Laptop className="w-4 h-4 text-[#1A73E8]" />
                          ) : (
                            <Smartphone className="w-4 h-4 text-[#5F6368]" />
                          )}
                          <span className="font-bold text-xs text-[#202124]">{dev.device}</span>
                        </div>
                        {dev.highlight && (
                          <span className="text-[10px] font-bold bg-[#1A73E8] text-white px-2 py-0.5 rounded-full">
                            Primary Target
                          </span>
                        )}
                      </div>

                      <div className="mt-3 grid grid-cols-2 gap-2 text-center">
                        <div className="p-2 bg-white rounded-lg border border-[#E8EAED]">
                          <span className="text-[10px] text-[#5F6368] block">Traffic Share</span>
                          <span className="font-bold text-xs text-[#202124]">{dev.trafficShare}</span>
                        </div>
                        <div className="p-2 bg-white rounded-lg border border-[#E8EAED]">
                          <span className="text-[10px] text-[#5F6368] block">Conversion Rate</span>
                          <span className={`font-bold text-xs ${dev.highlight ? 'text-[#188038]' : 'text-[#EA4335]'}`}>
                            {dev.conversionRate}
                          </span>
                        </div>
                      </div>

                      <p className="text-[10px] text-[#5F6368] mt-2 leading-relaxed">
                        {dev.behavior}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Q2: Marketing Channels */}
              <div className="space-y-3">
                <h3 className="font-bold text-xs text-[#202124] uppercase tracking-wider flex items-center gap-1.5">
                  <Search className="w-4 h-4 text-[#188038]" />
                  <span>Q2: Acquisition Channels (Organic Search Dominance)</span>
                </h3>

                <div className="space-y-2">
                  {CHANNEL_METRICS.map((ch) => (
                    <div
                      key={ch.channel}
                      className={`p-3 rounded-xl border flex items-center justify-between text-xs ${
                        ch.channel === 'Organic Search'
                          ? 'bg-[#E6F4EA] border-[#34A853]'
                          : 'bg-white border-[#E8EAED]'
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-[#202124]">{ch.channel}</span>
                          {ch.channel === 'Organic Search' && (
                            <span className="text-[10px] font-bold bg-[#137333] text-white px-2 py-0.5 rounded-full">
                              40%+ Store Revenue
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] text-[#5F6368] mt-0.5">
                          Cost: {ch.cost} • ROAS: {ch.roas}
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="font-bold text-sm text-[#202124] block">
                          {ch.revenueShare}
                        </span>
                        <span className="text-[10px] text-[#5F6368]">
                          {ch.totalRevUSD}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: A/B TEST SIMULATOR */}
          {activeTab === 'simulator' && (
            <div className="space-y-4">
              <div className="p-4 bg-[#F8F9FA] rounded-2xl border border-[#DADCE0] space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-xs text-[#202124] uppercase tracking-wider">
                      Interactive A/B Test Controller
                    </h3>
                    <p className="text-[11px] text-[#5F6368]">
                      Simulate the original store checkout vs this data-optimized clone
                    </p>
                  </div>
                  <button
                    onClick={onToggleCheckoutMode}
                    className={`px-4 py-2 rounded-full font-bold text-xs transition-all shadow-xs cursor-pointer ${
                      checkoutMode === 'optimized'
                        ? 'bg-[#188038] text-white'
                        : 'bg-[#EA4335] text-white'
                    }`}
                  >
                    {checkoutMode === 'optimized' ? 'Switch to Baseline Control' : 'Switch to Data-Optimized'}
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div
                    className={`p-3 rounded-xl border ${
                      checkoutMode === 'baseline'
                        ? 'bg-[#FCE8E6] border-[#EA4335] ring-2 ring-[#EA4335]/20'
                        : 'bg-white border-[#E8EAED]'
                    }`}
                  >
                    <span className="text-[10px] font-bold uppercase text-[#5F6368] block">Control Variant (A)</span>
                    <h4 className="font-bold text-xs text-[#202124]">Baseline Hidden Shipping</h4>
                    <ul className="text-[10px] text-[#5F6368] mt-2 space-y-1">
                      <li>❌ Shipping calculated late at Step 2</li>
                      <li>❌ No free shipping progress bar</li>
                      <li>❌ 41.1% abandonment rate</li>
                      <li>❌ Projected CVR: 1.35%</li>
                    </ul>
                  </div>

                  <div
                    className={`p-3 rounded-xl border ${
                      checkoutMode === 'optimized'
                        ? 'bg-[#E6F4EA] border-[#188038] ring-2 ring-[#188038]/20'
                        : 'bg-white border-[#E8EAED]'
                    }`}
                  >
                    <span className="text-[10px] font-bold uppercase text-[#137333] block">Active Variant (B)</span>
                    <h4 className="font-bold text-xs text-[#137333]">Data-Optimized Transparent</h4>
                    <ul className="text-[10px] text-[#137333] mt-2 space-y-1">
                      <li>✅ Transparent shipping inside cart</li>
                      <li>✅ Dynamic $50 / ₹1,999 progress bar</li>
                      <li>✅ 1-Click low-ticket bundle boosters</li>
                      <li>✅ Projected CVR: 3.48% (+158% lift)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Projected Revenue Impact */}
              <div className="p-4 bg-gradient-to-br from-[#1A73E8] to-[#174EA6] text-white rounded-2xl space-y-3">
                <span className="text-[10px] uppercase font-bold tracking-wider text-blue-200 block">
                  Projected Financial Impact of Solving Step 2 Abandonment
                </span>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-white/10 p-2.5 rounded-xl backdrop-blur-xs">
                    <span className="text-[10px] text-blue-200 block">Recovered Checkouts</span>
                    <span className="text-base font-bold">+1,420 / mo</span>
                  </div>
                  <div className="bg-white/10 p-2.5 rounded-xl backdrop-blur-xs">
                    <span className="text-[10px] text-blue-200 block">Conversion Lift</span>
                    <span className="text-base font-bold">+158%</span>
                  </div>
                  <div className="bg-white/10 p-2.5 rounded-xl backdrop-blur-xs">
                    <span className="text-[10px] text-blue-200 block">Incremental Rev</span>
                    <span className="text-base font-bold">+$82,400</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: VIVA TALKING POINTS */}
          {activeTab === 'viva' && (
            <div className="space-y-4">
              <div className="p-3.5 bg-[#FEF7E0] rounded-xl border border-[#FEEFC3] text-[#7A4B00] space-y-1">
                <div className="font-bold text-xs flex items-center gap-1">
                  <GraduationCap className="w-4 h-4" />
                  <span>College Assignment Presentation Cheatsheet</span>
                </div>
                <p className="text-[11px] leading-relaxed">
                  Use these 5 structured points when presenting this project to professors, evaluators, or viva panels.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  {
                    num: '1',
                    headline: 'Data-Driven vs Aesthetic Cloning',
                    point:
                      'Rather than simply copying Google\'s visual appearance, this project uses quantitative GA4 metrics to dictate product placement, audience funnel routing, and conversion optimization.',
                  },
                  {
                    num: '2',
                    headline: 'Addressing The 41.1% Funnel Cliff',
                    point:
                      'The critical contribution of this project is pinpointing Step 2 (Shipping) where 41.1% of buyers drop off. We introduced an in-cart calculator and dynamic progress bar to eliminate unexpected fees.',
                  },
                  {
                    num: '3',
                    headline: 'Dual Product Merchandising Rationale',
                    point:
                      'We selected the Google Marine Layer Pullover to capture proven high-converting organic apparel search demand, and repositioned the Android Classic Plushie with 1-click threshold bundling to turn viral browsing into completed transactions.',
                  },
                  {
                    num: '4',
                    headline: 'Device Asymmetry (Mobile Traffic vs Desktop Conversion)',
                    point:
                      'Mobile captures 71.2% of top-of-funnel traffic but converts at only 0.92%, while Desktop converts at 3.42%. Our layout prioritizes desktop conversion pathways while optimizing mobile rendering speeds.',
                  },
                  {
                    num: '5',
                    headline: 'Organic Search Dominance ($0 Ad Spend)',
                    point:
                      'With Organic Search generating 42.8% of store revenue with infinite ROAS, our Z-pattern layout places organic search keyword targets directly above the fold.',
                  },
                ].map((item) => (
                  <div key={item.num} className="p-3.5 bg-[#F8F9FA] rounded-xl border border-[#E8EAED] space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#1A73E8] text-white flex items-center justify-center font-bold text-[10px]">
                        {item.num}
                      </span>
                      <h4 className="font-bold text-xs text-[#202124]">{item.headline}</h4>
                    </div>
                    <p className="text-[11px] text-[#5F6368] leading-relaxed pl-7">
                      {item.point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#E8EAED] bg-[#F8F9FA] flex items-center justify-between text-xs">
          <span className="text-[#5F6368] flex items-center gap-1.5 text-[11px]">
            <ShieldCheck className="w-4 h-4 text-[#188038]" />
            <span>Based on Google Merchandise Store GA4 Demo Dataset</span>
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#1A73E8] hover:bg-[#1765CC] text-white font-semibold rounded-lg shadow-2xs transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
