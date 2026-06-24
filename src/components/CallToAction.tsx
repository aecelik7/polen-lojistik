import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/data/site";
import type { LocaleData } from "@/data/locales";
import { getLocalizedPath, type Locale } from "@/lib/i18n";

interface CTAProps {
  title?: string;
  data?: LocaleData;
  locale?: Locale;
}

export default function CallToAction({ 
  title,
  data = site,
  locale = "tr",
}: CTAProps) {
  return (
    <section className="bg-white py-24 border-t border-[#E5E5E5] relative overflow-hidden">
      {/* Beyaz zemin üzerine çok hafif endüstriyel çizgiler */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 1px, transparent 10px)' }} 
      />
      
      <div className="relative z-10 mx-auto max-w-[85rem] px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-12">
        
        <h3 className="text-3xl lg:text-4xl font-bold font-display text-[#111111] max-w-2xl leading-tight">
          {title ?? data.ui.cta.defaultTitle}
        </h3>
        
        <Link
          href={`${getLocalizedPath(locale, "contact")}#contact-form`}
          className="group flex w-full max-w-full items-center justify-center gap-4 bg-[#C90606] px-6 py-5 text-center font-bold uppercase tracking-[0.15em] text-white shadow-[0_10px_30px_rgba(201,6,6,0.2)] transition-colors duration-500 hover:bg-[#111111] hover:shadow-[0_10px_30px_rgba(17,17,17,0.2)] md:w-auto md:shrink-0 lg:px-10 lg:tracking-[0.2em]"
        >
          {data.ui.cta.button}
          <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform rtl:rotate-180" />
        </Link>

      </div>
    </section>
  );
}
