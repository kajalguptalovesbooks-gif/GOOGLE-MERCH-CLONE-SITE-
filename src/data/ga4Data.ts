export interface GA4QuestionAnswer {
  questionNumber: number;
  title: string;
  question: string;
  finding: string;
  ga4Metric: string;
  reasoning: string;
  solutionInClone: string;
  vivaTalkingPoint: string;
}

export const GA4_FIVE_QUESTIONS: GA4QuestionAnswer[] = [
  {
    questionNumber: 1,
    title: 'Target Audience Selection',
    question: 'Which audience segment should the Google Merchandise Store target for optimal revenue?',
    finding: 'Target Desktop users and Android merchandise shoppers.',
    ga4Metric: 'Desktop CVR: 3.42% vs Mobile CVR: 0.92% (Mobile is 71.2% traffic); Android shoppers show 2.8x higher repeat add-to-cart velocity.',
    reasoning:
      'While mobile devices drive over 70% of initial top-of-funnel browsing sessions, desktop users complete the purchase funnel at a 3.7x higher conversion rate. Furthermore, shoppers specifically browsing Android-branded items exhibit a stronger commercial purchase intent compared to casual YouTube or general lifestyle visitors.',
    solutionInClone:
      'Engineered desktop-first purchase flows with full responsive mobile grid polish, dedicated Android Collectibles category navigation, and top-of-page Android merchandise positioning.',
    vivaTalkingPoint:
      '"Our data reveals a classic mobile browsing vs desktop buying asymmetry. Rather than overspending on mobile impulse ads, we prioritize desktop checkout efficiency while capturing Android merchandise fans who show the highest purchase propensity."',
  },
  {
    questionNumber: 2,
    title: 'Marketing Channel Allocation',
    question: 'Where should digital marketing and optimization budget be allocated based on acquisition data?',
    finding: 'Focus marketing and optimization efforts entirely on Organic Search.',
    ga4Metric: 'Organic Search generates 42.8% of total store revenue ($194,500+ in GA4 demo cycle) with ZERO direct ad spend (Infinite ROAS).',
    reasoning:
      'Organic search is the store\'s primary revenue engine with exceptional ROI. General external referrals and un-targeted paid placements generated high bounce rates (>58%) and low cart intent.',
    solutionInClone:
      'Deep SEO optimization, semantic product schemas, high-converting organic entry categories (Apparel & Android) placed directly in the initial viewport, and zero paid-channel bloat.',
    vivaTalkingPoint:
      '"Organic Search is our highest-yielding channel, capturing over 40% of total revenue. By anchoring our UX to organic search keywords (like \'Google pullover\' and \'Android plushie\'), we maximize organic search intent into paying customers with $0 customer acquisition cost."',
  },
  {
    questionNumber: 3,
    title: 'Product Promotion & Merchandising Strategy',
    question: 'Which specific items should be promoted and how should they be positioned on-site?',
    finding: 'Promote two distinct items: Google Marine Layer 1998 Pullover and Android Classic Plushie (plus Super G Gradient Tee PDP polish).',
    ga4Metric: 'Marine Layer Pullover: #1 organic revenue generator ($52k+); Android Plushie: 12,400+ views with high cart addition but severe checkout abandonment.',
    reasoning:
      'The Google Marine Layer Pullover anchors store trust and steady organic revenue. The Android Classic Plushie drives massive viral curiosity and add-to-carts, but was buried deep in the catalog and suffered from checkout abandonment due to shipping thresholds. The Super G Gradient Tee had high views but low cart conversion due to sizing ambiguity.',
    solutionInClone:
      'Marine Layer Pullover is hero #1 on homepage carousel and top-row Apparel grid. Android Plushie is moved out of deep pages to the Homepage Feature Grid with a dynamic 1-click bundle recommendation ($9 pin) to hit free shipping. Super G Tee receives an interactive Size Guide modal and fabric specs.',
    vivaTalkingPoint:
      '"We balance our catalog with a dual-anchor strategy: the Marine Layer Pullover captures reliable high-ticket organic revenue, while the Android Plushie turns pent-up viral demand into completed sales through smart threshold bundling."',
  },
  {
    questionNumber: 4,
    title: 'UX & Checkout Friction Resolution',
    question: 'Where in the checkout funnel does the largest drop-off occur, and how is it resolved?',
    finding: 'Address the severe drop-off at Step 2 (Add Shipping) of the checkout funnel.',
    ga4Metric: 'GA4 Funnel Analytics show a 41.1% abandonment rate at Step 2 (Add Shipping). Over 3,300 potential buyers drop out when unexpected shipping fees are revealed.',
    reasoning:
      'Shoppers willingly build carts, but encounter "sticker shock" when shipping costs or delivery estimates are delayed until Step 2. Users feel deceived by late-stage price inflation.',
    solutionInClone:
      '1) Transparent Shipping Calculator inside the cart drawer before starting checkout; 2) Dynamic Free-Shipping Progress Bar with real-time remaining threshold ($50 / ₹1,999); 3) 1-click low-ticket booster items (Pin/Stickers) to effortlessly clear the gap; 4) Session reservation urgency timer and secure badges.',
    vivaTalkingPoint:
      '"The GA4 funnel shows that 41.1% of all checkout drop-offs happen at Step 2 when shipping fees are introduced. We solved this by exposing real-time shipping calculations directly in the cart drawer and providing a progress bar that motivates users to add a small accessory instead of abandoning."',
  },
  {
    questionNumber: 5,
    title: 'Website Design & Layout Requirements',
    question: 'What architectural and UI layout patterns best bridge the gap between traffic and conversions?',
    finding: 'Implement targeted homepage Z-pattern layout, catalog category prioritization, and mobile grid polish.',
    ga4Metric: 'Top viewport clicks account for 68% of initial product discovery; clean category navigation lifts conversion rate across all devices.',
    reasoning:
      'Visitors skim the screen in a Z-pattern. Placing high-converting organic entry categories (Apparel & Android Collectibles) immediately in the top visual path reduces bounce rate and accelerates product discovery.',
    solutionInClone:
      'Clean Google Material design, Z-pattern hero banner, dual-card organic entry points, clear mobile flex/grid system, touch-friendly sticky drawer controls, and academic viva inspector modal.',
    vivaTalkingPoint:
      '"By aligning our visual hierarchy with natural scanning patterns, we place our two highest-intent categories—Apparel and Android Collectibles—directly in the primary viewport, immediately validating organic search traffic."',
  },
];

