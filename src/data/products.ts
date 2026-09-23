import { Product, BundleItem } from '../types';

export const BUNDLE_ITEMS: Record<string, BundleItem> = {
  'android-pin': {
    id: 'android-enamel-pin-set',
    name: 'Android Bugdroid Enamel Lapel Pin (Set of 2)',
    priceUSD: 9.0,
    priceINR: 750,
    image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=600&q=80',
    blurb: 'Add for $9 to unlock instant Free Shipping (Threshold: $50 / ₹1,999)!',
    category: 'Android Collectibles & Plushies',
  },
  'android-stickers': {
    id: 'android-eco-sticker-sheet',
    name: 'Android Bugdroid Die-Cut Eco Vinyl Sticker Pack',
    priceUSD: 5.0,
    priceINR: 399,
    image: 'https://images.unsplash.com/photo-1572375992501-4b0892d50c69?auto=format&fit=crop&w=600&q=80',
    blurb: 'Budget-friendly cart booster to clear the free shipping line.',
    category: 'Android Collectibles & Plushies',
  },
  'chrome-dino-pin': {
    id: 'chrome-dino-pixel-enamel-pin',
    name: 'Chrome Dino 8-Bit Pixel Enamel Lapel Pin',
    priceUSD: 9.0,
    priceINR: 750,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80',
    blurb: 'Collector 8-bit offline dino pin to push cart over the free delivery bar.',
    category: 'Chrome Dino Collectibles',
  },
  'youtube-pin': {
    id: 'youtube-play-button-pin-lanyard',
    name: 'YouTube Play Button Collector Pin & Lanyard Set',
    priceUSD: 12.0,
    priceINR: 999,
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&q=80',
    blurb: 'Iconic silver creator badge add-on for immediate shipping discount.',
    category: 'YouTube Kids & Apparel',
  },
};

