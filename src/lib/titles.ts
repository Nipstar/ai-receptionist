import { price } from '@/lib/format';
import type { Industry } from '@/content/types';

/** Brief pattern "AI Receptionist for [Industry] | Calls + Chat for $97/mo", shortened when over 60 characters. */
export function industryTitle(i: Industry): string {
  const full = `AI Receptionist for ${i.titleName} | Calls + Chat for ${price}/mo`;
  if (full.length <= 60) return full;
  const mid = `AI Receptionist for ${i.titleName} | Calls + Chat ${price}/mo`;
  return mid.length <= 60 ? mid : `AI Receptionist for ${i.titleName} | ${price}/mo`;
}
