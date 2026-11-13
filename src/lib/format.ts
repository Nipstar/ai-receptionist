import { site } from '@/site.config';
import { competitors, market } from '@/content/competitors';

/** $97, $114.50, $0.35 */
export function money(n: number): string {
  return Number.isInteger(n) ? `$${n}` : `$${n.toFixed(2)}`;
}

export const price = money(site.plan.price);
export const overage = money(site.plan.overagePerMinute);

/** Monthly cost for a given number of minutes used. */
export function monthCost(minutesUsed: number): number {
  const extra = Math.max(0, minutesUsed - site.plan.minutes);
  return Math.round((site.plan.price + extra * site.plan.overagePerMinute) * 100) / 100;
}

/**
 * Tokens usable in any content string. Content files never hold a raw price:
 * they say {price} and this fills it from site.config.ts.
 */
export const tokens: Record<string, string> = {
  price,
  overage,
  minutes: String(site.plan.minutes),
  setupFee: money(site.plan.setupFee),
  alertAt: `${site.plan.alertAtPercent}%`,
  goLive: site.plan.goLive,
  textAlertApproval: site.plan.textAlertApproval,
  typicalLow: String(site.plan.typicalCallMinutes.low),
  typicalHigh: String(site.plan.typicalCallMinutes.high),
  owner: site.owner,
  pricesChecked: site.pricesChecked,
  minuteRounding: site.policy.minuteRounding,
  rollover: site.policy.rollover,
  textingFees: site.policy.textingFees,
};

// Competitor and market figures: {ionos.monthly}, {ionos.included}, {ionos.overage}, {ionos.chat}, {market.humanLow}
for (const c of competitors) {
  tokens[`${c.id}.monthly`] = money(c.monthly);
  tokens[`${c.id}.included`] = `${c.included.amount} ${c.included.unit}`;
  if (c.overage) tokens[`${c.id}.overage`] = money(c.overage.amount);
  if (c.chatAddon) tokens[`${c.id}.chat`] = money(c.chatAddon);
}
for (const [k, v] of Object.entries(market)) tokens[`market.${k}`] = k.includes('Minutes') ? String(v) : money(v);

export function fill(text: string): string {
  return text.replace(/\{([\w.]+)\}/g, (m, key: string) => {
    if (!(key in tokens)) throw new Error(`Unknown content token ${m} in: ${text}`);
    return tokens[key];
  });
}