export const PRODUCTS: Product[] = [
  // ==========================================
  // 1. 1998 RETRO COLLECTION (FEATURING MARINE LAYER PULLOVER AS PRIMARY APPAREL ANCHOR)
  // ==========================================
  {
    id: 'google-marine-layer-1998-pullover',
    name: 'Google Marine Layer 1998 Pullover',
    category: '1998 Retro Collection',
    priceUSD: 78.0,
    priceINR: 6499,
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1000&q=80',
    ],
    rating: 4.9,
    reviewsCount: 342,
    badge: 'Primary Apparel Anchor • Best-Seller',
    ga4InsightTag: 'Q3 Staple: Generates 40%+ organic search revenue. High conversion baseline.',
    isBestSeller: true,
    hasInteractiveSizeGuide: true,
    inStock: true,
    material: 'Custom Marine Layer 50% Supima Cotton / 50% MicroModal Eco-Fleece',
    dimensions: 'Standard Athletic Fit (Unisex)',
    fitInfo: 'True to size with comfortable room for layering. Pre-shrunk.',
    fabricBullets: [
      'Signature Marine Layer Eco-Fleece: 50% Supima Cotton, 50% MicroModal for cloud-like softness.',
      'Vintage 1998 heritage Google wordmark embroidered with high-density tonal threading.',
      'Ribbed collar, cuffs, and hem engineered with spandex memory retention.',
      'Sustainable closed-loop fabrication certified OEKO-TEX Standard 100.',
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Vintage Heather Navy', hex: '#1E293B' },
      { name: 'Heritage Charcoal', hex: '#334155' },
      { name: 'Oatmeal Heather', hex: '#E2E8F0' },
    ],
    description:
      'The definitive Google apparel staple and primary organic search anchor. Co-engineered with Marine Layer using custom recycled Supima cotton fleece. Features the vintage 1998 serif Google logo across the chest.',
  },
  {
    id: 'google-1998-retro-enamel-mug',
    name: 'Google 1998 Retro Heritage Enamel Camp Mug',
    category: '1998 Retro Collection',
    priceUSD: 18.0,
    priceINR: 1499,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 4.8,
    reviewsCount: 164,
    badge: '1998 Retro Series',
    ga4InsightTag: 'High Affinity Add-on: 32% attach rate when paired with 1998 Pullover.',
    inStock: true,
    material: 'Heavy-Gauge Cold-Rolled Carbon Steel with Hand-Dipped Enamel',
    dimensions: '400ml / 14 fl oz',
    fabricBullets: [
      'Authentic dipped porcelain enamel finish over carbon steel frame.',
      'Printed with original 1998 exclamation-point Google wordmark on reverse.',
      'Campfire, stovetop, and outdoor grill safe.',
    ],
    colors: [
      { name: 'Campfire Cream', hex: '#FDFBF7' },
      { name: 'Retro Forest Green', hex: '#1E3A2F' },
    ],
    description:
      'Vintage speckled camping mug honoring Google\'s founding year 1998. Features a durable rolled steel rim and the classic multi-color Google logo.',
  },
  {
    id: 'google-1998-vintage-raglan-tee',
    name: 'Google 1998 Vintage Baseball Raglan 3/4 Tee',
    category: '1998 Retro Collection',
    priceUSD: 32.0,
    priceINR: 2599,
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=80',
    ],
    rating: 4.7,
    reviewsCount: 118,
    badge: 'Heritage Classic',
    hasInteractiveSizeGuide: true,
    inStock: true,
    material: '100% Combed Ringspun Heather Cotton',
    dimensions: 'Athletic Raglan Cut',
    fitInfo: 'Relaxed classic fit with curved baseball hem.',
    fabricBullets: [
      'Contrast 3/4 raglan sleeves in iconic Google Navy.',
      'Distressed 1998 Menlo Park garage edition chest graphic.',
      'Overlock stitched raw-look hem with side seam durability.',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Heather / Navy', hex: '#2A3B5C' },
      { name: 'Heather / Cardinal', hex: '#8B2635' },
    ],
    description:
      'Timeless collegiate 3/4 baseball tee paying homage to the original Menlo Park garage workspace where Google was born in autumn 1998.',
  },
  {
    id: 'google-1998-canvas-totebag',
    name: 'Google 1998 Heritage Heavyweight Canvas Tote',
    category: '1998 Retro Collection',
    priceUSD: 22.0,
    priceINR: 1799,
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 4.8,
    reviewsCount: 92,
    badge: 'Eco Heritage',
    inStock: true,
    material: '16 oz Heavyweight Organic Cotton Duck Canvas',
    dimensions: '16" H x 15" W x 5" D • 24" Reinforced Handles',
    fabricBullets: [
      '16 oz unbleached natural cotton canvas withstands up to 40 lbs load.',
      'Internal zippered security pouch for keys, phone, and badge.',
      'Dual-side screenprint with Google retro founding coordinates (37.4419° N, 122.1430° W).',
    ],
    description:
      'Rugged everyday carry bag constructed from unbleached organic cotton duck canvas. Perfect for books, laptops, farmers markets, and campus carry.',
  },

  // ==========================================
  // 2. ANDROID COLLECTIBLES & PLUSHIES (TRENDING GRID WITH DYNAMIC BUNDLE CROSS-SELLS)
  // ==========================================
  {
    id: 'android-classic-plushie',
    name: 'Android Classic Plushie',
    category: 'Android Collectibles & Plushies',
    priceUSD: 28.0,
    priceINR: 2299,
    image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=1000&q=80',
    ],
    rating: 4.9,
    reviewsCount: 528,
    badge: 'Trending • High Demand',
    ga4InsightTag: 'Q3 Opportunity: Massive traffic & cart adds. Paired with dynamic bundle to solve Step 2 drop-off.',
    isHighInterestOpportunity: true,
    bundleRecommendation: BUNDLE_ITEMS['android-pin'],
    inStock: true,
    material: 'Hypoallergenic Super-Soft Short Velour with High-Density Polyfill',
    dimensions: '8.5" H x 6.2" W (Desk and shelf friendly)',
    fabricBullets: [
      'Microfiber plush velour exterior with child-safe reinforced embroidered eyes.',
      'Flexible poseable wireframe antennae that hold custom positions.',
      'Weighted micro-pellet base allows upright sitting on desks, monitors, and shelves.',
      'Officially licensed Android Google hardware collectible.',
    ],
    colors: [
      { name: 'Android Classic Green', hex: '#3DDC84' },
      { name: 'Dark Mode Slate', hex: '#202124' },
    ],
    description:
      'The viral Android Bugdroid mascot reimagined in tactile ultra-soft plush. Positioned in the trending showcase with dynamic bundle cross-sells to push cart values above the free shipping threshold.',
  },
  {
    id: 'android-collectible-mini-bot',
    name: 'Android Green Desk Bot Figurine',
    category: 'Android Collectibles & Plushies',
    priceUSD: 16.0,
    priceINR: 1299,
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 4.8,
    reviewsCount: 312,
    badge: 'Collector Classic',
    ga4InsightTag: 'Android Shopper Focus: High affinity with desktop software engineers.',
    inStock: true,
    material: 'Matte Injection-Molded Vinyl with 360-Degree Swivel Arms',
    dimensions: '3.25" Tall',
    fabricBullets: [
      'Articulated rotating arms and rotating head for dynamic desk poses.',
      'Matte scratch-resistant vinyl tactile texture.',
      'Packaged in commemorative windowed gift box.',
    ],
    colors: [
      { name: 'Official Android Green', hex: '#3DDC84' },
      { name: 'Matte Black', hex: '#202124' },
    ],
    description:
      'The iconic 3-inch vinyl desk figurine created for Android fans, developers, and tech desks worldwide.',
  },
  {
    id: 'android-enamel-pin-set',
    name: 'Android Bugdroid Enamel Lapel Pin (Set of 2)',
    category: 'Android Collectibles & Plushies',
    priceUSD: 9.0,
    priceINR: 750,
    image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=600&q=80',
    ],
    rating: 4.9,
    reviewsCount: 189,
    badge: 'Free Shipping Booster',
    ga4InsightTag: 'Checkout Booster: Ideal $9 add-on item to surpass the $50 free shipping threshold.',
    inStock: true,
    material: 'High-Polish Hard Enamel with Dual Rubber Clutch Backing',
    dimensions: '1.25" x 1.0" each',
    fabricBullets: [
      'Hard enamel cloisonné finish with scratch-resistant clear coating.',
      'Military-grade double rubber clutches to prevent spinning on bags and lapels.',
      'Collector edition embossed reverse with serial number.',
    ],
    description:
      'Dual pack of officially sculpted Android Bugdroid pins: classic waving pose and neon tech line art. Designed as a budget-friendly addition to instantly unlock free shipping on your order.',
  },
  {
    id: 'android-eco-sticker-sheet',
    name: 'Android Bugdroid Die-Cut Eco Vinyl Sticker Pack',
    category: 'Android Collectibles & Plushies',
    priceUSD: 5.0,
    priceINR: 399,
    image: 'https://images.unsplash.com/photo-1572375992501-4b0892d50c69?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1572375992501-4b0892d50c69?auto=format&fit=crop&w=600&q=80',
    ],
    rating: 4.8,
    reviewsCount: 140,
    badge: 'Budget Booster • $5 Add-on',
    ga4InsightTag: 'Micro-Conversion: Eliminates shipping abandonment by offering a painless checkout bump.',
    inStock: true,
    material: 'Waterproof Matte UV-Resistant Vinyl',
    dimensions: 'Sheet: 8.5" x 5.5" (Includes 12 unique stickers)',
    fabricBullets: [
      '100% waterproof and dishwasher-safe vinyl coating.',
      'UV-resistant laminate prevents fading on laptops, water bottles, and cars.',
      'Residue-free adhesive allows repositioning.',
    ],
    description:
      'A set of 12 die-cut collectible vinyl stickers featuring Android Bugdroid and Google developer easter eggs. The ultimate $5 booster to clear your shipping threshold.',
  },

  // ==========================================
  // 3. YOUTUBE KIDS & APPAREL
  // ==========================================
  {
    id: 'youtube-creator-iconic-hoodie',
    name: 'YouTube Creator Iconic Red Pullover Hoodie',
    category: 'YouTube Kids & Apparel',
    priceUSD: 58.0,
    priceINR: 4799,
    image: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 4.9,
    reviewsCount: 265,
    badge: 'Creator Essential',
    hasInteractiveSizeGuide: true,
    inStock: true,
    material: '380 GSM Heavyweight 80% Organic Cotton / 20% Recycled Fleece',
    dimensions: 'Standard Comfort Cut',
    fitInfo: 'Relaxed streetwear fit. Drop shoulder silhouette.',
    fabricBullets: [
      'Signature YouTube Red with embroidered silver metallic play button on chest.',
      'Double-ply thermal lined hood with heavy-gauge nickel eyelets.',
      'Secret kangaroo pouch with hidden zip audio pass-through pocket.',
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'YouTube Red', hex: '#FF0000' },
      { name: 'Studio Black', hex: '#0F0F0F' },
    ],
    description:
      'The official hoodie worn by creators worldwide. Heavyweight fleece built for long editing sessions, studio filming, and daily comfort.',
  },
  {
    id: 'youtube-kids-playful-tee',
    name: 'YouTube Kids Playful Doodle Graphic Tee',
    category: 'YouTube Kids & Apparel',
    priceUSD: 22.0,
    priceINR: 1799,
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 4.8,
    reviewsCount: 154,
    badge: 'Kids & Family',
    hasInteractiveSizeGuide: true,
    inStock: true,
    material: '100% GOTS-Certified Ultra-Soft Combed Organic Cotton',
    dimensions: 'Kids Regular Fit',
    fitInfo: 'Tagless comfort neck label to prevent skin irritation.',
    fabricBullets: [
      'OEKO-TEX certified non-toxic water-based illustration print.',
      'Reinforced shoulder-to-shoulder seam tape for playground durability.',
      'Preshrunk gentle wash cotton fabric.',
    ],
    sizes: ['XS (4-5)', 'S (6-7)', 'M (8-10)', 'L (12-14)'],
    colors: [
      { name: 'Sunshine Yellow', hex: '#FBBC04' },
      { name: 'Bright Royal', hex: '#4285F4' },
    ],
    description:
      'Charming cartoon play doodles featuring the friendly YouTube Kids mascot. Pure soft cotton made without scratchy neck tags.',
  },
  {
    id: 'youtube-play-button-pin-lanyard',
    name: 'YouTube Play Button Collector Pin & Lanyard Set',
    category: 'YouTube Kids & Apparel',
    priceUSD: 12.0,
    priceINR: 999,
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&q=80',
    ],
    rating: 4.9,
    reviewsCount: 210,
    badge: 'Free Shipping Booster',
    inStock: true,
    material: 'Polished Rhodium Silver Plated Zinc Alloy & Jacquard Woven Ribbon',
    dimensions: 'Pin: 1.5" x 1.0" • Lanyard: 36" Drop',
    fabricBullets: [
      'Mirror-finish polished silver play button badge with inset ruby enamel.',
      'Quick-release safety breakaway buckle for conferences and creator meetups.',
      'Heavy-duty alloy swivel lobster clip.',
    ],
    description:
      'Commemorate your creator journey with the official YouTube play button enamel badge and matching woven lanyard.',
  },
  {
    id: 'youtube-insulated-travel-tumbler',
    name: 'YouTube Creator Insulated Travel Tumbler (600ml)',
    category: 'YouTube Kids & Apparel',
    priceUSD: 26.0,
    priceINR: 2149,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 4.8,
    reviewsCount: 138,
    badge: 'Creator Gear',
    inStock: true,
    material: 'Double-Wall Vacuum 18/8 Kitchen-Grade Stainless Steel',
    dimensions: '600ml / 20 oz • Cup-Holder Friendly',
    fabricBullets: [
      'Keeps beverages ice-cold for 18 hours or steaming hot for 8 hours.',
      'Splash-resistant sliding lid with stainless steel reusable straw.',
      'Laser-etched red YouTube emblem that never fades in the dishwasher.',
    ],
    colors: [
      { name: 'Matte Creator Red', hex: '#FF0000' },
      { name: 'Midnight Charcoal', hex: '#202124' },
    ],
    description:
      'Double-wall vacuum insulated coffee tumbler with ergonomic grip. Designed for podcast recordings, livestreaming desks, and daily commutes.',
  },

  // ==========================================
  // 4. CHROME DINO COLLECTIBLES
  // ==========================================
  {
    id: 'chrome-dino-pixel-desk-figurine',
    name: 'Chrome Dino "No Internet" Pixel Runner Desk Figurine',
    category: 'Chrome Dino Collectibles',
    priceUSD: 20.0,
    priceINR: 1649,
    image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 4.9,
    reviewsCount: 420,
    badge: 'Developer Icon • Viral',
    ga4InsightTag: 'Cult Classic: Highest viral social share rate among tech employees and college coders.',
    inStock: true,
    material: 'Precision Sculpted ABS Resin with Pixel Grid Texturing',
    dimensions: '4.0" H x 3.5" W x 1.8" D (Weighted Desk Companion)',
    fabricBullets: [
      'Faithfully sculpted 8-bit stepped pixel geometry from the offline Chrome T-Rex runner.',
      'Includes miniature modular snap-on desk cactus obstacle.',
      'Anti-slip silicone rubber bottom pads keep Dino stable.',
    ],
    colors: [
      { name: 'Offline Monochromatic Grey', hex: '#5F6368' },
      { name: 'Night Runner Onyx', hex: '#202124' },
    ],
    description:
      'The beloved offline Chrome T-Rex runner brought to life in crisp 3D pixelated ABS resin. Complete with a companion cactus desk miniature.',
  },
  {
    id: 'chrome-dino-pixel-graphic-tee',
    name: 'Chrome Dino 8-Bit Runner Organic Cotton Tee',
    category: 'Chrome Dino Collectibles',
    priceUSD: 26.0,
    priceINR: 2099,
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80',
    ],
    rating: 4.8,
    reviewsCount: 194,
    badge: 'Interactive Size Guide',
    hasInteractiveSizeGuide: true,
    inStock: true,
    material: '100% Combed Ringspun Organic Cotton (180 GSM)',
    dimensions: 'Modern Retail Fit',
    fitInfo: 'True to size with structured shoulder seams.',
    fabricBullets: [
      'Stepped 8-bit pixel screenprint with subtle glow-in-the-dark moon accent.',
      'Soft-hand breathable discharge ink that softens after first wash.',
      'Side-seamed unisex construction with reinforced taped collar.',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Cloud White', hex: '#FFFFFF' },
      { name: 'Dark Slate', hex: '#202124' },
    ],
    description:
      'Celebrate the iconic "No Internet" arcade game with this minimal, soft organic cotton graphic tee featuring Dino jumping over a desert cactus.',
  },
  {
    id: 'chrome-dino-cactus-canvas-cap',
    name: 'Chrome Dino Offline Cactus Runner Strapback Cap',
    category: 'Chrome Dino Collectibles',
    priceUSD: 24.0,
    priceINR: 1949,
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 4.7,
    reviewsCount: 112,
    badge: 'Weekend Essential',
    inStock: true,
    material: '100% Washed Chino Cotton Twill with Antiqued Brass Clasp',
    dimensions: 'Adjustable One-Size (56-61cm circumference)',
    fabricBullets: [
      'Unstructured 6-panel relaxed dad cap silhouette.',
      'Direct-embroidered 8-bit Dino on the crown with cactus icon on rear strap.',
      'Pre-curved visor with tonal underbill stitching.',
    ],
    colors: [
      { name: 'Washed Stone', hex: '#D1D5DB' },
      { name: 'Desert Khaki', hex: '#BCA37F' },
    ],
    description:
      'Unstructured 6-panel washed cotton twill strapback cap embroidered with the 8-bit Chrome Dino. Features an adjustable antiqued brass buckle closure.',
  },
  {
    id: 'chrome-dino-pixel-enamel-pin',
    name: 'Chrome Dino 8-Bit Pixel Enamel Lapel Pin',
    category: 'Chrome Dino Collectibles',
    priceUSD: 9.0,
    priceINR: 750,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80',
    ],
    rating: 4.9,
    reviewsCount: 175,
    badge: 'Free Shipping Booster',
    ga4InsightTag: 'Micro Add-On: Perfect item to reach $50 free shipping limit.',
    inStock: true,
    material: 'Recessed Black Nickel with Hard Enamel Infill',
    dimensions: '1.2" x 1.1"',
    fabricBullets: [
      'Die-struck stepped pixel grid detailing with hand-polished nickel plating.',
      'Double butterfly clutch fastener prevents badge rotation.',
      'Collector back-stamp with Google offline series insignia.',
    ],
    description:
      'Add the iconic 8-bit running dinosaur to your backpack, denim jacket, or lanyard. Quick add-on to eliminate shipping fees.',
  },

  // ==========================================
  // 5. CLASSIC GOOGLE DRINKWARE, ACCESSORIES & STATIONERY
  // ==========================================
  {
    id: 'super-g-gradient-tee',
    name: 'Super G Gradient Tee',
    category: 'Classic Google Drinkware, Accessories & Stationery',
    priceUSD: 26.0,
    priceINR: 2099,
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=80',
    ],
    rating: 4.7,
    reviewsCount: 284,
    badge: 'Interactive Size Guide • 100% Organic',
    ga4InsightTag: 'Module B PDP Polish: Overcomes view-to-cart gap via interactive sizing & fabric quality transparency.',
    hasInteractiveSizeGuide: true,
    inStock: true,
    material: '180 GSM 100% Combed Ringspun Organic Cotton',
    dimensions: 'Modern Retail Fit (Unisex)',
    fitInfo: 'Tailored fit through the chest and shoulders with a relaxed drape at waist.',
    fabricBullets: [
      '180 GSM Heavyweight 100% Combed Ringspun Organic Cotton for durability and zero sheer transparency.',
      'Water-based soft-hand gradient screen print on chest that breathes and never cracks.',
      'Pre-shrunk bio-enzyme silicone wash guaranteeing lasting softness through 50+ wash cycles.',
      'Shoulder-to-shoulder interior taping and 1x1 baby rib collar for collar-shape retention.',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Pure White', hex: '#FFFFFF' },
      { name: 'Google Dark Slate', hex: '#202124' },
      { name: 'Heather Sky', hex: '#E8F0FE' },
    ],
    description:
      'Featuring Google\'s vibrant primary 4-color gradient iconized across the chest. Built to resolve the view-to-cart hesitation with complete size accuracy tables, fit recommendations, and premium organic cotton specs.',
  },
  {
    id: 'google-chrome-eco-water-bottle',
    name: 'Google Chrome Eco Insulated Bottle (750ml)',
    category: 'Classic Google Drinkware, Accessories & Stationery',
    priceUSD: 28.0,
    priceINR: 2299,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1570831739435-6601aa3fa4fb?auto=format&fit=crop&w=1000&q=80',
    ],
    rating: 4.8,
    reviewsCount: 276,
    badge: 'Top Drinkware',
    ga4InsightTag: 'Steady Performer: High AOV companion across Desktop & Mobile sessions.',
    inStock: true,
    material: '18/8 Pro-Grade Stainless Steel, BPA-Free Lid',
    dimensions: '750ml (25 oz) • Fits standard auto cup holders',
    fabricBullets: [
      'TempShield™ double-wall vacuum insulation keeps cold 24h, piping hot 12h.',
      'Laser-etched minimal Google Chrome 4-color aperture mark.',
      'Sweat-free powder-coat exterior with easy-carry silicone loop handle.',
    ],
    colors: [
      { name: 'Matte Onyx', hex: '#202124' },
      { name: 'Brushed Steel', hex: '#BDC1C6' },
      { name: 'Google Blue', hex: '#1A73E8' },
    ],
    description:
      'Double-walled vacuum insulated canteen built for daily campus and commuter hydration. Laser-etched Chrome logo and leak-proof spout cap.',
  },
  {
    id: 'google-campus-recycled-backpack',
    name: 'Google Campus Recycled Commuter Backpack (22L)',
    category: 'Classic Google Drinkware, Accessories & Stationery',
    priceUSD: 64.0,
    priceINR: 5199,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1546938576-6e6a64f317cc?auto=format&fit=crop&w=1000&q=80',
    ],
    rating: 4.9,
    reviewsCount: 198,
    badge: 'Free Shipping Included',
    ga4InsightTag: 'High AOV Driver: Directly qualifies for Free Shipping ($64 > $50 threshold).',
    inStock: true,
    material: '100% Recycled PET Poly Canvas (from 28 ocean-bound bottles)',
    dimensions: '18.5" x 12.0" x 6.5" (Accommodates 16" MacBook Pro)',
    fabricBullets: [
      'Suspended padded laptop cradle protecting devices up to 16 inches.',
      'Water-repellent DWR coating with weatherproof storm zippers.',
      'Discreet rear RFID-blocking passport and wallet pocket.',
    ],
    colors: [
      { name: 'Anthracite Dark Slate', hex: '#2C3038' },
      { name: 'Earth Clay', hex: '#A89F91' },
    ],
    description:
      'Engineered for developers, designers, and students. Made entirely from recycled plastic bottles with intelligent compartments and luggage handle pass-through.',
  },
  {
    id: 'google-minimalist-ceramic-mug',
    name: 'Google Minimalist Matte Ceramic Mug (350ml)',
    category: 'Classic Google Drinkware, Accessories & Stationery',
    priceUSD: 14.0,
    priceINR: 1149,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 4.7,
    reviewsCount: 160,
    badge: 'Everyday Classic',
    ga4InsightTag: 'Cross-Category Add-on: High cart inclusion with apparel purchases.',
    inStock: true,
    material: 'High-Fire Ceramic Stoneware (Dishwasher & Microwave Safe)',
    dimensions: '350ml / 12 fl oz',
    fabricBullets: [
      'Ergonomic balance handle designed for comfortable all-finger grip.',
      'Satin-matte exterior finish with debossed Google underline mark.',
      'Glossy glazed interior for easy cleaning without coffee staining.',
    ],
    colors: [
      { name: 'Charcoal Black', hex: '#202124' },
      { name: 'Warm Cream', hex: '#F1EFEA' },
    ],
    description:
      'Understated satin stoneware mug for your daily coffee, tea, or coding beverage. Built for heavy kitchen and office rotation.',
  },
  {
    id: 'google-pixel-tech-pouch',
    name: 'Google Pixel Weatherproof Tech Organizer',
    category: 'Classic Google Drinkware, Accessories & Stationery',
    priceUSD: 24.0,
    priceINR: 1949,
    image: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 4.8,
    reviewsCount: 115,
    badge: 'Staff Pick',
    ga4InsightTag: 'Desktop Favorite: Frequently purchased by desktop developer demographics.',
    inStock: true,
    material: 'Weatherproof Ballistic Poly with YKK Aquaguard Zippers',
    dimensions: '9.0" x 5.5" x 2.5"',
    fabricBullets: [
      'Origami-style expandable interior compartments for chargers and cords.',
      'Elastic cable holders and mesh SD card / dongle pockets.',
      'Soft-lined phone and external battery pack compartment.',
    ],
    colors: [
      { name: 'Slate Grey', hex: '#5F6368' },
      { name: 'Sage Green', hex: '#879589' },
    ],
    description:
      'Compact origami-style tech case keeping chargers, dongles, earbuds, stylus, and power bricks organized without cable tangles.',
  },
  {
    id: 'google-bamboo-hardcover-journal',
    name: 'Google Bamboo Hardcover Journal & Stylus Set',
    category: 'Classic Google Drinkware, Accessories & Stationery',
    priceUSD: 16.0,
    priceINR: 1299,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 4.7,
    reviewsCount: 88,
    badge: 'Sustainable Eco-Choice',
    ga4InsightTag: 'Complementary Stationery: Low friction add-on for university & office visitors.',
    inStock: true,
    material: 'FSC-Certified Real Bamboo Wood & 100 GSM Recycled Acid-Free Paper',
    dimensions: 'A5 Notebook (5.8" x 8.3") • 160 Lined Pages',
    fabricBullets: [
      'Laser-engraved real bamboo wood front and back cover.',
      '160 ruled pages of 100 GSM fountain-pen friendly recycled paper.',
      'Includes weighted aluminum ballpoint pen / capacitive stylus.',
    ],
    description:
      'Sustainable real bamboo notebook paired with a dual ballpoint pen and stylus. Ideal for meeting notes, sketches, and coding roadmaps.',
  },
  {
    id: 'google-french-terry-hoodie',
    name: 'Google Heavyweight French Terry Zip Hoodie',
    category: 'Classic Google Drinkware, Accessories & Stationery',
    priceUSD: 54.0,
    priceINR: 4499,
    image: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 4.9,
    reviewsCount: 220,
    badge: 'Free Shipping Included',
    ga4InsightTag: 'Outerwear Performer: High organic search intent keyword target.',
    isBestSeller: false,
    hasInteractiveSizeGuide: true,
    inStock: true,
    material: '420 GSM Heavyweight 100% Organic Cotton French Terry',
    fabricBullets: [
      'Substantial 420 GSM combed French terry cotton with unbrushed loopback interior.',
      'Antique nickel two-way separating front zipper.',
      'Double-layer heavy hood with dyed-to-match flat drawcords.',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Heather Grey', hex: '#D2D3D5' },
      { name: 'Midnight Navy', hex: '#1A233A' },
    ],
    description:
      'Crafted with 420 GSM organic French terry cotton, custom nickel hardware, and an embroidered tonal Google insignia on the sleeve cuff.',
  },
];

