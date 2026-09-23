import { Product, BundleItem } from '../types';

export const BUNDLE_ITEMS: Record<string, BundleItem> = {
  'android-pin': {
    id: 'android-enamel-pin-set',
    name: 'Android Bugdroid Enamel Lapel Pin (Set of 2)',
    priceUSD: 9.0,
    priceINR: 750,
    image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=600&q=80',
    blurb: 'Add for $9 to unlock instant Free Shipping (Threshold: $50 / ₹1,999)!',
    category: 'Stationery & Pins',
  },
  'android-stickers': {
    id: 'android-eco-sticker-sheet',
    name: 'Android Bugdroid Die-Cut Eco Vinyl Sticker Pack',
    priceUSD: 5.0,
    priceINR: 399,
    image: 'https://images.unsplash.com/photo-1572375992501-4b0892d50c69?auto=format&fit=crop&w=600&q=80',
    blurb: 'Budget-friendly cart booster to clear the free shipping line.',
    category: 'Stationery & Pins',
  },
};

export const PRODUCTS: Product[] = [
  // 1. STAPLE / BEST-SELLER (Q3 Requirement: Repositioned as top-row hero item in Apparel and carousel)
  {
    id: 'google-marine-layer-1998-pullover',
    name: 'Google Marine Layer 1998 Pullover',
    category: 'Apparel',
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
    badge: 'Best-Seller • Organic Anchor',
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
      'The definitive Google apparel staple. Co-engineered with Marine Layer using their famously absurdly-soft recycled Supima cotton fleece. Anchored by the 1998 retro Google crest, this piece accounts for the highest repeat conversion volume from organic search shoppers.',
  },

  // 2. HIGH-INTEREST OPPORTUNITY (Q3 Requirement: Moved to Homepage Feature Grid, dynamic bundle)
  {
    id: 'android-classic-plushie',
    name: 'Android Classic Plushie',
    category: 'Android Collectibles',
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
      'The viral Android Bugdroid mascot reimagined in tactile ultra-soft plush. While attracting over 12,000 views and immense add-to-cart desire, shoppers previously abandoned due to shipping cost friction. Pair with an enamel pin to unlock immediate free shipping!',
  },

  // 3. PDP ENHANCED: Super G Gradient Tee (Module B: Size guide, multi-angle gallery, fabric specs)
  {
    id: 'super-g-gradient-tee',
    name: 'Super G Gradient Tee',
    category: 'Apparel',
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

  // 4. LOW-TICKET CART BOOSTER (Pin)
  {
    id: 'android-enamel-pin-set',
    name: 'Android Bugdroid Enamel Lapel Pin (Set of 2)',
    category: 'Stationery & Pins',
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

  // 5. LOW-TICKET CART BOOSTER (Stickers)
  {
    id: 'android-eco-sticker-sheet',
    name: 'Android Bugdroid Die-Cut Eco Vinyl Sticker Pack',
    category: 'Stationery & Pins',
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

  // 6. HIGH-CONVERTING DRINKWARE
  {
    id: 'google-chrome-eco-water-bottle',
    name: 'Google Chrome Eco Insulated Bottle (750ml)',
    category: 'Drinkware',
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

  // 7. LIFESTYLE & GEAR
  {
    id: 'google-campus-recycled-backpack',
    name: 'Google Campus Recycled Commuter Backpack (22L)',
    category: 'Lifestyle & Gear',
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

  // 8. ANDROID DESK FIGURINE
  {
    id: 'android-collectible-mini-bot',
    name: 'Android Green Desk Bot Figurine',
    category: 'Android Collectibles',
    priceUSD: 16.0,
    priceINR: 1299,
    image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80',
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

  // 9. MINIMALIST MUG
  {
    id: 'google-minimalist-ceramic-mug',
    name: 'Google Minimalist Matte Ceramic Mug (350ml)',
    category: 'Drinkware',
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

  // 10. TECH ACCESSORY
  {
    id: 'google-pixel-tech-pouch',
    name: 'Google Pixel Weatherproof Tech Organizer',
    category: 'Lifestyle & Gear',
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

  // 11. HEAVYWEIGHT FRENCH TERRY HOODIE
  {
    id: 'google-french-terry-hoodie',
    name: 'Google Heavyweight French Terry Zip Hoodie',
    category: 'Apparel',
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

  // 12. HARDCOVER BAMBOO JOURNAL
  {
    id: 'google-bamboo-hardcover-journal',
    name: 'Google Bamboo Hardcover Journal & Stylus Set',
    category: 'Stationery & Pins',
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
