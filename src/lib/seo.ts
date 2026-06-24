import type { Metadata } from "next";
import {
  defaultLocale,
  getLocalizedPath,
  supportedLocales,
  type Locale,
  type PageKey,
} from "@/lib/i18n";

const defaultSiteUrl = "https://polenlojistik.com.tr";
const legacySiteHostname = new URL(defaultSiteUrl).hostname.replace(/\.tr$/i, "");

function normalizeSiteUrl(url: string): string {
  const normalizedUrl = url.replace(/\/+$/, "");

  try {
    const hostname = new URL(normalizedUrl).hostname.replace(/^www\./i, "");
    return hostname === legacySiteHostname ? defaultSiteUrl : normalizedUrl;
  } catch {
    return normalizedUrl;
  }
}

export const siteUrl = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL || defaultSiteUrl);

export const siteName = "Polen Antrepoculuk ve Lojistik A.Ş.";
export const ogImagePath = "/images/og/polen-og.jpg";

const openGraphLocales: Record<Locale, string> = {
  tr: "tr_TR",
  en: "en_US",
  ru: "ru_RU",
  ar: "ar_AR",
  de: "de_DE",
};

export function absoluteUrl(path: string): string {
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function getAlternates(
  page: PageKey,
  locale: Locale = defaultLocale,
): NonNullable<Metadata["alternates"]> {
  const defaultPath = getLocalizedPath(defaultLocale, page);
  const languages = Object.fromEntries(
    supportedLocales.map((locale) => [locale, absoluteUrl(getLocalizedPath(locale, page))]),
  );

  return {
    canonical: absoluteUrl(getLocalizedPath(locale, page)),
    languages: {
      ...languages,
      "x-default": absoluteUrl(defaultPath),
    },
  };
}

export function getOpenGraph(
  locale: Locale,
  page: PageKey,
  title: string,
  description: string,
): NonNullable<Metadata["openGraph"]> {
  return {
    title,
    description,
    siteName,
    type: "website",
    locale: openGraphLocales[locale],
    url: absoluteUrl(getLocalizedPath(locale, page)),
    images: [
      {
        url: absoluteUrl(ogImagePath),
        alt: siteName,
      },
    ],
  };
}

export function getTwitter(
  title: string,
  description: string,
): NonNullable<Metadata["twitter"]> {
  return {
    card: "summary_large_image",
    title,
    description,
    images: [absoluteUrl(ogImagePath)],
  };
}

export function getPageMetadata(
  locale: Locale,
  page: PageKey,
  title: string,
  description: string,
): Metadata {
  return {
    title,
    description,
    alternates: getAlternates(page, locale),
    openGraph: getOpenGraph(locale, page, title, description),
    twitter: getTwitter(title, description),
  };
}
