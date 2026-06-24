import { site } from "@/data/site";
import type { LocaleData } from "@/data/locales";

interface MapSectionProps {
  compact?: boolean;
  data?: LocaleData;
}

export default function MapSection({ compact = false, data = site }: MapSectionProps) {
  return (
    <section
      className={`relative overflow-hidden border-t border-[#242424] bg-[#0A0A0A] ${
        compact ? "py-20 lg:py-24" : "py-24 lg:py-32"
      }`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 1px, transparent 12px)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[85rem] px-6 lg:px-12">
        <div className="mb-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="h-2 w-2 bg-[#C90606]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C90606]">
                {data.ui.map.eyebrow}
              </span>
            </div>
            <h2 className="font-display text-4xl font-bold uppercase text-white lg:text-5xl">
              {data.ui.map.title}
            </h2>
          </div>

          <p className="max-w-2xl border-s-2 border-[#C90606] ps-6 text-base font-light leading-relaxed text-[#A3A3A3] lg:text-lg">
            {data.ui.map.description}
          </p>
        </div>

        <div className="w-full max-w-full overflow-hidden rounded-xl border border-[#333333] bg-[#111111] shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
          <iframe
            src={data.contact.mapUrl}
            title={data.ui.map.iframeTitle}
            width="600"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block h-[360px] w-full max-w-full border-0 opacity-80 grayscale transition duration-700 hover:opacity-100 hover:grayscale-0 sm:h-[450px] lg:h-[520px]"
          />
        </div>
      </div>
    </section>
  );
}
