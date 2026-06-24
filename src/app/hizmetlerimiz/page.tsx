import { site } from "@/data/site";
import CallToAction from "@/components/CallToAction";
import Image from "next/image";
import { getPageMetadata } from "@/lib/seo";

const title = `Hizmetlerimiz | ${site.title}`;
const description = "Karayolu, denizyolu, havayolu ve antrepo hizmetlerimizle uçtan uca entegre lojistik çözümleri.";
export const metadata = getPageMetadata("tr", "services", title, description);

export default function ServicesPage() {
  return (
    <main className="bg-[#111111] text-white">
      
      {/* 1. SEKTÖR: MANŞET - Derinlik ve Kontrast Ayarı */}
      <section className="relative isolate overflow-hidden bg-[#000]">
        
        {/* Görseli Image bileşeniyle güçlendirip gradient ile keskinleştiriyoruz */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/general/lojistik-ulaşım-tır.jpg"
            alt="Polen Operasyon Ağı"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/80 via-[#111111]/40 to-[#111111]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[85rem] px-6 pb-16 pt-28 sm:pb-20 sm:pt-28 lg:px-12 lg:py-48">
          {/* Kutunun arka planını Orijinal Masterpiece haline (/40 ve sm blur) geri aldık */}
          <div className="relative min-w-0 max-w-full border border-[#333333] bg-[#111111]/40 p-6 backdrop-blur-sm sm:p-10 lg:p-24">
            {/* Köşe Lazerleri */}
            <div className="absolute left-0 top-0 h-[4px] w-32 bg-[#C90606]" />
            <div className="absolute bottom-0 right-0 h-[4px] w-32 bg-[#C90606]" />

            <div className="mb-6 flex min-w-0 items-center gap-4 sm:mb-12 sm:gap-6">
              <span className="min-w-0 break-words text-[11px] font-bold uppercase tracking-[0.3em] text-[#C90606] hyphens-auto [overflow-wrap:anywhere]">
                Aktif Protokoller
              </span>
              <div className="h-px w-10 shrink-0 bg-[#333333] sm:w-16" />
            </div>

            <h1 className="mb-6 max-w-full break-words text-4xl font-bold uppercase leading-[0.95] tracking-tighter hyphens-auto [overflow-wrap:anywhere] sm:mb-12 sm:text-5xl lg:text-[7rem] lg:leading-[0.9]">
              Lojistik <br />
              {/* Opaklık kararında: white/20 */}
              <span className="italic text-white/20">Hizmetlerimiz.</span>
            </h1>

            <p className="max-w-full break-words border-l-4 border-[#C90606] pl-4 text-lg font-bold leading-snug hyphens-auto [overflow-wrap:anywhere] sm:max-w-2xl sm:pl-6 sm:text-xl lg:pl-8 lg:text-3xl">
              Küresel tedarik zincirinde hızı ve şeffaflığı merkeze alarak, yükünüzü <span className="text-[#C90606]">stratejik bir varlık</span> olarak yönetiyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SEKTÖR: HİZMET KARTLARI MATRİSİ */}
      <section className="py-32">
        <div className="mx-auto max-w-[85rem] px-6 lg:px-12">
          <div className="mb-16">
            <h2 className="text-3xl font-bold uppercase tracking-wider text-[#E5E5E5]">
              Operasyon <span className="text-[#C90606]">Ağları</span>
            </h2>
            <div className="mt-6 h-[2px] w-24 bg-[#333333]" />
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {site.services.map((service, index) => (
              <div
                key={service.title}
                className="group relative border border-[#242424] bg-[#0A0A0A] p-10 transition-all duration-500 hover:-translate-y-2 hover:border-[#C90606] hover:bg-[#111111]"
              >
                <div className="absolute left-0 top-0 h-[2px] w-0 bg-[#C90606] transition-all duration-500 group-hover:w-full" />

                <span className="mb-8 block text-[4rem] font-bold leading-none text-white/5 transition-colors duration-500 group-hover:text-white/10">
                  0{index + 1}
                </span>

                <h3 className="mb-6 text-2xl font-bold uppercase text-white transition-colors group-hover:text-[#C90606]">
                  {service.title}
                </h3>

                <p className="text-lg font-light leading-relaxed text-[#A3A3A3] transition-colors group-hover:text-[#E5E5E5]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SEKTÖR: GÖRSEL KANIT / GEMİ OPERASYONU */}
      <section className="py-32 border-t border-[#242424]">
        <div className="mx-auto max-w-[85rem] px-6 lg:px-12">
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
            {/* SOL TARAF: Frame İçinde Gemi Görseli */}
            <div className="group relative order-2 lg:order-1">
              <div className="absolute -left-4 -top-4 z-10 h-24 w-24 border-l-[3px] border-t-[3px] border-[#C90606]" />
              <div className="absolute -bottom-4 -right-4 z-10 h-24 w-24 border-b-[3px] border-r-[3px] border-[#C90606]" />
              
              <div className="relative h-[600px] w-full overflow-hidden border border-[#242424] bg-[#111111]">
                <Image
                  src="/images/general/lojistik-ulaşım-gemi.jpg"
                  alt="Denizyolu Operasyon Ağı"
                  fill
                  className="object-cover grayscale opacity-50 transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
                />
              </div>
            </div>

            {/* SAĞ TARAF: Metin */}
            <div className="order-1 space-y-10 lg:order-2">
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#666666]">02 // Entegrasyon</div>
              <h2 className="text-4xl font-bold leading-[1.1] lg:text-5xl">
                Kıtalararası <br />
                <span className="text-[#C90606]">Bağlantı.</span>
              </h2>
              <div className="h-1 w-16 bg-[#333333]" />
              <div className="space-y-8 border-l border-[#242424] pl-8">
                <p className="text-xl font-light leading-relaxed text-[#E5E5E5]">
                  Deniz, hava ve kara entegrasyonu ile sınırları ortadan kaldırıyoruz.
                </p>
                <p className="text-lg font-light leading-relaxed text-[#A3A3A3]">
                  Global acente ağımız ve <strong className="text-white">stratejik liman anlaşmalarımız</strong> sayesinde, dünyanın her noktasına kesintisiz ve izlenebilir teslimat sağlıyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SEKTÖR: CTA */}
      <CallToAction title="Yeni bir operasyon başlatmak için hatları açın." />

    </main>
  );
}
