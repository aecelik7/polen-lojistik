import { site } from "@/data/site";
import type { LocaleData } from "@/data/locales";

interface MissionVisionProps { data?: LocaleData }

export default function MissionVision({ data = site }: MissionVisionProps) {
  return (
    <section id="mission" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-polen-soft p-10 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-polen-blue">Misyon</p>
            <p className="mt-4 text-lg leading-8 text-slate-700">{data.mission}</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-polen-soft p-10 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-polen-blue">Vizyon</p>
            <p className="mt-4 text-lg leading-8 text-slate-700">{data.vision}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
