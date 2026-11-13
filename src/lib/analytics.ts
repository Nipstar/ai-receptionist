'use client';

type DataLayerEvent = { event: 'click_call' | 'click_start' | 'chat_open' | 'purchase_complete' } & Record<
  string,
  unknown
>;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function track(e: DataLayerEvent) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(e);
}

const UTM_KEY = 'arsb_utm';
export const UTM_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid', 'msclkid'];

/** First landing wins: store UTM params once per session. */
export function captureUtm() {
  try {
    if (sessionStorage.getItem(UTM_KEY)) return;
    const params = new URLSearchParams(window.location.search);
    const found: Record<string, string> = {};
    for (const key of UTM_PARAMS) {
      const v = params.get(key);
      if (v) found[key] = v;
    }
    found.landing_page = window.location.pathname;
    sessionStorage.setItem(UTM_KEY, JSON.stringify(found));
  } catch {
    /* storage blocked: links still work without UTMs */
  }
}

export function readUtm(): Record<string, string> {
  try {
    return JSON.parse(sessionStorage.getItem(UTM_KEY) || '{}');
  } catch {
    return {};
  }
}
