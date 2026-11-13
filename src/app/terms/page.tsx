import { site } from '@/site.config';
import { pageMeta } from '@/lib/seo';
import { routes } from '@/lib/routes';
import { LegalPage } from '@/components/LegalPage';

// noindex until the reviewed terms replace the placeholder below.
export const metadata = pageMeta({
  title: 'Terms of service | AI Receptionist for small business',
  description: `The terms for the ${site.name} service from ${site.owner}.`,
  path: routes.terms,
  noindex: true,
});

export default function TermsPage() {
  return (
    <LegalPage title="Terms of service">
      <p className="mt-6">These terms are being finalized. They will cover:</p>
      <h2>The service</h2>
      <p>[[TERMS_SERVICE: what the plan includes, included minutes, extra minutes and the 80% usage email]]</p>
      <h2>Billing and cancellation</h2>
      <p>[[TERMS_BILLING: monthly billing, no setup fee, cancel any time, what happens to minutes at cancellation]]</p>
      <h2>Your responsibilities</h2>
      <p>[[TERMS_CUSTOMER: accurate business information, call forwarding, lawful use, carrier texting rules]]</p>
      <h2>Contact</h2>
      <p>{site.owner}, {site.email}.</p>
    </LegalPage>
  );
}
