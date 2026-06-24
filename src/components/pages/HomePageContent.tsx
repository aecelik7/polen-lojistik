import Link from "next/link";
import Hero from "@/components/Hero";
import MapSection from "@/components/MapSection";
import { site } from "@/data/site";
import { ArrowRight } from "lucide-react";
import type { LocaleData } from "@/data/locales";
import { getLocalizedPath, type Locale } from "@/lib/i18n";

interface HomePageContentProps {
  data?: LocaleData;
  locale?: Locale;
}

export default function HomePageContent({ data = site, locale = "tr" }: HomePageContentProps) {
  const copy = data.ui.home;

  return (
    <main className="overflow-x-hidden bg-[#111111] text-white">
      
      {/* HERO BÖLÜMÜ */}
      <Hero data={data} locale={locale} />

      {/* 1. SEKTÖR: HAKKIMIZDA (SİYAH ZEMİN - Değişmedi) */}
      <section className="border-b border-[#242424] bg-[#0A0A0A] py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[85rem] px-6 lg:px-12">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
            
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C90606]">
                  {copy.aboutLabel}
                </span>
                <div className="h-px w-12 bg-[#333333]" />
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold font-display uppercase leading-[1.1] mb-8">
                {copy.aboutTitle}
              </h2>
              
              <p className="text-[#A3A3A3] text-lg leading-relaxed font-light mb-10 border-s-2 border-[#C90606] ps-6">
                {data.companySummary}
              </p>
              
              <Link
                href={getLocalizedPath(locale, "about")}
                className="group inline-flex items-center gap-4 border border-[#333333] bg-[#111111] px-8 py-4 font-bold uppercase tracking-[0.1em] text-white hover:border-[#C90606] hover:bg-[#C90606] transition-all duration-300"
              >
                {copy.aboutCta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-px border border-[#242424] bg-[#242424] sm:grid-cols-2 lg:col-span-7">
              {data.whyPolen.map((reason, index) => (
                <div key={reason} className="bg-[#111111] p-10 relative group hover:bg-[#161616] transition-colors duration-500">
                  <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#C90606] transition-all duration-500 group-hover:w-full" />
                  <span className="text-[#666666] text-[10px] font-bold uppercase tracking-[0.2em] mb-6 block">
                    {copy.factor} 0{index + 1}
                  </span>
                  <p className="break-words text-xl font-bold text-[#E5E5E5] font-display group-hover:text-white transition-colors">
                    {reason}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 2. SEKTÖR: HİZMETLER (BEYAZ ZEMİN ÜZERİNE DEV KIRMIZI KARTLAR) */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
        {/* Beyaz zemin üzerine çok hafif endüstriyel çizgiler */}
        <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 1px, transparent 10px)' }} />

        <div className="relative z-10 mx-auto max-w-[85rem] px-6 lg:px-12">
          
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-2 h-2 bg-[#C90606] animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C90606]">
                  {copy.servicesLabel}
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold font-display uppercase text-[#111111]">
                <span className="text-[#111111] italic">{copy.servicesTitle}</span>
              </h2>
            </div>
            
            <Link
              href={getLocalizedPath(locale, "services")}
              className="text-[11px] font-bold uppercase tracking-[0.2em] text-white flex items-center gap-3 transition-all group bg-[#111111] hover:bg-[#C90606] px-8 py-4"
            >
              {copy.allServices}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          {/* Bembeyaz zemin üzerinde KAN KIRMIZISI KARTLAR */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {data.services.slice(0, 3).map((service, index) => (
              <div key={service.title} className="bg-[#C90606] p-12 relative group shadow-2xl hover:-translate-y-2 hover:bg-[#111111] transition-all duration-500">
                <div className="absolute top-0 left-0 w-full h-[3px] bg-white/20 group-hover:bg-[#C90606] transition-colors duration-500" />
                
                <span className="text-5xl font-bold font-display text-white/30 mb-8 block group-hover:text-[#333333] transition-colors">
                  0{index + 1}
                </span>
                
                <h3 className="break-words text-2xl font-bold text-white font-display mb-4">
                  {service.title}
                </h3>
                
                {/* Metin rengi hover olunca açık griye dönüyor */}
                <p className="text-white/90 leading-relaxed font-light mb-10 group-hover:text-[#A3A3A3] transition-colors">
                  {service.description}
                </p>
                
                <Link
                  href={getLocalizedPath(locale, "services")}
                  className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white group-hover:text-[#C90606] transition-colors"
                >
                  {copy.details} <ArrowRight className="w-3 h-3 group-hover:translate-x-2 transition-transform rtl:rotate-180" />
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. SEKTÖR: STRATEJİK YÖRÜNGE (SİYAH ZEMİN - Dinlenme Alanı) */}
      <section className="relative py-32 border-y border-[#242424] overflow-hidden bg-[#0A0A0A]">
        <div className="absolute inset-0 z-0 opacity-[0.02]">
          <img 
            src="/images/general/lojistik-depo6.jpg" 
            className="w-full h-full object-cover scale-105" 
            alt=""
          />
        </div>

        <div className="relative z-10 mx-auto max-w-[85rem] px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            
            <div className="border border-[#333333] p-12 lg:p-16 bg-[#111111]/90 backdrop-blur-sm relative group hover:border-[#C90606] transition-colors duration-500">
              <div className="absolute top-0 start-0 w-2 h-16 bg-[#C90606]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#666666] mb-6 block">
                {copy.mission}
              </span>
              <p className="text-xl leading-relaxed text-[#E5E5E5] font-light">
                {data.mission}
              </p>
            </div>

            <div className="border border-[#333333] p-12 lg:p-16 bg-[#111111]/90 backdrop-blur-sm relative group hover:border-[#C90606] transition-colors duration-500 lg:mt-16">
              <div className="absolute top-0 start-0 w-2 h-16 bg-[#C90606]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#666666] mb-6 block">
                {copy.vision}
              </span>
              <p className="text-xl leading-relaxed text-[#E5E5E5] font-light">
                {data.vision}
              </p>
            </div>

          </div>
        </div>
      </section>

      <MapSection data={data} />

      {/* 5. SEKTÖR: İLETİŞİM (BEYAZ ZEMİN, KIRMIZI VURGU) */}
      <section className="py-32 bg-white relative overflow-hidden border-t border-[#E5E5E5]">
        
        <div className="relative z-10 mx-auto max-w-[85rem] px-6 lg:px-12">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 lg:gap-24 items-center">
            
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#C90606] mb-6 block">
                {copy.connectionLabel}
              </span>
              <h2 className="text-4xl lg:text-6xl font-bold font-display uppercase text-[#111111] mb-8 leading-[1]">
                <span className="text-[#111111]">{copy.connectionTitle}</span>
              </h2>
              <p className="text-[#666666] text-xl font-light leading-relaxed max-w-lg mb-10">
                {copy.connectionDescription}
              </p>
              <Link
                href={getLocalizedPath(locale, "contact")}
                className="group inline-flex items-center gap-4 bg-[#C90606] px-10 py-5 font-bold uppercase tracking-[0.2em] text-white hover:bg-[#111111] transition-all duration-300"
              >
                {copy.connectionCta}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>

            {/* Beyaz zemin üzerinde patlayan DEV KIRMIZI KUTU */}
            <div className="bg-[#C90606] p-12 shadow-[0_20px_50px_rgba(201,6,6,0.3)] relative group hover:bg-[#111111] transition-colors duration-500">
              <div className="absolute top-0 end-8 w-12 h-[3px] bg-white group-hover:bg-[#C90606] transition-colors" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/70 mb-4 block">
                {copy.coordinates}
              </span>
              <p className="text-white text-xl font-display leading-relaxed">
                {data.contact.address}
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
