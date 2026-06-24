import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/data/site";
import { getLocalizedPath, type Locale } from "@/lib/i18n";
import type { LocaleData } from "@/data/locales";

interface HeroProps {
  data?: LocaleData;
  locale?: Locale;
}

export default function Hero({ data = site, locale = "tr" }: HeroProps) {
  const copy = data.ui.hero;

  return (
    <section className="relative overflow-hidden border-b border-[#242424] bg-[#111111] pb-24 pt-32 lg:pb-36 lg:pt-48">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10 bg-[#111111]/40" />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#111111]/90 via-[#111111]/50 to-transparent rtl:bg-gradient-to-l" />
        <img src="/images/general/lojistik-depo.jpg" alt={copy.imageAlt} className="h-full w-full object-cover object-center" />
      </div>

      <div className="relative z-20 mx-auto max-w-[85rem] px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-10">
            <div className="flex items-center gap-4">
              <div className="h-[2px] w-12 bg-[#C90606]" />
              <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-white drop-shadow-md">{copy.eyebrow}</span>
            </div>

            <div className="space-y-6">
              <h1 className="break-words font-display text-4xl font-bold leading-[1.1] tracking-tight text-white drop-shadow-lg sm:text-5xl lg:text-[4rem]">
                {copy.titleBefore} <br className="hidden sm:block" />
                <span className="text-[#C90606] drop-shadow-md">{copy.titleAccent}</span> <br className="hidden sm:block" />
                {copy.titleAfter}
              </h1>
              <p className="max-w-xl text-base font-light leading-relaxed text-[#E5E5E5] drop-shadow-md sm:text-lg">{copy.description}</p>
            </div>

            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <Link href={getLocalizedPath(locale, "services")} className="group inline-flex items-center justify-center gap-3 bg-[#C90606] px-8 py-4 text-[13px] font-bold uppercase tracking-[0.1em] text-white shadow-lg transition-colors hover:bg-[#A00505]">
                {copy.servicesCta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
              </Link>
              <Link href={getLocalizedPath(locale, "contact")} className="inline-flex items-center justify-center border border-white/30 bg-black/20 px-8 py-4 text-[13px] font-bold uppercase tracking-[0.1em] text-white shadow-lg backdrop-blur-sm transition-colors hover:bg-white hover:text-[#111111]">
                {copy.contactCta}
              </Link>
            </div>
          </div>

          <div className="relative lg:ps-10">
            <div className="absolute -inset-y-4 end-4 start-6 hidden border border-white/10 lg:block" />
            <div className="relative border-s-4 border-[#C90606] bg-[#111111]/80 p-8 shadow-2xl backdrop-blur-md lg:p-12">
              <div className="mb-10">
                <h3 className="mb-2 font-display text-2xl font-bold text-white">{copy.strengthTitle}</h3>
                <p className="text-[14px] leading-relaxed text-[#CCCCCC]">{copy.strengthDescription}</p>
              </div>
              <div className="space-y-8">
                {copy.features.map((feature, index) => (
                  <div key={feature.title}>
                    {index > 0 && <div className="mb-8 h-px w-full bg-white/10" />}
                    <div className="group">
                      <h4 className="mb-2 text-[13px] font-bold uppercase tracking-[0.1em] text-white transition-colors group-hover:text-[#C90606]">{feature.title}</h4>
                      <p className="text-sm leading-relaxed text-[#AAAAAA]">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
