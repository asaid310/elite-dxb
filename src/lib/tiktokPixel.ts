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

export interface TikTokDebugEntry {
  ts: number;
  event: string;
  params?: Record<string, unknown>;
  delivered: boolean;
}

const DEBUG_KEY = 'tt_debug_log';
const DEBUG_FLAG = 'tt_debug';
const MAX_ENTRIES = 100;

export function isDebugEnabled(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const url = new URL(window.location.href);
    if (url.searchParams.get('ttdebug') === '1') {
      localStorage.setItem(DEBUG_FLAG, '1');
      return true;
    }
    if (url.searchParams.get('ttdebug') === '0') {
      localStorage.removeItem(DEBUG_FLAG);
      return false;
    }
    return localStorage.getItem(DEBUG_FLAG) === '1';
  } catch {
    return false;
  }
}

function logDebug(entry: TikTokDebugEntry) {
  try {
    const raw = sessionStorage.getItem(DEBUG_KEY);
    const arr: TikTokDebugEntry[] = raw ? JSON.parse(raw) : [];
    arr.unshift(entry);
    sessionStorage.setItem(DEBUG_KEY, JSON.stringify(arr.slice(0, MAX_ENTRIES)));
    window.dispatchEvent(new CustomEvent('tt-debug-log', { detail: entry }));
    if (isDebugEnabled()) {
      // eslint-disable-next-line no-console
      console.log(
        `%c[TikTok] ${entry.event}`,
        'color:#25F4EE;font-weight:bold',
        entry.params,
        entry.delivered ? '✓' : '✗ pixel not loaded'
      );
    }
  } catch {
    /* ignore */
  }
}

export function getDebugLog(): TikTokDebugEntry[] {
  try {
    const raw = sessionStorage.getItem(DEBUG_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function clearDebugLog() {
  try {
    sessionStorage.removeItem(DEBUG_KEY);
    window.dispatchEvent(new CustomEvent('tt-debug-log', { detail: null }));
  } catch {
    /* ignore */
  }
}

const safeTrack = (event: string, params?: Record<string, unknown>) => {
  const delivered = typeof window !== 'undefined' && !!window.ttq?.track;
  try {
    if (delivered) window.ttq!.track(event, params);
  } catch (e) {
    console.warn('TikTok pixel track failed', e);
  }
  logDebug({ ts: Date.now(), event, params, delivered });
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
