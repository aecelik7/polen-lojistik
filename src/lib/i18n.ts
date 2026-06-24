import { ar, de, en, ru, tr } from "@/data/locales";
import type { LocaleData } from "@/data/locales";

export const supportedLocales = ["tr", "en", "ru", "ar", "de"] as const;
export type Locale = (typeof supportedLocales)[number];

export const defaultLocale: Locale = "tr";
export const foreignLocales = supportedLocales.filter(
  (locale): locale is Exclude<Locale, "tr"> => locale !== defaultLocale,
);

export const pageKeys = [
  "home",
  "about",
  "services",
  "missionVision",
  "values",
  "contact",
] as const;
export type PageKey = (typeof pageKeys)[number];

export const routeSlugs: Record<Locale, Record<PageKey, string>> = {
  tr: {
    home: "",
    about: "hakkimizda",
    services: "hizmetlerimiz",
    missionVision: "misyon-vizyon",
    values: "degerlerimiz",
    contact: "iletisim",
  },
  en: {
    home: "",
    about: "about",
    services: "services",
    missionVision: "mission-vision",
    values: "values",
    contact: "contact",
  },
  ru: {
    home: "",
    about: "about",
    services: "services",
    missionVision: "mission-vision",
    values: "values",
    contact: "contact",
  },
  ar: {
    home: "",
    about: "about",
    services: "services",
    missionVision: "mission-vision",
    values: "values",
    contact: "contact",
  },
  de: {
    home: "",
    about: "about",
    services: "services",
    missionVision: "mission-vision",
    values: "values",
    contact: "contact",
  },
};

const localeData: Record<Locale, LocaleData> = { tr, en, ru, ar, de };

export function isLocale(value: string): value is Locale {
  return supportedLocales.includes(value as Locale);
}

export function getLocaleData(locale: Locale): LocaleData {
  return localeData[locale];
}

export function getLocalizedPath(locale: Locale, page: PageKey): string {
  const slug = routeSlugs[locale][page];

  if (locale === defaultLocale) {
    return slug ? `/${slug}` : "/";
  }

  return slug ? `/${locale}/${slug}` : `/${locale}`;
}

export function getLocaleFromPathname(pathname: string): Locale {
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  return firstSegment && isLocale(firstSegment) && firstSegment !== defaultLocale
    ? firstSegment
    : defaultLocale;
}

export function getPageKey(locale: Locale, slug?: string): PageKey | null {
  const normalizedSlug = slug?.replace(/^\/+|\/+$/g, "") ?? "";
  const match = pageKeys.find((page) => routeSlugs[locale][page] === normalizedSlug);
  return match ?? null;
}

export function getPageKeyFromPathname(pathname: string): PageKey {
  const cleanPath = pathname.split(/[?#]/)[0];
  const segments = cleanPath.split("/").filter(Boolean);
  const locale = getLocaleFromPathname(cleanPath);
  const slug = locale === defaultLocale ? segments[0] : segments[1];
  return getPageKey(locale, slug) ?? "home";
}

export function switchLocalePath(pathname: string, targetLocale: Locale): string {
  return getLocalizedPath(targetLocale, getPageKeyFromPathname(pathname));
}

export function isRtlLocale(locale: Locale): boolean {
  return locale === "ar";
}
