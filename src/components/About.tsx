import { site } from "@/data/site";
import type { LocaleData } from "@/data/locales";

interface AboutProps { data?: LocaleData }

export default function About({ data = site }: AboutProps) {
  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-polen-blue">
              Hakkımızda
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-polen-dark sm:text-4xl">
              Sektörde 25 yıllık uzmanlık
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-700">
              {data.companyInfo}
            </p>
          </div>
          <div className="rounded-3xl bg-polen-soft p-10 shadow-soft">
            <div className="space-y-5">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
                  Kurumsal alan
                </p>
                <p className="mt-3 text-xl font-semibold text-polen-dark">
                  10.080 m2 kapalı ve açık alan
                </p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
                  Deneyimli ekip
                </p>
                <p className="mt-3 text-xl font-semibold text-polen-dark">
                  20 kişilik operasyon ekibi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
