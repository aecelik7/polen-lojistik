import { site } from "@/data/site";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import MapSection from "@/components/MapSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getPageMetadata } from "@/lib/seo";

const title = `İletişim | ${site.title}`;
const description = "Polen Lojistik karargahı ile doğrudan irtibata geçin. Operasyonel talepleriniz için iletişim kanallarımız.";
export const metadata = getPageMetadata("tr", "contact", title, description);

export default function ContactPage() {
  return (
    <main className="bg-[#111111] text-white">
      
      {/* 1. SEKTÖR: MANŞET */}
      <section className="relative isolate overflow-hidden bg-[#000]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/general/lojistik-depo2.jpg"
            alt="Polen Lojistik İletişim"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/80 via-[#111111]/40 to-[#111111]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[85rem] px-6 py-32 lg:px-12 lg:py-48">
          <div className="relative border border-[#333333] bg-[#111111]/40 p-12 backdrop-blur-sm lg:p-24">
            <div className="absolute left-0 top-0 h-[4px] w-32 bg-[#C90606]" />
            <div className="absolute bottom-0 right-0 h-[4px] w-32 bg-[#C90606]" />

            <div className="mb-12 flex items-center gap-6">
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#C90606]">
                İrtibat Terminali
              </span>
              <div className="h-px w-16 bg-[#333333]" />
            </div>

            <h1 className="mb-12 text-5xl font-bold uppercase leading-[0.9] tracking-tighter lg:text-[7rem]">
              Hatları <br />
              <span className="italic text-white/20">Açın.</span>
            </h1>

            <p className="max-w-2xl border-l-4 border-[#C90606] pl-6 text-2xl font-bold leading-snug lg:pl-8 lg:text-3xl">
              Operasyon talepleriniz veya saha incelemesi için ana karargahla <span className="text-[#C90606]">doğrudan</span> bağlantı kurun.
            </p>
          </div>
        </div>
      </section>

     {/* 2. SEKTÖR: İLETİŞİM MATRİSİ (BİLGİLER + FORM) */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[90rem] px-6 lg:px-12">
          {/* 12'Lİ KUSURSUZ GRID: 5 (Bilgi) - 7 (Form) */}
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-24">
            
            {/* SOL KOLON: İletişim Bilgileri (Premium Çizgi Tasarımı) */}
            <div className="flex flex-col justify-center lg:col-span-5">
              
              <div className="mb-14">
                <h2 className="text-3xl font-bold uppercase tracking-tight text-white lg:text-4xl">
                  Karargah <span className="text-[#C90606]">Koordinatları</span>
                </h2>
                <div className="mt-6 h-[2px] w-12 bg-[#C90606]" />
              </div>

              {/* Kutular İptal, Mimari Çizgiler Devrede */}
              <div className="space-y-10">
                
                {/* Adres Modülü */}
                <div className="group border-l-[2px] border-[#242424] pl-6 transition-colors duration-300 hover:border-[#C90606]">
                  <strong className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-[#666666] transition-colors group-hover:text-[#C90606]">
                    Saha Adresi
                  </strong>
                  <p className="text-[14px] font-light leading-relaxed text-[#A3A3A3]">
                    {site.contact.address}
                  </p>
                </div>

                {/* Telefon Modülü */}
                <div className="group border-l-[2px] border-[#242424] pl-6 transition-colors duration-300 hover:border-[#C90606]">
                  <strong className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-[#666666] transition-colors group-hover:text-[#C90606]">
                    Operasyon Hattı
                  </strong>
                  <a href={`tel:${site.contact.phone.replace(/\s+/g, '')}`} className="text-2xl font-bold tracking-wider text-[#E5E5E5] transition-colors group-hover:text-[#C90606]">
                    {site.contact.phone}
                  </a>
                </div>

                {/* E-Posta Modülü */}
                <div className="group border-l-[2px] border-[#242424] pl-6 transition-colors duration-300 hover:border-[#C90606]">
                  <strong className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-[#666666] transition-colors group-hover:text-[#C90606]">
                    Dijital İrtibat
                  </strong>
                  <a href={`mailto:${site.contact.email}`} className="text-[16px] font-light text-[#E5E5E5] transition-colors group-hover:text-white">
                    {site.contact.email}
                  </a>
                </div>

                {/* WhatsApp Modülü */}
                <div className="group border-l-[2px] border-[#242424] pl-6 transition-colors duration-300 hover:border-[#25D366]">
                  <strong className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-[#666666] transition-colors group-hover:text-[#25D366]">
                    {site.ui.whatsapp.quickLabel}
                  </strong>
                  <p className="mb-5 text-[13px] leading-relaxed text-[#888888]">
                    {site.ui.whatsapp.quickDescription}
                  </p>
                  <WhatsAppButton variant="solid" label={site.ui.whatsapp.label} />
                </div>

              </div>
            </div>

            {/* SAĞ KOLON: İrtibat Formu (Premium Minimalist Kasa) */}
            <div className="lg:col-span-7">
              <div className="relative border border-[#1A1A1A] bg-[#050505] p-8 shadow-2xl lg:p-14">
                
                {/* Üstteki İnce Kırmızı Lazer Vurgusu */}
                <div className="absolute left-0 top-0 h-[2px] w-full bg-[#1A1A1A]">
                  <div className="h-full w-24 bg-[#C90606]" />
                </div>
                
                <div className="mb-10 lg:mb-12">
                  <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.3em] text-[#666666]">
                    Sistem Girişi
                  </span>
                  <h3 className="text-2xl font-bold uppercase tracking-wide text-white lg:text-3xl">
                    Operasyon Talebi Oluştur
                  </h3>
                </div>

                {/* Form Bileşeni */}
                <ContactForm />

              </div>
            </div>

          </div>
        </div>
      </section>

      <MapSection compact />

    </main>
  );
}
