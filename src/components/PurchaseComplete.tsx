'use client';

import { useEffect } from 'react';
import { site } from '@/site.config';
import { readUtm, track } from '@/lib/analytics';

/** Fires purchase_complete once per session when the GHL order form redirects here. */
export function PurchaseComplete() {
  useEffect(() => {
    try {
      if (sessionStorage.getItem('arsb_purchase_tracked')) return;
      sessionStorage.setItem('arsb_purchase_tracked', '1');
    } catch {
      /* storage blocked: still track once per page view */
    }
    track({
      event: 'purchase_complete',
      value: site.plan.price,
      currency: site.plan.currency,
      ...readUtm(),
    });
  }, []);
  return null;
}
