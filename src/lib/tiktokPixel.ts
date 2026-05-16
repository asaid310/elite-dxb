// TikTok Pixel event helpers
// Pixel base script is loaded in index.html
// Follows TikTok Events API spec: https://business-api.tiktok.com/portal/docs?id=1739585702922241

declare global {
  interface Window {
    ttq?: {
      track: (event: string, params?: Record<string, unknown>) => void;
      page: () => void;
      identify?: (params: Record<string, unknown>) => void;
    };
  }
}

export interface TikTokContent {
  content_id: string;
  content_type?: 'product' | 'product_group';
  content_name?: string;
  quantity?: number;
  price?: number;
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

const buildPayload = (
  contents: TikTokContent[],
  value: number,
  currency: string,
  extra?: Record<string, unknown>
) => ({
  contents: contents.map((c) => ({
    content_type: 'product',
    ...c,
  })),
  value,
  currency,
  ...(extra || {}),
});

// SHA-256 hash helper (browser-side) for PII identify()
async function sha256(input: string): Promise<string> {
  const data = new TextEncoder().encode(input.trim().toLowerCase());
  const buf = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

export async function identifyUser(params: {
  email?: string;
  phone?: string;
  externalId?: string;
}) {
  try {
    if (typeof window === 'undefined' || !window.ttq?.identify) return;
    const payload: Record<string, string> = {};
    if (params.email) payload.email = await sha256(params.email);
    if (params.phone) payload.phone_number = await sha256(params.phone);
    if (params.externalId) payload.external_id = await sha256(params.externalId);
    window.ttq.identify(payload);
  } catch (e) {
    console.warn('TikTok identify failed', e);
  }
}

export const trackViewContent = (params: {
  contentId: string;
  contentName: string;
  price: number;
  currency: string;
}) => {
  safeTrack(
    'ViewContent',
    buildPayload(
      [{ content_id: params.contentId, content_name: params.contentName, price: params.price, quantity: 1 }],
      params.price,
      params.currency
    )
  );
};

export const trackAddToCart = (params: {
  contentId: string;
  contentName: string;
  price: number;
  currency: string;
  quantity?: number;
}) => {
  const qty = params.quantity || 1;
  safeTrack(
    'AddToCart',
    buildPayload(
      [{ content_id: params.contentId, content_name: params.contentName, price: params.price, quantity: qty }],
      params.price * qty,
      params.currency
    )
  );
};

export const trackAddToWishlist = (params: {
  contentId: string;
  contentName: string;
  price: number;
  currency: string;
}) => {
  safeTrack(
    'AddToWishlist',
    buildPayload(
      [{ content_id: params.contentId, content_name: params.contentName, price: params.price, quantity: 1 }],
      params.price,
      params.currency
    )
  );
};

export const trackSearch = (params: {
  query: string;
  currency: string;
  contents?: TikTokContent[];
  value?: number;
}) => {
  safeTrack(
    'Search',
    buildPayload(params.contents || [], params.value || 0, params.currency, {
      search_string: params.query,
    })
  );
};

export const trackInitiateCheckout = (params: {
  value: number;
  currency: string;
  contents: TikTokContent[];
}) => {
  safeTrack('InitiateCheckout', buildPayload(params.contents, params.value, params.currency));
};

export const trackAddPaymentInfo = (params: {
  value: number;
  currency: string;
  contents: TikTokContent[];
}) => {
  safeTrack('AddPaymentInfo', buildPayload(params.contents, params.value, params.currency));
};

export const trackPlaceAnOrder = (params: {
  value: number;
  currency: string;
  contents: TikTokContent[];
}) => {
  safeTrack('PlaceAnOrder', buildPayload(params.contents, params.value, params.currency));
};

export const trackCompleteRegistration = (params: {
  value?: number;
  currency?: string;
  contents?: TikTokContent[];
}) => {
  safeTrack(
    'CompleteRegistration',
    buildPayload(params.contents || [], params.value || 0, params.currency || 'USD')
  );
};

export const trackPurchase = (params: {
  value: number;
  currency: string;
  contents: TikTokContent[];
}) => {
  safeTrack('Purchase', buildPayload(params.contents, params.value, params.currency));
};
