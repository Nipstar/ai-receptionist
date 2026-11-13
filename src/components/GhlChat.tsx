import Script from 'next/script';
import { isPlaceholder, site } from '@/site.config';

/**
 * LeadConnector (GHL) chat widget, loaded after everything else so it never blocks
 * rendering or shifts layout (the launcher is position: fixed).
 * Embed from GHL: Sites > Chat Widget > Get Code. If GHL gives you a different snippet,
 * copy its src and data-* attributes here.
 * Renders nothing while the widget ID is still a placeholder.
 */
export function GhlChat() {
  const id = site.ghl.chatWidgetId;
  if (!id || isPlaceholder(id)) return null;
  return (
    <Script
      id="ghl-chat-widget"
      src="https://widgets.leadconnectorhq.com/loader.js"
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      data-widget-id={id}
      strategy="lazyOnload"
    />
  );
}