export interface FunnelStep {
  name: string;
  stepNumber: number;
  users: number;
  percentFromPrevious: number;
  isDropoffBottleneck?: boolean;
  dropoffRate?: number;
  note: string;
}

export const GA4_FUNNEL_METRICS: FunnelStep[] = [
  {
    name: '1. Session Start (Homepage / Landing)',
    stepNumber: 1,
    users: 100000,
    percentFromPrevious: 100,
    note: 'Baseline traffic driven 42.8% by Organic Search and 71.2% on Mobile devices.',
  },
  {
    name: '2. View Item (Product Detail Page)',
    stepNumber: 2,
    users: 42500,
    percentFromPrevious: 42.5,
    note: 'Organic keywords direct visitors into top apparel and Android product detail pages.',
  },
  {
    name: '3. Add to Cart',
    stepNumber: 3,
    users: 14200,
    percentFromPrevious: 33.4,
    note: 'High intent: Android Plushie and Marine Layer Pullover drive bulk of additions.',
  },
  {
    name: '4. Begin Checkout (Step 1: Contact Info)',
    stepNumber: 4,
    users: 8100,
    percentFromPrevious: 57.0,
    note: 'Users commit to purchasing and enter basic customer credentials.',
  },
  {
    name: '5. Step 2: Add Shipping (THE 41.1% BOTTLENECK)',
    stepNumber: 5,
    users: 4770,
    percentFromPrevious: 58.9,
    isDropoffBottleneck: true,
    dropoffRate: 41.1,
    note: 'CRITICAL GA4 FINDING: 41.1% of users abandon here when hidden shipping fees are introduced too late!',
  },
  {
    name: '6. Add Payment Information',
    stepNumber: 6,
    users: 4150,
    percentFromPrevious: 87.0,
    note: 'Smooth transition with Google Pay, Cards, and regional payment methods.',
  },
  {
    name: '7. Purchase Completed',
    stepNumber: 7,
    users: 3860,
    percentFromPrevious: 93.0,
    note: 'Final conversion: Desktop converts at 3.42% vs Mobile at 0.92%.',
  },
];

export const DEVICE_METRICS = [
  {
    device: 'Desktop',
    trafficShare: '26.5%',
    conversionRate: '3.42%',
    aovUSD: '$68.40',
    aovINR: '₹5,650',
    behavior: 'High intent, complete checkout funnels, higher order value, primary buyer segment.',
    highlight: true,
  },
  {
    device: 'Mobile',
    trafficShare: '71.2%',
    conversionRate: '0.92%',
    aovUSD: '$32.10',
    aovINR: '₹2,650',
    behavior: 'High top-of-funnel browsing, image skimming, sensitive to checkout friction & slow loads.',
    highlight: false,
  },
  {
    device: 'Tablet',
    trafficShare: '2.3%',
    conversionRate: '1.85%',
    aovUSD: '$44.50',
    aovINR: '₹3,700',
    behavior: 'Balanced casual browsing and weekend shopping sessions.',
    highlight: false,
  },
];

export const CHANNEL_METRICS = [
  {
    channel: 'Organic Search',
    revenueShare: '42.8%',
    totalRevUSD: '$194,500',
    cost: '$0.00 (Zero Ad Spend)',
    roas: 'Infinite / Most Efficient',
    cvr: '3.15%',
    recommendation: 'Target of 100% optimization focus; anchor site to organic search keywords.',
  },
  {
    channel: 'Direct Navigation',
    revenueShare: '22.4%',
    totalRevUSD: '$101,800',
    cost: '$0.00',
    roas: 'High',
    cvr: '2.80%',
    recommendation: 'Existing brand loyalists; maintain clean homepage navigation.',
  },
  {
    channel: 'Referral Traffic',
    revenueShare: '14.1%',
    totalRevUSD: '$64,100',
    cost: 'Variable',
    roas: 'Moderate',
    cvr: '1.95%',
    recommendation: 'Minimize reliance on untargeted external partner links.',
  },
  {
    channel: 'Organic Social & Content',
    revenueShare: '9.2%',
    totalRevUSD: '$41,800',
    cost: '$0.00',
    roas: 'Moderate',
    cvr: '1.40%',
    recommendation: 'Use to generate viral curiosity for the Android Classic Plushie.',
  },
  {
    channel: 'Paid / External Ads (Minimizing)',
    revenueShare: '11.5%',
    totalRevUSD: '$52,200',
    cost: 'High CAC',
    roas: 'Low / Inefficient',
    cvr: '1.10%',
    recommendation: 'Deprioritized per PRD Q2 finding in favor of organic search dominance.',
  },
];
