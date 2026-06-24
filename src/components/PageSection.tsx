import type { ReactNode } from "react";

interface PageSectionProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export default function PageSection({ title, subtitle, children }: PageSectionProps) {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          {subtitle ? <p className="text-sm font-semibold uppercase tracking-[0.24em] text-polen-blue">{subtitle}</p> : null}
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-polen-dark sm:text-4xl">{title}</h2>
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
