import { site } from "@/data/site";
import type { LocaleData } from "@/data/locales";

interface ContactProps { data?: LocaleData }

export default function Contact({ data = site }: ContactProps) {
  return (
    <section id="contact" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-polen-blue">
              İletişim
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-polen-dark sm:text-4xl">
              Sizinle çalışmaya hazırız
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Aşağıdaki formu doldurarak hızlıca iletişime geçebilir, ihtiyaçlarınıza uygun lojistik destek talep edebilirsiniz.
            </p>
            <div className="mt-10 space-y-6 rounded-3xl border border-slate-200 bg-polen-soft p-8 shadow-soft">
              <div>
                <p className="text-sm font-semibold text-polen-dark">Adres</p>
                <p className="mt-2 text-slate-600">{data.contact.address}</p>
              </div>
            </div>
          </div>
          <form className="space-y-6 rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-soft">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                Ad Soyad
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Adınız Soyadınız"
                className="mt-3 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-polen-blue focus:ring-2 focus:ring-polen-blue/20"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-slate-700">
                Firma Adı
              </label>
              <input
                id="company"
                name="company"
                type="text"
                placeholder="Firma adınız"
                className="mt-3 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-polen-blue focus:ring-2 focus:ring-polen-blue/20"
              />
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
                  Telefon
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Telefon numaranız"
                  className="mt-3 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-polen-blue focus:ring-2 focus:ring-polen-blue/20"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                  E-posta
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="E-posta adresiniz"
                  className="mt-3 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-polen-blue focus:ring-2 focus:ring-polen-blue/20"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700">
                Mesaj
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Mesajınızı yazın"
                className="mt-3 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-polen-blue focus:ring-2 focus:ring-polen-blue/20"
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-polen-blue px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Gönder
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
