import { site } from "@/data/site";
import CallToAction from "@/components/CallToAction";
import Image from "next/image";
import { getPageMetadata } from "@/lib/seo";

const title = `Hakkımızda | ${site.title}`;
const description = "Ambarlı Gümrük Müdürlüğü’ne bağlı 25 yıllık tecrübemizle, 10.080 m² kapalı/açık alanda kurumsal lojistik çözümler sunuyoruz.";
export const metadata = getPageMetadata("tr", "about", title, description);

export default function AboutPage() {
  return (
    <main className="bg-[#111111] text-white">
      {/* 1. SEKTÖR: MANŞET - Derinlik ve Kontrast Ayarı */}
      <section className="relative isolate overflow-hidden bg-[#000]">
        {/* Görseli Image bileşeniyle güçlendirip gradient ile keskinleştiriyoruz */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/general/lojistik-depo5.jpg"
            alt="Polen Operasyon Merkezi"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/80 via-[#111111]/40 to-[#111111]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[85rem] px-6 py-32 lg:px-12 lg:py-48">
          <div className="relative border border-[#333333] bg-[#111111]/40 p-12 backdrop-blur-sm lg:p-24">
            {/* Köşe Lazerleri */}
            <div className="absolute left-0 top-0 h-[4px] w-32 bg-[#C90606]" />
            <div className="absolute bottom-0 right-0 h-[4px] w-32 bg-[#C90606]" />

            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <div className="mb-12 flex items-center gap-6">
                  <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#C90606]">
                    {site.breadcrumbs.hakkimizda.title} — POLEN LOJİSTİK AĞI
                  </span>
                  <div className="h-px w-16 bg-[#333333]" />
                </div>

                <h1 className="mb-12 text-5xl font-bold uppercase leading-[0.9] tracking-tighter lg:text-[7rem]">
                  Operasyon <br />
                  <span className="italic text-white/10">Merkezi.</span>
                </h1>

                <p className="border-l-4 border-[#C90606] pl-6 text-2xl font-bold leading-snug lg:pl-8 lg:text-3xl">
                  Kurumsal lojistikte şansa yer yoktur. Sadece <span className="text-[#C90606]">disiplin</span> ve kesintisiz operasyon gücü vardır.
                </p>
              </div>

              {/* SAĞ KOLON: Teknik Parametre Kartı */}
              <div className="w-full lg:col-span-5">
                <div className="relative border border-[#333333] bg-[#0A0A0A]/90 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] lg:p-10">
                  <div className="absolute right-8 top-0 h-[2px] w-12 bg-[#C90606]" />
                  <div className="space-y-8">
                    {[
                      { label: "Bağlı Kurum", value: "AMBARLI GÜMRÜK MD." },
                      { label: "Operasyon Sahası", value: "10.080 m² ALAN" },
                      { label: "Aktif Deneyim", value: "25 YIL", color: "text-[#C90606]" }
                    ].map((item, i) => (
                      <div key={i} className="flex flex-col border-b border-[#242424] pb-4 last:border-0 last:pb-0">
                        <span className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#666666]">{item.label}</span>
                        <span className={`text-lg font-bold tracking-wider text-[#E5E5E5] ${item.color || ""}`}>
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SEKTÖR: KURUMSAL YETKİNLİK (Görseli daha baskın hale getirdik) */}
      <section className="py-32">
        <div className="mx-auto max-w-[85rem] px-6 lg:px-12">
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
            {/* SOL TARAF: Görseli "Frame" içine aldık */}
            <div className="group relative order-2 lg:order-1">
              <div className="absolute -left-4 -top-4 z-10 h-24 w-24 border-l-[3px] border-t-[3px] border-[#C90606]" />
              <div className="relative h-[600px] w-full overflow-hidden border border-[#242424] bg-[#111111]">
                <Image
                  src="/images/general/lojistik-depo6.jpg"
                  alt="Polen Operasyon Sahası"
                  fill
                  className="object-cover grayscale opacity-50 transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
                />
              </div>
            </div>

            {/* SAĞ TARAF: Metin */}
            <div className="order-1 space-y-10 lg:order-2">
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#666666]">01 // Doktrin</div>
              <h2 className="text-4xl font-bold leading-[1.1] lg:text-5xl">
                Saha Operasyonlarında <br />
                <span className="text-[#C90606]">Ağırsıklet Gücü.</span>
              </h2>
              <div className="h-1 w-16 bg-[#333333]" />
              <div className="space-y-8 border-l border-[#242424] pl-8">
                <p className="text-xl font-light leading-relaxed text-[#E5E5E5]">Polen Antrepo, gümrüklü saha operasyonlarında tavizsiz bir kurumsal standart sunar.</p>
                <p className="text-lg font-light leading-relaxed text-[#A3A3A3]">25 yıllık deneyimimizle lojistik süreçlerinizi <strong className="text-white">güvenilir, hızlı ve milimetrik</strong> olarak takip edilebilir bir yapıda yönetiyoruz.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SEKTÖR: VERİ MATRİSİ VE PROTOKOLLER (Aynı tutulabilir, başarılılar) */}
      {/* ... */}

      <CallToAction />
    </main>
  );
}
