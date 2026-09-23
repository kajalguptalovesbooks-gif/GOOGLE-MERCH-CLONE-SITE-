export type Region = 'US' | 'IN';

export type Category =
  | 'All'
  | 'Android Collectibles & Plushies'
  | '1998 Retro Collection'
  | 'YouTube Kids & Apparel'
  | 'Chrome Dino Collectibles'
  | 'Classic Google Drinkware, Accessories & Stationery';

export type PriceFilter = 'all' | 'under-25' | 'under-50' | 'under-100' | 'above-100';

export type Occasion = 'All' | 'Family' | 'Friends' | 'Work' | 'Yourself';
export type FeedbackReason =
  | 'Price'
  | 'Shipping'
  | 'Delivery availability'
  | 'Payment'
  | 'Just browsing'
  | 'Not ready to buy'
  | 'Other';

export interface BundleItem {
  id: string;
  name: string;
  priceUSD: number;
  priceINR: number;
  image: string;
  blurb: string;
  category: Category;
}

export interface Product {
  id: string;
  name: string;
  category: Category;
  priceINR: number;
  priceUSD: number;
  image: string;
  gallery: string[];
  rating: number;
  reviewsCount: number;
  description: string;
  badge?: string;
  ga4InsightTag?: string;
  isBestSeller?: boolean; // For Marine Layer Pullover (Staple)
  isHighInterestOpportunity?: boolean; // For Android Classic Plushie
  hasInteractiveSizeGuide?: boolean; // For Super G Gradient Tee & Apparel
  fabricBullets?: string[]; // Module B prominent fabric quality bullet points
  bundleRecommendation?: BundleItem; // Dynamic bundling to clear Free Shipping threshold
  sizes?: string[];
  colors?: { name: string; hex: string }[];
  inStock: boolean;
  material?: string;
  dimensions?: string;
  fitInfo?: string;
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}

export interface ShippingCalculation {
  country: string;
  zipCode: string;
  method: 'standard' | 'express';
  costUSD: number;
  costINR: number;
  isFree: boolean;
  estimatedDelivery: string;
}

export interface CheckoutFormData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pinCode: string;
  country: string;
  paymentMethod: 'gpay' | 'card' | 'paypal' | 'upi';
}

export interface ConfirmedOrder {
  orderId: string;
  createdAt: string;
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  discount: number;
  total: number;
  currency: 'USD' | 'INR';
  shippingDetails: CheckoutFormData;
  estimatedDeliveryDate: string;
  paymentMethod: string;
  freeShippingUnlocked: boolean;
}

export interface AnalyticsLog {
  id: string;
  timestamp: string;
  eventName:
    | 'homepage_visit'
    | 'category_select'
    | 'product_view'
    | 'size_guide_open'
    | 'add_to_cart'
    | 'bundle_add'
    | 'cart_view'
    | 'shipping_calculated'
    | 'checkout_initiate'
    | 'step_shipping_view'
    | 'purchase_complete'
    | 'ga4_deck_open'
    | 'ab_mode_toggle'
    | 'currency_change';
  details?: Record<string, unknown>;
}

export type CheckoutMode = 'optimized' | 'baseline';
