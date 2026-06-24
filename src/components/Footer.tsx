"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  getLocaleData,
  getLocaleFromPathname,
  getLocalizedPath,
  isRtlLocale,
  type PageKey,
} from "@/lib/i18n";

const FOOTER_LOGO_SRC = "/images/logos/polen-logo-dark.svg";

const footerPages: PageKey[] = ["about", "services", "missionVision", "values"];

function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 10v7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M8 7.2v.1" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M12 17v-4.1c0-1.7 1-2.9 2.6-2.9 1.5 0 2.4 1 2.4 2.9V17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 10v7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function SocialButton({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      className="flex h-11 w-11 items-center justify-center border border-[#333333] bg-transparent text-[#888888] transition-all duration-300 hover:border-[#C90606] hover:text-[#C90606]"
    >
      {children}
    </button>
  );
}

export default function Footer() {
  const pathname = usePathname() || "/";
  const locale = getLocaleFromPathname(pathname);
  const data = getLocaleData(locale);
  const isRtl = isRtlLocale(locale);

  return (
    <footer
      lang={locale}
      dir={isRtl ? "rtl" : "ltr"}
      className="relative overflow-hidden border-t border-[#242424] bg-[#0A0A0A] text-white"
    >
      {/* 3px PREMIUM ÜST ÇİZGİ */}
      <div className="absolute left-0 top-0 h-[3px] w-full bg-[#C90606]" />

      <div className="mx-auto max-w-[90rem] px-6 py-16 lg:px-12">
        {/* PREMIUM 12'Lİ GRID: 4 - 2 - 3 - 3 ŞEKLİNDE KUSURSUZ BÖLÜNDÜ */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-12">
          
          {/* 1. SÜTUN: MARKA (4 Birim) */}
          <div className="lg:col-span-4 flex flex-col">
            <Link
              href={getLocalizedPath(locale, "home")}
              className="mb-10 inline-flex"
              aria-label="Polen Lojistik ana sayfa"
            >
              <Image
                src={FOOTER_LOGO_SRC}
                alt="Polen Lojistik"
                width={190}
                height={60}
                unoptimized
                className="h-11 w-auto object-contain sm:h-12"
              />
            </Link>

            <p className="mb-10 max-w-[22rem] text-[13px] font-light leading-loose text-[#888888]">
              {data.companySummary}
            </p>

            <div className="flex items-center gap-4 mt-auto">
              <SocialButton label="Instagram">
                <InstagramIcon />
              </SocialButton>
              <SocialButton label="LinkedIn">
                <LinkedinIcon />
              </SocialButton>
            </div>
          </div>

          {/* 2. SÜTUN: MENÜ (2 Birim) */}
          <div className="lg:col-span-2">
            <h4 className="mb-10 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#666666]">
              <span className="h-1.5 w-1.5 bg-[#C90606]" />
              {data.ui.footer.corporate}
            </h4>

            <ul className="space-y-5 text-[13px] font-bold text-[#E5E5E5]">
              {footerPages.map((page) => (
                <li key={page}>
                  <Link
                    href={getLocalizedPath(locale, page)}
                    className="transition-colors duration-300 hover:text-[#C90606]"
                  >
                    {data.ui.nav[page]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. SÜTUN: ADRESLER & SAHA (3 Birim) */}
          <div className="lg:col-span-3">
            <h4 className="mb-10 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#666666]">
              <span className="h-1.5 w-1.5 bg-[#C90606]" />
              Lokasyonlar
            </h4>

            <div className="space-y-8 text-[13px]">
              <div className="group border-l-[2px] border-[#242424] pl-5 transition-colors duration-300 hover:border-[#C90606]">
                <strong className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#888888] transition-colors group-hover:text-[#C90606]">
                  {data.ui.footer.headOffice}
                </strong>
                <span className="font-light leading-relaxed text-[#A3A3A3]">
                  {data.contact.address}
                </span>
              </div>

              <div className="border-l-[2px] border-[#C90606] pl-5">
                <strong className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#C90606]">
                  {data.ui.footer.fieldOperations}
                </strong>
                <span className="font-light leading-relaxed text-white/90">
                  {data.ui.footer.fieldDescription}
                </span>
              </div>
            </div>
          </div>

          {/* 4. SÜTUN: İLETİŞİM KANALLARI (3 Birim) */}
          <div className="lg:col-span-3">
            <h4 className="mb-10 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#666666]">
              <span className="h-1.5 w-1.5 bg-[#C90606]" />
              İrtibat
            </h4>

            <div className="space-y-8 text-[13px]">
              <div className="group border-l-[2px] border-[#242424] pl-5 transition-colors duration-300 hover:border-[#C90606]">
                <strong className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#888888] transition-colors group-hover:text-[#C90606]">
                  Hatlar
                </strong>
                <div className="flex flex-col gap-2 font-bold text-[#E5E5E5]">
                  <a href={`tel:${data.contact.phone.replace(/\s+/g, "")}`} className="transition-colors hover:text-[#C90606]">
                    {data.contact.phone}
                  </a>
                  <a href={`mailto:${data.contact.email}`} className="font-light text-[#A3A3A3] transition-colors hover:text-white">
                    {data.contact.email}
                  </a>
                </div>
              </div>

              <div className="border-l-[2px] border-[#242424] pl-5 transition-colors duration-300 hover:border-[#25D366]">
                <strong className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#888888] transition-colors hover:text-[#25D366]">
                  Hızlı Destek
                </strong>
                <div className="mt-2">
                  <WhatsAppButton
                    variant="footer"
                    label={`${data.ui.whatsapp.footerLabel}: ${data.contact.whatsapp}`}
                  />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ALT ŞERİT */}
        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-[#1D1D1D] pt-8 md:flex-row text-[#666666]">
          <p className="text-[12px] font-light tracking-wide">
            &copy; {new Date().getFullYear()} {data.title} {data.ui.footer.rights}
          </p>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#444444]">
            {data.ui.footer.tagline}
          </p>
        </div>

      </div>
    </footer>
  );
}
