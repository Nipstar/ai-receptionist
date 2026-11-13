/**
 * Competitor pricing, shared by the home, pricing and compare tables.
 * Source: vendor pricing pages and 2026 pricing guides, checked November 2026
 * (site.pricesChecked). Re-check before launch and whenever a vendor changes plans.
 * State facts only. Never disparage a competitor.
 */

export type Unit = 'calls' | 'minutes';

export type Competitor = {
  id: string;
  name: string;
  kind: 'ai' | 'human';
  monthly: number;
  /** "About $250": price is an approximate published starting point */
  approx?: boolean;
  included: { amount: number; unit: Unit };
  /** Published overage, if any */
  overage?: { amount: number; per: 'call' | 'min' };
  /** Shown in "Over the limit" when there is no published per-unit rate */
  overageLabel?: string;
  /** Separate website chat product price per month, if any */
  chatAddon?: number;
  /** Shown in the "Website chat" column when there is no add-on price */
  chatLabel?: string;
};

export const competitors: Competitor[] = [
  {
    id: 'ionos',
    name: 'IONOS AI Receptionist',
    kind: 'ai',
    monthly: 39,
    included: { amount: 30, unit: 'calls' },
    overage: { amount: 0.49, per: 'call' },
    chatAddon: 15,
  },
  {
    id: 'ringcentral',
    name: 'RingCentral AI Receptionist',
    kind: 'ai',
    monthly: 49,
    included: { amount: 100, unit: 'minutes' },
    overageLabel: 'Usage-based',
    chatLabel: 'Not in plan',
  },
  {
    id: 'trillet',
    name: 'Trillet',
    kind: 'ai',
    monthly: 49,
    included: { amount: 150, unit: 'minutes' },
    overage: { amount: 0.2, per: 'min' },
  },
  {
    id: 'cloudtalk',
    name: 'CloudTalk AI receptionist',
    kind: 'ai',
    monthly: 99,
    included: { amount: 200, unit: 'minutes' },
    overageLabel: 'Next tier',
  },
  {
    id: 'dialzara',
    name: 'Dialzara Business Pro',
    kind: 'ai',
    monthly: 99,
    included: { amount: 220, unit: 'minutes' },
    overage: { amount: 0.45, per: 'min' },
    chatLabel: 'Not in plan',
  },
  {
    id: 'ruby',
    name: 'Ruby (human)',
    kind: 'human',
    monthly: 250,
    approx: true,
    included: { amount: 50, unit: 'minutes' },
    overageLabel: 'Per minute',
  },
  {
    id: 'smithai',
    name: 'Smith.ai (human)',
    kind: 'human',
    monthly: 300,
    approx: true,
    included: { amount: 30, unit: 'calls' },
    overageLabel: 'Per call',
  },
];

/**
 * Market ranges quoted in copy ("Most AI receptionists ... cost between $30 and $300 a month",
 * "Human answering services usually start around $175 to $250 a month for 50 to 100 minutes").
 * From the same 2026 pricing guides.
 */
export const market = {
  aiLow: 30,
  aiHigh: 300,
  humanLow: 175,
  humanHigh: 250,
  humanMinutesLow: 50,
  humanMinutesHigh: 100,
};

/** Aggregated row used on the home table */
export const humanAggregate = {
  name: 'Human answering service',
  monthly: market.humanHigh,
  minutesLow: market.humanMinutesLow,
  minutesHigh: market.humanMinutesHigh,
};

export function getCompetitor(id: string): Competitor {
  const c = competitors.find((x) => x.id === id);
  if (!c) throw new Error(`Unknown competitor ${id}`);
  return c;
}
