import { site } from '@/site.config';
import { pageMeta } from '@/lib/seo';
import { routes } from '@/lib/routes';
import { LegalPage } from '@/components/LegalPage';

// noindex until the reviewed policy replaces the placeholder below.
export const metadata = pageMeta({
  title: 'Privacy policy | AI Receptionist for small business',
  description: `How ${site.owner} handles personal information on this website and in the AI receptionist service.`,
  path: routes.privacy,
  noindex: true,
});

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy policy">
      <p className="mt-6">This policy is being finalized. It will cover:</p>
      <h2>Who we are</h2>
      <p>{site.name} {site.tagline} is a product of {site.owner}. Contact: {site.email}.</p>
      <h2>What we collect</h2>
      <p>[[PRIVACY_COLLECTION: website visitors, order details, and the call and chat details your receptionist takes on your behalf]]</p>
      <h2>How we use it and who we share it with</h2>
      <p>[[PRIVACY_USE: delivering call summaries, billing, service providers such as the phone, chat and payment platforms]]</p>
      <h2>How long we keep it, and your rights</h2>
      <p>[[PRIVACY_RETENTION_AND_RIGHTS]]</p>
    </LegalPage>
  );
}
