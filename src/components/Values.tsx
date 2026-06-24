import { site } from "@/data/site";
import type { LocaleData } from "@/data/locales";

interface ValuesProps { data?: LocaleData }

export default function Values({ data = site }: ValuesProps) {
  return (
    <section id="values" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-polen-blue">
            Değerlerimiz
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-polen-dark sm:text-4xl">
            İşimizi ilk günkü titizlikle yapıyoruz
          </h2>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.values.map((value) => (
            <div key={value.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
              <p className="text-lg font-semibold text-polen-dark">{value.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
