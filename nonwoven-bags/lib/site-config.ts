/**
 * Single source of truth for site-wide identity — name, URL, contact
 * details — consumed by every page's metadata export, the root
 * layout's structured data, robots.ts and sitemap.ts. Update here
 * once rather than hunting down every `<script type="ld+json">`.
 */

export const SITE_URL = "https://alorexpackaging.com";
export const SITE_NAME = "Alorex Packaging LLP";
export const SITE_NAME_SHORT = "Alorex Packaging";

export const SITE_DESCRIPTION =
  "Alorex Packaging LLP is a non woven bag manufacturer in India producing D-Cut, W-Cut, U-Cut, loop handle, box and BOPP laminated bags, custom printed and supplied in bulk with pan-India delivery.";

export const PHONE_DISPLAY = "+91 97565 65319";
export const PHONE_E164 = "+919756565319";
export const PHONE_HREF = "tel:+919756565319";

export const EMAIL = "info@alorexpackaging.com";
export const EMAIL_HREF = "mailto:info@alorexpackaging.com";

export const WHATSAPP_NUMBER = "919756565319";

export function whatsappHref(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
