// TikTok Pixel event helpers
// Pixel base script is loaded in index.html

declare global {
  interface Window {
    ttq?: {
      track: (event: string, params?: Record<string, unknown>) => void;
      page: () => void;
      identify?: (params: Record<string, unknown>) => void;
    };
  }
}

const safeTrack = (event: string, params?: Record<string, unknown>) => {
  try {
    if (typeof window !== 'undefined' && window.ttq?.track) {
      window.ttq.track(event, params);
    }
  } catch (e) {
    console.warn('TikTok pixel track failed', e);
  }
};

export const trackViewContent = (params: {
  contentId: string;
  contentName: string;
  price: number;
  currency: string;
}) => {
  safeTrack('ViewContent', {
    content_id: params.contentId,
    content_type: 'product',
    content_name: params.contentName,
    value: params.price,
    currency: params.currency,
  });
};

export const trackAddToCart = (params: {
  contentId: string;
  contentName: string;
  price: number;
  currency: string;
  quantity?: number;
}) => {
  safeTrack('AddToCart', {
    content_id: params.contentId,
    content_type: 'product',
    content_name: params.contentName,
    value: params.price * (params.quantity || 1),
    currency: params.currency,
    quantity: params.quantity || 1,
  });
};

export const trackInitiateCheckout = (params: {
  value: number;
  currency: string;
  contents: Array<{ content_id: string; quantity: number; content_name?: string; price?: number }>;
}) => {
  safeTrack('InitiateCheckout', {
    value: params.value,
    currency: params.currency,
    contents: params.contents,
    content_type: 'product',
  });
};

export const trackPurchase = (params: {
  value: number;
  currency: string;
  contents: Array<{ content_id: string; quantity: number; content_name?: string; price?: number }>;
}) => {
  safeTrack('CompletePayment', {
    value: params.value,
    currency: params.currency,
    contents: params.contents,
    content_type: 'product',
  });
};
