import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/site-config";

type PageMetadataInput = {
  /** Page-specific title — the "%s | Alorex Packaging" template in the
   *  root layout appends the brand suffix, so keep this to the unique
   *  part only (e.g. "Custom & Printed Non Woven Bags"). */
  title: string;
  /** One or two natural sentences — no keyword stuffing. */
  description: string;
  /** Route path, e.g. "/" or "/products". Resolved against
   *  metadataBase for the canonical link and og:url. */
  path: string;
  /**
   * Full, self-contained `<title>` string — only needed for the page
   * collocated with the root layout (the home page). Next.js does not
   * run the root layout's title template over a page in that same
   * route segment, so home has to spell out the brand suffix itself;
   * every other route gets it from the template automatically.
   */
  fullTitle?: string;
};

/**
 * Builds the title/description/canonical/Open Graph/Twitter block for
 * one route. Every page's `metadata` export should be built through
 * this rather than hand-rolling the OG/Twitter objects, so the shape
 * — and the fields search engines and social crawlers expect — stays
 * identical across the site.
 */
export function pageMetadata({
  title,
  description,
  path,
  fullTitle,
}: PageMetadataInput): Metadata {
  return {
    title: fullTitle ?? title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
