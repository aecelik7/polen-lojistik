"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import {
  getLocaleData,
  getLocaleFromPathname,
  getLocalizedPath,
  getPageKeyFromPathname,
  isRtlLocale,
  supportedLocales,
  switchLocalePath,
  type Locale,
  type PageKey,
} from "@/lib/i18n";

const HEADER_LOGO_SRC = "/images/logos/polen-logo.svg";
const HEADER_DARK_LOGO_SRC = "/images/logos/polen-logo-dark.svg";
const navPages: PageKey[] = ["home", "about", "services", "missionVision", "values", "contact"];

interface LanguageDropdownProps {
  pathname: string;
  locale: Locale;
  mobile?: boolean;
  onNavigate?: () => void;
}

function LanguageDropdown({ pathname, locale, mobile = false, onNavigate }: LanguageDropdownProps) {
  const [expanded, setExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!expanded) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setExpanded(false);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setExpanded(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [expanded]);

  return (
    <div ref={containerRef} className={mobile ? "relative w-full" : "relative hidden xl:block"}>
      <button
        type="button"
        aria-label="Language selector"
        aria-haspopup="menu"
        aria-expanded={expanded}
        aria-controls={menuId}
        onClick={() => setExpanded((value) => !value)}
        className={`group flex items-center justify-between gap-3 border bg-[#191919] font-bold uppercase tracking-[0.16em] text-white shadow-sm transition-all duration-300 hover:text-[#C90606] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C90606] focus-visible:ring-offset-2 ${
          mobile 
            ? "w-full border-[#333333] border-l-[4px] border-l-[#C90606] px-5 py-4 text-[12px]" 
            : "min-w-[4.75rem] border-[#333333] px-4 py-3 text-[10px] hover:border-[#C90606]"
        }`}
      >
        <span>{locale.toUpperCase()}</span>
        <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${expanded ? "rotate-180 text-[#C90606]" : ""}`} aria-hidden="true" />
      </button>

      {expanded && (
        <div
          id={menuId}
          role="menu"
          className={`${
            mobile 
              ? "relative mt-0 w-full border-x border-b border-[#333333] border-l-[4px] border-l-[#C90606] bg-[#111111]" 
              : "absolute end-0 top-[calc(100%+0.6rem)] min-w-[7rem] border border-[#333333] bg-[#111111] p-1.5 shadow-[0_18px_45px_rgba(0,0,0,0.35)]"
          } z-[70] overflow-hidden`}
        >
          {supportedLocales.map((item) => (
            <Link
              key={item}
              href={switchLocalePath(pathname, item)}
              hrefLang={item}
              lang={item}
              role="menuitem"
              aria-current={locale === item ? "true" : undefined}
              onClick={() => {
                setExpanded(false);
                onNavigate?.();
              }}
              className={`flex items-center justify-between transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-[#C90606] ${
                mobile ? "px-5 py-4 text-[11px]" : "px-4 py-3 text-[10px]"
              } font-bold uppercase tracking-[0.16em] ${
                locale === item 
                  ? "bg-[#C90606] text-white" 
                  : "text-[#A3A3A3] hover:bg-[#1D1D1D] hover:text-[#E5E5E5]"
              }`}
            >
              <span>{item.toUpperCase()}</span>
              {locale === item && <span className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_8px_white]" aria-hidden="true" />}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const pathname = usePathname() || "/";
  const locale = getLocaleFromPathname(pathname);
  const data = getLocaleData(locale);
  const activePage = getPageKeyFromPathname(pathname);
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLabels = data.ui.nav;

  return (
    <header
      lang={locale}
      dir={isRtlLocale(locale) ? "rtl" : "ltr"}
      className={`fixed left-0 right-0 top-0 z-50 h-20 border-b border-[#333333] bg-[#191919] shadow-xl transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
        isScrolled
          ? "xl:h-20 xl:border-[#E5E5E5]/60 xl:bg-white/95 xl:shadow-[0_4px_30px_rgba(25,25,25,0.04)] xl:backdrop-blur-xl"
          : "xl:h-28 xl:border-transparent xl:bg-white xl:shadow-none"
      }`}
    >
      <div className="absolute left-0 top-0 h-[3px] w-full bg-[#C90606]" />

      <div className="mx-auto flex h-full w-full max-w-[90rem] items-center justify-between gap-5 px-6 lg:px-12">
        <Link href={getLocalizedPath(locale, "home")} className="group flex shrink-0 items-center" onClick={() => setOpen(false)}>
          <Image
            src={HEADER_DARK_LOGO_SRC}
            alt="Polen Lojistik"
            width={193}
            height={100}
            priority
            unoptimized
            sizes="77px"
            className="block h-10 w-auto object-contain transition-opacity duration-500 group-hover:opacity-80 xl:hidden"
          />
          <Image
            src={HEADER_LOGO_SRC}
            alt="Polen Lojistik"
            width={193}
            height={100}
            priority
            unoptimized
            sizes="(min-width: 1280px) 93px, 77px"
            className={`hidden w-auto object-contain transition-all duration-700 group-hover:opacity-80 xl:block ${isScrolled ? "xl:h-10" : "xl:h-12"}`}
          />
        </Link>

        <nav className="hidden h-full items-center gap-5 xl:flex" aria-label={navLabels.menu}>
          {navPages.map((page) => (
            <Link key={page} href={getLocalizedPath(locale, page)} className="group relative py-2" aria-current={activePage === page ? "page" : undefined}>
              <span className={`whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.12em] transition-colors duration-500 ${activePage === page ? "text-[#C90606]" : "text-[#191919] group-hover:text-[#C90606]"}`}>
                {navLabels[page]}
              </span>
              <span className={`absolute bottom-0 left-0 h-[2px] w-full origin-left bg-[#C90606] transition-transform duration-500 ${activePage === page ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <LanguageDropdown pathname={pathname} locale={locale} />

          <Link
            href={`${getLocalizedPath(locale, "contact")}#contact-form`}
            className="group relative hidden items-center justify-center overflow-hidden bg-[#191919] px-6 py-3.5 transition-all duration-500 hover:shadow-[0_10px_30px_rgba(201,6,6,0.25)] md:flex"
          >
            <span className="absolute inset-0 h-full w-full -translate-x-full bg-[#C90606] transition-transform duration-500 group-hover:translate-x-0" />
            <span className="relative z-10 flex items-center gap-3 whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.15em] text-white">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C90606] opacity-75 group-hover:bg-white" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#C90606] transition-colors group-hover:bg-white" />
              </span>
              {navLabels.quote}
            </span>
          </Link>

          <button
            aria-label={navLabels.menu}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="flex h-12 w-12 flex-col items-center justify-center text-white transition-colors hover:text-[#C90606] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C90606] xl:hidden"
          >
            <span className={`mb-2 h-[2px] w-6 bg-current transition-all duration-500 ${open ? "mb-0 translate-y-[10px] rotate-45" : ""}`} />
            <span className={`h-[2px] w-6 bg-current transition-all duration-500 ${open ? "opacity-0" : ""}`} />
            <span className={`mt-2 h-[2px] w-6 bg-current transition-all duration-500 ${open ? "mt-0 -translate-y-[10px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-x-0 bottom-0 top-20 z-[60] w-full overflow-x-hidden overflow-y-auto border-t border-[#333333] bg-[#0A0A0A] shadow-2xl xl:hidden">
          <div className="mx-auto flex min-h-full max-w-[90rem] flex-col px-8 py-10">
            <div className="mb-8 border-b border-[#333333] pb-6">
              <LanguageDropdown pathname={pathname} locale={locale} mobile onNavigate={() => setOpen(false)} />
            </div>

            <nav className="flex flex-col gap-2" aria-label={navLabels.menu}>
              {navPages.map((page) => (
                <Link
                  key={page}
                  href={getLocalizedPath(locale, page)}
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between border-b border-[#2A2A2A] py-5"
                >
                  <span className={`text-[13px] font-bold uppercase tracking-[0.2em] transition-colors ${activePage === page ? "text-[#C90606]" : "text-[#F5F5F5] group-hover:text-[#C90606]"}`}>
                    {navLabels[page]}
                  </span>
                  <span className={`h-1.5 w-1.5 bg-[#C90606] ${activePage === page ? "scale-100" : "scale-0 group-hover:scale-100"}`} />
                </Link>
              ))}

              <Link
                href={`${getLocalizedPath(locale, "contact")}#contact-form`}
                onClick={() => setOpen(false)}
                className="mt-10 flex w-full items-center justify-center gap-3 bg-[#191919] px-6 py-5 text-[12px] font-bold uppercase tracking-[0.2em] text-white hover:bg-[#C90606]"
              >
                {navLabels.quote}
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
