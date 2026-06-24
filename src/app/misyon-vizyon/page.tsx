import { site } from "@/data/site";
import CallToAction from "@/components/CallToAction";
import Image from "next/image";
import { getPageMetadata } from "@/lib/seo";

const title = `Misyon & Vizyon | ${site.title}`;
const description = "Lojistik sektöründeki stratejik hedeflerimiz, vizyonumuz ve tavizsiz kurumsal değerlerimiz.";
export const metadata = getPageMetadata("tr", "missionVision", title, description);

export default function MissionVisionPage() {
  return (
    <main className="bg-[#111111] text-white">
      
      {/* 1. SEKTÖR: MANŞET - (Uçak Görseli ve Onaylı Masterpiece Formatı) */}
      <section className="relative isolate overflow-hidden bg-[#000]">
        
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/general/lojistik-ulaşım-ucak.jpg"
            alt="Polen Havayolu ve Vizyon"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/80 via-[#111111]/40 to-[#111111]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[85rem] px-6 pb-16 pt-28 sm:pb-20 sm:pt-28 lg:px-12 lg:py-48">
          <div className="relative min-w-0 max-w-full border border-[#333333] bg-[#111111]/40 p-6 backdrop-blur-sm sm:p-10 lg:p-24">
            <div className="absolute left-0 top-0 h-[4px] w-32 bg-[#C90606]" />
            <div className="absolute bottom-0 right-0 h-[4px] w-32 bg-[#C90606]" />

            <div className="mb-6 flex min-w-0 items-center gap-4 sm:mb-12 sm:gap-6">
              <span className="min-w-0 break-words text-[11px] font-bold uppercase tracking-[0.3em] text-[#C90606] hyphens-auto [overflow-wrap:anywhere]">
                Stratejik Bildirge
              </span>
              <div className="h-px w-10 shrink-0 bg-[#333333] sm:w-16" />
            </div>

            <h1 className="mb-6 max-w-full break-words text-4xl font-bold uppercase leading-[0.95] tracking-tighter hyphens-auto [overflow-wrap:anywhere] sm:mb-12 sm:text-5xl lg:text-[7rem] lg:leading-[0.9]">
              Gelecek <br />
              <span className="italic text-white/20">Projeksiyonu.</span>
            </h1>

            <p className="max-w-full break-words border-l-4 border-[#C90606] pl-4 text-lg font-bold leading-snug hyphens-auto [overflow-wrap:anywhere] sm:max-w-2xl sm:pl-6 sm:text-xl lg:pl-8 lg:text-3xl">
              Sadece dünü ve bugünü değil, küresel tedarik zincirinin <span className="text-[#C90606]">yarınını</span> inşa ediyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SEKTÖR: MİSYON & VİZYON ÇİFTE NAMLUSU */}
      <section className="py-32">
        <div className="mx-auto max-w-[85rem] px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            
            {/* MİSYON BLOĞU */}
            <div className="relative border border-[#242424] bg-[#0A0A0A] p-12 lg:p-16">
              <div className="absolute -left-[1px] top-12 h-32 w-[3px] bg-[#C90606]" />
              <div className="mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-[#666666]">
                Hedef // 01
              </div>
              <h2 className="mb-8 text-4xl font-bold uppercase text-white font-display">
                Operasyonel <br /> Misyon.
              </h2>
              <div className="space-y-6">
                <p className="text-xl font-light leading-relaxed text-[#E5E5E5]">
                  Sıfır hata ve maksimum hız prensibiyle tedarik zincirindeki her halkayı çelik gibi sağlamlaştırmak.
                </p>
                <p className="text-lg font-light leading-relaxed text-[#A3A3A3]">
                  İş ortaklarımızın sınır ötesi operasyonlarında sadece bir taşıyıcı değil, aynı zamanda onların küresel rekabet gücünü artıran <strong className="text-white">stratejik bir kalkan</strong> olmak için buradayız. Her yük, bizim namusumuzdur.
                </p>
              </div>
            </div>

            {/* VİZYON BLOĞU */}
            <div className="relative border border-[#242424] bg-[#0A0A0A] p-12 lg:p-16">
              <div className="absolute -right-[1px] bottom-12 h-32 w-[3px] bg-[#C90606]" />
              <div className="mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-[#666666]">
                Ufuk // 02
              </div>
              <h2 className="mb-8 text-4xl font-bold uppercase text-white font-display">
                Küresel <br /> Vizyon.
              </h2>
              <div className="space-y-6">
                <p className="text-xl font-light leading-relaxed text-[#E5E5E5]">
                  Kıtalararası lojistiğin tavizsiz merkez üssü haline gelmek.
                </p>
                <p className="text-lg font-light leading-relaxed text-[#A3A3A3]">
                  Sadece kargo transfer eden bir yapıdan çıkıp, entegre teknoloji ve sarsılmaz bir disiplinle <strong className="text-white">lojistik standartlarını baştan yazan</strong>, sektörü yönlendiren bir güç merkezine dönüşmek en büyük vizyonumuzdur.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SEKTÖR: ÇEKİRDEK DEĞERLER (CORE VALUES) */}
      <section className="border-y border-[#242424] bg-[#161616] py-32">
        <div className="mx-auto max-w-[85rem] px-6 lg:px-12">
          
          <div className="mb-20 text-center">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#C90606] block mb-4">
              Karargah Anayasası
            </span>
            <h2 className="mb-6 text-4xl font-bold uppercase">Çekirdek Değerler</h2>
            <div className="mx-auto h-[2px] w-24 bg-[#333333]" />
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            
            {/* Değer 1 */}
            <div className="group relative border border-[#242424] bg-[#111111] p-10 transition-colors hover:border-[#C90606]">
              <div className="mb-8 text-5xl font-bold text-[#333333] transition-colors group-hover:text-[#C90606]">
                01
              </div>
              <h3 className="mb-4 text-2xl font-bold text-white uppercase">Tavizsiz Disiplin</h3>
              <p className="text-lg font-light text-[#A3A3A3]">
                Operasyonun her saniyesi planlıdır. Sahada ve masada kurallardan asla ödün verilmez.
              </p>
            </div>

            {/* Değer 2 */}
            <div className="group relative border border-[#242424] bg-[#111111] p-10 transition-colors hover:border-[#C90606]">
              <div className="mb-8 text-5xl font-bold text-[#333333] transition-colors group-hover:text-[#C90606]">
                02
              </div>
              <h3 className="mb-4 text-2xl font-bold text-white uppercase">Mutlak Şeffaflık</h3>
              <p className="text-lg font-light text-[#A3A3A3]">
                Kapalı kapılar ardında iş yapılmaz. Operasyonun her adımı denetlenebilir ve raporlanabilir.
              </p>
            </div>

            {/* Değer 3 */}
            <div className="group relative border border-[#242424] bg-[#111111] p-10 transition-colors hover:border-[#C90606]">
              <div className="mb-8 text-5xl font-bold text-[#333333] transition-colors group-hover:text-[#C90606]">
                03
              </div>
              <h3 className="mb-4 text-2xl font-bold text-white uppercase">Taktiksel Hız</h3>
              <p className="text-lg font-light text-[#A3A3A3]">
                Zamanla yarışmıyor, zamanı yönetiyoruz. Optimizasyon sayesinde gecikme ihtimalini ortadan kaldırıyoruz.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SEKTÖR: CTA */}
      <CallToAction title="Geleceğin operasyonlarına bugünden entegre olun." />

    </main>
  );
}