// Helper to simulate instant transparent shipping calculation (mitigating 41.1% Step 2 drop-off)
export function calculateTransparentShipping(
  subtotalUSD: number,
  subtotalINR: number,
  currency: 'USD' | 'INR',
  zipCode: string
): {
  cost: number;
  isFree: boolean;
  thresholdRemaining: number;
  estimatedDelivery: string;
  carrier: string;
} {
  const thresholdUSD = 50.0;
  const thresholdINR = 1999;

  if (currency === 'USD') {
    const isFree = subtotalUSD >= thresholdUSD;
    const cost = isFree ? 0 : 5.0;
    const thresholdRemaining = Math.max(0, thresholdUSD - subtotalUSD);
    return {
      cost,
      isFree,
      thresholdRemaining,
      estimatedDelivery: zipCode.startsWith('9') ? '2-3 Business Days' : '3-4 Business Days',
      carrier: 'USPS Priority & FedEx Home',
    };
  } else {
    const isFree = subtotalINR >= thresholdINR;
    const cost = isFree ? 0 : 150;
    const thresholdRemaining = Math.max(0, thresholdINR - subtotalINR);
    return {
      cost,
      isFree,
      thresholdRemaining,
      estimatedDelivery: '3-5 Business Days',
      carrier: 'BlueDart / Delhivery Express',
    };
  }
}
