import { site } from "@/data/site";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { getPageMetadata } from "@/lib/seo";

const title = `Değerlerimiz | ${site.title}`;
const description = site.breadcrumbs.degerlerimiz.description;
export const metadata = getPageMetadata("tr", "values", title, description);

export default function ValuesPage() {
  return (
    <main className="bg-[#111111] text-white">
      
      {/* 1. SEKTÖR: MASTERPIECE MANŞET */}
      <section className="relative isolate overflow-hidden border-b border-[#242424] bg-[#000] pb-32 pt-48">
        
        {/* Diğer sayfa hero'larıyla uyumlu görsel ve kontrollü koyu katman */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/general/lojistik-depo6.jpg" 
            className="h-full w-full object-cover opacity-50" 
            alt="Polen Lojistik Vizyon Arkaplan"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/80 via-[#111111]/40 to-[#111111]" />
        </div>
        <div className="relative z-10 mx-auto max-w-[85rem] px-6 lg:px-12">
          
          <div className="border border-[#333333] p-12 lg:p-24 relative bg-[#111111]/60 backdrop-blur-sm">
            <div className="absolute top-0 left-0 w-32 h-[4px] bg-[#C90606]" />
            <div className="absolute bottom-0 right-0 w-32 h-[4px] bg-[#C90606]" />
            
            <div className="flex items-center gap-6 mb-12">
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#C90606]">
                {site.breadcrumbs.degerlerimiz.title}
              </span>
              <div className="h-px w-20 bg-[#333333]" />
            </div>
            
            <h1 className="text-5xl lg:text-[7rem] font-bold font-display leading-[0.9] tracking-tighter mb-16">
              POLEN'İN <br />
              <span className="text-white/10 italic">KURUMSAL</span> <br />
              ANAYASASI
            </h1>
            
            <div className="grid lg:grid-cols-2 gap-12 items-end">
              <p className="text-[#A3A3A3] text-xl font-light leading-relaxed max-w-lg border-l border-[#C90606] pl-8">
                25 yıllık operasyonel tecrübemizi, sadece bir iş disipliniyle değil; köklü bir değerler bütünüyle geleceğe taşıyoruz.
              </p>
              <div className="text-[12px] uppercase tracking-[0.2em] text-[#666666] lg:text-right">
                Verifikasyon No: POL-2026-VAL <br />
                Tüm Hakları Saklıdır
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* 2. SEKTÖR: ZIGZAG MANIFESTO */}
      <section className="py-24">
        <div className="mx-auto max-w-[85rem] px-6 lg:px-12">
          {site.values.map((value, index) => (
            <div key={value.title} className="group grid lg:grid-cols-2 gap-16 py-24 border-b border-[#242424] items-center">
              <div className={`text-[12rem] font-bold leading-none text-white/5 font-display ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                0{index + 1}
              </div>
              <div className="space-y-6">
                <h2 className="text-4xl font-bold font-display group-hover:text-[#C90606] transition-colors">
                  {value.title}
                </h2>
                <p className="text-[#A3A3A3] text-lg leading-relaxed max-w-lg">
                  {value.description}
                </p>
                <div className="pt-8">
                  <div className="w-full h-px bg-[#242424] group-hover:bg-[#C90606] transition-colors duration-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SEKTÖR: FİNAL BLOKU */}
      <section className="bg-white text-[#111111] py-24">
        <div className="mx-auto max-w-[85rem] px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-12">
          <h3 className="text-3xl font-bold font-display max-w-lg">
            25 yıllık tecrübemizi, bu değerlerin ışığında yarınlara taşıyoruz.
          </h3>
          <Link
            href="/iletisim"
            className="group flex items-center gap-4 border border-[#111111] px-10 py-5 font-bold uppercase tracking-[0.1em] hover:bg-[#C90606] hover:border-[#C90606] hover:text-white transition-all duration-300"
          >
            İş Birliği İçin İletişime Geçin
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>
      
    </main>
  );
}
