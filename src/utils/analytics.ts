// Google Analytics 4 (GA4) gtag.js Tracking Integration
// Implements Section 5 of the PRD:
// Tracked Events: page_view, view_item, add_to_cart, begin_checkout, purchase

import { Product, CartItem, ConfirmedOrder } from '../types';

export interface GA4Item {
  item_id: string;
  item_name: string;
  item_category?: string;
  item_brand?: string;
  item_variant?: string;
  price: number;
  quantity?: number;
  currency?: string;
}

export interface GA4EventRecord {
  id: string;
  timestamp: string;
  eventName: 'page_view' | 'view_item' | 'add_to_cart' | 'begin_checkout' | 'purchase';
  params: Record<string, any>;
  formattedCode: string;
}

// Global declaration for window.gtag and window.dataLayer
declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

// In-memory event stream buffer for the live inspector & academic viva
const eventStream: GA4EventRecord[] = [];
const subscribers = new Set<(event: GA4EventRecord) => void>();

function notifySubscribers(event: GA4EventRecord) {
  eventStream.unshift(event);
  if (eventStream.length > 50) {
    eventStream.pop();
  }
  subscribers.forEach((callback) => {
    try {
      callback(event);
    } catch (err) {
      console.error('GA4 subscriber error:', err);
    }
  });
}

/**
 * Dispatch an event to window.gtag and notify internal event bus
 */
export function sendGA4Event(
  eventName: 'page_view' | 'view_item' | 'add_to_cart' | 'begin_checkout' | 'purchase',
  params: Record<string, any>
) {
  // Push to window.dataLayer
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, params);
    } else {
      window.dataLayer.push({ event: eventName, ...params });
    }
  }

  const record: GA4EventRecord = {
    id: `ga4-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
    timestamp: new Date().toLocaleTimeString(),
    eventName,
    params,
    formattedCode: `gtag('event', '${eventName}', ${JSON.stringify(params, null, 2)});`,
  };

  notifySubscribers(record);
  console.log(`[GA4 Event Fired] ${eventName}:`, params);
  return record;
}

/**
 * 1. Track page_view
 */
export function trackPageView(pageTitle?: string, pageLocation?: string) {
  return sendGA4Event('page_view', {
    page_title: pageTitle || (typeof document !== 'undefined' ? document.title : 'Google Merchandise Store'),
    page_location: pageLocation || (typeof window !== 'undefined' ? window.location.href : 'https://merchandise-store.google.com'),
    page_path: typeof window !== 'undefined' ? window.location.pathname + window.location.search : '/',
    send_to: 'G-GMSDEMO2026',
  });
}

/**
 * 2. Track view_item
 */
export function trackViewItem(product: Product, currency: 'USD' | 'INR') {
  const price = currency === 'INR' ? product.priceINR : product.priceUSD;
  const item: GA4Item = {
    item_id: product.id,
    item_name: product.name,
    item_category: product.category,
    item_brand: product.category.includes('Android')
      ? 'Android'
      : product.category.includes('YouTube')
      ? 'YouTube'
      : product.category.includes('Chrome Dino')
      ? 'Chrome Dino'
      : 'Google',
    price,
    currency,
  };

  return sendGA4Event('view_item', {
    currency,
    value: price,
    items: [item],
  });
}

/**
 * 3. Track add_to_cart
 */
export function trackAddToCart(
  product: Product,
  quantity: number = 1,
  currency: 'USD' | 'INR',
  selectedSize?: string,
  selectedColor?: string
) {
  const price = currency === 'INR' ? product.priceINR : product.priceUSD;
  const item: GA4Item = {
    item_id: product.id,
    item_name: product.name,
    item_category: product.category,
    item_brand: product.category.includes('Android')
      ? 'Android'
      : product.category.includes('YouTube')
      ? 'YouTube'
      : product.category.includes('Chrome Dino')
      ? 'Chrome Dino'
      : 'Google',
    item_variant: [selectedSize, selectedColor].filter(Boolean).join(' / ') || undefined,
    price,
    quantity,
    currency,
  };

  return sendGA4Event('add_to_cart', {
    currency,
    value: price * quantity,
    items: [item],
  });
}

/**
 * 4. Track begin_checkout
 */
export function trackBeginCheckout(
  items: CartItem[],
  totalValue: number,
  currency: 'USD' | 'INR',
  shippingCost: number = 0
) {
  const ga4Items: GA4Item[] = items.map((cartItem) => {
    const price = currency === 'INR' ? cartItem.product.priceINR : cartItem.product.priceUSD;
    return {
      item_id: cartItem.product.id,
      item_name: cartItem.product.name,
      item_category: cartItem.product.category,
      item_variant: [cartItem.selectedSize, cartItem.selectedColor].filter(Boolean).join(' / ') || undefined,
      price,
      quantity: cartItem.quantity,
      currency,
    };
  });

  return sendGA4Event('begin_checkout', {
    currency,
    value: totalValue,
    shipping: shippingCost,
    items_count: items.reduce((acc, i) => acc + i.quantity, 0),
    items: ga4Items,
  });
}

/**
 * 5. Track purchase
 */
export function trackPurchase(order: ConfirmedOrder) {
  const ga4Items: GA4Item[] = order.items.map((item) => {
    const price = order.currency === 'INR' ? item.product.priceINR : item.product.priceUSD;
    return {
      item_id: item.product.id,
      item_name: item.product.name,
      item_category: item.product.category,
      item_variant: [item.selectedSize, item.selectedColor].filter(Boolean).join(' / ') || undefined,
      price,
      quantity: item.quantity,
      currency: order.currency,
    };
  });

  return sendGA4Event('purchase', {
    transaction_id: order.orderId,
    value: order.total,
    tax: 0,
    shipping: order.deliveryFee,
    currency: order.currency,
    payment_type: order.paymentMethod,
    items: ga4Items,
  });
}

/**
 * Subscribe to the live GA4 event stream
 */
export function subscribeGA4Events(callback: (event: GA4EventRecord) => void) {
  subscribers.add(callback);
  return () => {
    subscribers.delete(callback);
  };
}

/**
 * Get current event stream snapshot
 */
export function getGA4EventStream(): GA4EventRecord[] {
  return [...eventStream];
}

/**
 * Clear the local event stream
 */
export function clearGA4EventStream() {
  eventStream.length = 0;
}
