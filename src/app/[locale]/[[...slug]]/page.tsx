import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HomePageContent from "@/components/pages/HomePageContent";
import LocalizedPageContent from "@/components/pages/LocalizedPageContent";
import {
  foreignLocales,
  getLocaleData,
  getPageKey,
  isLocale,
  isRtlLocale,
  pageKeys,
  routeSlugs,
  type Locale,
  type PageKey,
} from "@/lib/i18n";
import { getPageMetadata } from "@/lib/seo";

interface LocalePageProps {
  params: {
    locale: string;
    slug?: string[];
  };
}

export const dynamicParams = false;

export function generateStaticParams() {
  return foreignLocales.flatMap((locale) =>
    pageKeys.map((page) => ({
      locale,
      slug: routeSlugs[locale][page] ? [routeSlugs[locale][page]] : [],
    })),
  );
}

function resolveRoute(params: LocalePageProps["params"]): { locale: Locale; page: PageKey } {
  if (!isLocale(params.locale) || params.locale === "tr" || (params.slug?.length ?? 0) > 1) {
    notFound();
  }

  const page = getPageKey(params.locale, params.slug?.[0]);
  if (!page) notFound();

  return { locale: params.locale, page };
}

export function generateMetadata({ params }: LocalePageProps): Metadata {
  const { locale, page } = resolveRoute(params);
  const data = getLocaleData(locale);
  const pageMetadata = data.ui.pages[page];

  return getPageMetadata(locale, page, pageMetadata.title, pageMetadata.description);
}

export default function LocalePage({ params }: LocalePageProps) {
  const { locale, page } = resolveRoute(params);
  const data = getLocaleData(locale);

  return (
    <div lang={locale} dir={isRtlLocale(locale) ? "rtl" : "ltr"}>
      {page === "home" ? (
        <HomePageContent data={data} locale={locale} />
      ) : (
        <LocalizedPageContent page={page} data={data} locale={locale} />
      )}
    </div>
  );
}
