import type { MetadataRoute } from "next";
import {
  defaultLocale,
  getLocalizedPath,
  pageKeys,
  supportedLocales,
  type Locale,
  type PageKey,
} from "@/lib/i18n";
import { absoluteUrl } from "@/lib/seo";

function getPriority(locale: Locale, page: PageKey): number {
  if (page === "home") return locale === defaultLocale ? 1 : 0.9;
  if (page === "services" || page === "contact") return 0.8;
  return 0.7;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return supportedLocales.flatMap((locale) =>
    pageKeys.map((page) => ({
      url: absoluteUrl(getLocalizedPath(locale, page)),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: getPriority(locale, page),
    })),
  );
}
