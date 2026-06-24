import { site } from "@/data/site";
import type { LocaleData } from "@/data/locales";

interface ServicesProps { data?: LocaleData }

export default function Services({ data = site }: ServicesProps) {
  return (
    <section id="services" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-polen-blue">
            Hizmetlerimiz
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-polen-dark sm:text-4xl">
            Operasyonlarınız için bütüncül çözümler
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
            Modern antrepo ve lojistik çözümleriyle süreçlerinizi güvenli ve hızlı bir şekilde yönetiyoruz.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data.services.map((service) => (
            <div key={service.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-xl font-semibold text-polen-dark">{service.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
