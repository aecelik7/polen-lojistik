import Image from "next/image";
import CallToAction from "@/components/CallToAction";
import ContactForm from "@/components/ContactForm";
import MapSection from "@/components/MapSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import type { LocaleData } from "@/data/locales";
import { isRtlLocale, type Locale, type PageKey } from "@/lib/i18n";

interface LocalizedPageContentProps {
  page: Exclude<PageKey, "home">;
  data: LocaleData;
  locale: Locale;
}

interface PageHeroProps {
  eyebrow: string;
  heading: string;
  intro: string;
  image: string;
  imageAlt: string;
  compactMobile?: boolean;
}

function PageHero({ eyebrow, heading, intro, image, imageAlt, compactMobile = false }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[#000]">
      <div className="absolute inset-0 z-0">
        <Image src={image} alt={imageAlt} fill className="object-cover opacity-50" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/80 via-[#111111]/40 to-[#111111]" />
      </div>
      <div className={`relative z-10 mx-auto max-w-[85rem] px-6 lg:px-12 ${compactMobile ? "pb-16 pt-28 sm:pb-20 sm:pt-28 lg:py-48" : "py-32 lg:py-48"}`}>
        <div className={`relative border border-[#333333] bg-[#111111]/40 backdrop-blur-sm ${compactMobile ? "min-w-0 max-w-full p-6 sm:p-10 lg:p-24" : "p-10 sm:p-12 lg:p-24"}`}>
          <div className="absolute start-0 top-0 h-[4px] w-32 bg-[#C90606]" />
          <div className="absolute bottom-0 end-0 h-[4px] w-32 bg-[#C90606]" />
          <div className={`${compactMobile ? "mb-6 min-w-0 gap-4 sm:mb-10 sm:gap-6" : "mb-10 gap-6"} flex items-center`}>
            <span className={`${compactMobile ? "min-w-0 break-words hyphens-auto [overflow-wrap:anywhere]" : ""} text-[11px] font-bold uppercase tracking-[0.3em] text-[#C90606]`}>{eyebrow}</span>
            <div className={`${compactMobile ? "w-10 shrink-0 sm:w-16" : "w-16"} h-px bg-[#333333]`} />
          </div>
          <h1 className={compactMobile ? "mb-6 max-w-full break-words font-display text-4xl font-bold uppercase leading-[0.95] tracking-tighter hyphens-auto [overflow-wrap:anywhere] sm:mb-10 sm:text-5xl lg:text-[6rem]" : "mb-10 break-words font-display text-4xl font-bold uppercase leading-[0.95] tracking-tighter sm:text-5xl lg:text-[6rem]"}>{heading}</h1>
          <p className={compactMobile ? "max-w-full break-words border-s-4 border-[#C90606] ps-4 text-lg font-bold leading-snug hyphens-auto [overflow-wrap:anywhere] sm:ps-6 sm:text-xl lg:ps-8 lg:text-3xl" : "max-w-3xl border-s-4 border-[#C90606] ps-6 text-xl font-bold leading-snug lg:ps-8 lg:text-3xl"}>{intro}</p>
        </div>
      </div>
    </section>
  );
}

function AboutPage({ data, locale }: Omit<LocalizedPageContentProps, "page">) {
  const copy = data.ui.pages.about;
  return (
    <>
      <PageHero eyebrow={copy.eyebrow} heading={copy.heading} intro={copy.intro} image="/images/general/lojistik-depo5.jpg" imageAlt={copy.heading} />
      <section className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-[85rem] gap-16 px-6 lg:grid-cols-2 lg:items-center lg:px-12">
          <div>
            <span className="mb-5 block text-[10px] font-bold uppercase tracking-[0.3em] text-[#C90606]">{copy.sectionTitle}</span>
            <p className="border-s-2 border-[#C90606] ps-6 text-xl font-light leading-relaxed text-[#E5E5E5]">{data.companyInfo}</p>
          </div>
          <div className="grid min-w-0 grid-cols-2 gap-px border border-[#242424] bg-[#242424]">
            {data.aboutStats.map((stat) => (
              <div key={stat.label} className="min-w-0 bg-[#0A0A0A] p-6 sm:p-8">
                <strong className="mb-2 block break-words text-3xl text-[#C90606] [overflow-wrap:anywhere]">{stat.value}</strong>
                <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#A3A3A3]">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="border-y border-[#242424] bg-[#0A0A0A] py-24">
        <div className="mx-auto max-w-[85rem] px-6 lg:px-12">
          <h2 className="mb-12 text-3xl font-bold uppercase text-white">{copy.reasonsTitle}</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {data.whyPolen.map((reason, index) => (
              <div key={reason} className="border border-[#242424] bg-[#111111] p-8 transition-colors hover:border-[#C90606]">
                <span className="mb-6 block text-3xl font-bold text-white/10">0{index + 1}</span>
                <p className="font-bold leading-relaxed text-[#E5E5E5]">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CallToAction data={data} locale={locale} />
    </>
  );
}

function ServicesPage({ data, locale }: Omit<LocalizedPageContentProps, "page">) {
  const copy = data.ui.pages.services;
  return (
    <>
      <PageHero eyebrow={copy.eyebrow} heading={copy.heading} intro={copy.intro} image="/images/general/lojistik-ulaşım-tır.jpg" imageAlt={copy.heading} compactMobile />
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[85rem] px-6 lg:px-12">
          <h2 className="mb-14 text-3xl font-bold uppercase text-[#E5E5E5]">{copy.sectionTitle}</h2>
          <div className="grid min-w-0 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {data.services.map((service, index) => (
              <article key={service.title} className="group relative min-w-0 border border-[#242424] bg-[#0A0A0A] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#C90606] sm:p-10">
                <div className="absolute start-0 top-0 h-[2px] w-0 bg-[#C90606] transition-all group-hover:w-full" />
                <span className="mb-8 block text-5xl font-bold text-white/5">0{index + 1}</span>
                <h3 className="mb-5 break-words text-2xl font-bold uppercase text-white group-hover:text-[#C90606] [overflow-wrap:anywhere]">{service.title}</h3>
                <p className="mb-7 font-light leading-relaxed text-[#A3A3A3]">{service.description}</p>
                <ul className="space-y-2 text-sm text-[#777777]">
                  {service.points.map((point) => <li key={point} className="flex min-w-0 gap-3"><span className="shrink-0 text-[#C90606]">—</span><span className="min-w-0 break-words">{point}</span></li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CallToAction data={data} locale={locale} />
    </>
  );
}

function MissionVisionPage({ data, locale }: Omit<LocalizedPageContentProps, "page">) {
  const copy = data.ui.pages.missionVision;
  return (
    <>
      <PageHero eyebrow={copy.eyebrow} heading={copy.heading} intro={copy.intro} image="/images/general/lojistik-ulaşım-ucak.jpg" imageAlt={copy.heading} compactMobile />
      <section className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-[85rem] gap-10 px-6 lg:grid-cols-2 lg:px-12">
          {[{ label: copy.missionLabel, text: data.mission }, { label: copy.visionLabel, text: data.vision }].map((item) => (
            <div key={item.label} className="relative border border-[#242424] bg-[#0A0A0A] p-10 lg:p-16">
              <div className="absolute start-0 top-12 h-24 w-[3px] bg-[#C90606]" />
              <h2 className="mb-8 text-3xl font-bold uppercase text-white">{item.label}</h2>
              <p className="text-xl font-light leading-relaxed text-[#E5E5E5]">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="border-y border-[#242424] bg-[#161616] py-24">
        <div className="mx-auto max-w-[85rem] px-6 lg:px-12">
          <h2 className="mb-12 text-center text-3xl font-bold uppercase">{copy.valuesTitle}</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {data.values.slice(0, 4).map((value) => (
              <div key={value.title} className="border border-[#242424] bg-[#111111] p-8 hover:border-[#C90606]">
                <h3 className="mb-4 text-xl font-bold text-white">{value.title}</h3>
                <p className="font-light leading-relaxed text-[#A3A3A3]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CallToAction data={data} locale={locale} />
    </>
  );
}

function ValuesPage({ data }: Omit<LocalizedPageContentProps, "page">) {
  const copy = data.ui.pages.values;
  return (
    <>
      <PageHero eyebrow={copy.eyebrow} heading={copy.heading} intro={copy.intro} image="/images/general/lojistik-depo6.jpg" imageAlt={copy.heading} />
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-[85rem] px-6 lg:px-12">
          <h2 className="mb-6 text-3xl font-bold uppercase">{copy.sectionTitle}</h2>
          {data.values.map((value, index) => (
            <article key={value.title} className="group grid items-center gap-8 border-b border-[#242424] py-14 md:grid-cols-[0.25fr_1fr]">
              <span className="font-display text-6xl font-bold text-white/5 transition-colors group-hover:text-[#C90606]">0{index + 1}</span>
              <div>
                <h3 className="mb-4 text-3xl font-bold text-white">{value.title}</h3>
                <p className="max-w-3xl text-lg font-light leading-relaxed text-[#A3A3A3]">{value.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function ContactPage({ data }: Omit<LocalizedPageContentProps, "page">) {
  const copy = data.ui.pages.contact;
  return (
    <>
      <PageHero eyebrow={copy.eyebrow} heading={copy.heading} intro={copy.intro} image="/images/general/lojistik-depo2.jpg" imageAlt={copy.heading} />
      <section className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-[85rem] gap-16 px-6 lg:grid-cols-12 lg:gap-24 lg:px-12">
          <div className="space-y-8 lg:col-span-5">
            <h2 className="text-3xl font-bold uppercase">{copy.infoTitle}</h2>
            {[
              { label: copy.addressLabel, value: data.contact.address },
              { label: copy.phoneLabel, value: data.contact.phone, href: `tel:${data.contact.phone.replace(/\s+/g, "")}` },
              { label: copy.emailLabel, value: data.contact.email, href: `mailto:${data.contact.email}` },
            ].map((item) => (
              <div key={item.label} className="border border-[#242424] bg-[#0A0A0A] p-8 hover:border-[#C90606]">
                <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#666666]">{item.label}</span>
                {item.href ? <a href={item.href} className="break-words text-lg text-[#E5E5E5] hover:text-[#C90606]">{item.value}</a> : <p className="break-words text-lg text-[#E5E5E5]">{item.value}</p>}
              </div>
            ))}
            <div className="border border-[#242424] bg-[#0A0A0A] p-8 hover:border-[#C90606]">
              <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#666666]">{data.ui.whatsapp.quickLabel}</span>
              <p className="mb-6 text-sm leading-relaxed text-[#A3A3A3]">{data.ui.whatsapp.quickDescription}</p>
              <WhatsAppButton variant="solid" label={data.ui.whatsapp.label} />
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="relative border border-[#242424] bg-[#0A0A0A] p-8 sm:p-10 lg:p-14">
              <div className="absolute end-0 top-0 h-16 w-[3px] bg-[#C90606]" />
              <div className="mb-10">
                <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.3em] text-[#666666]">{copy.formEyebrow}</span>
                <h2 className="text-2xl font-bold uppercase">{copy.formTitle}</h2>
              </div>
              <ContactForm data={data} />
            </div>
          </div>
        </div>
      </section>
      <MapSection data={data} compact />
    </>
  );
}

export default function LocalizedPageContent({ page, data, locale }: LocalizedPageContentProps) {
  const content = page === "about"
    ? <AboutPage data={data} locale={locale} />
    : page === "services"
      ? <ServicesPage data={data} locale={locale} />
      : page === "missionVision"
        ? <MissionVisionPage data={data} locale={locale} />
        : page === "values"
          ? <ValuesPage data={data} locale={locale} />
          : <ContactPage data={data} locale={locale} />;

  return <main lang={locale} dir={isRtlLocale(locale) ? "rtl" : "ltr"} className="bg-[#111111] text-white">{content}</main>;
}
