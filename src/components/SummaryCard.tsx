import type { ReactNode } from "react";

interface SummaryCardProps {
  title: string;
  description: string;
  children?: ReactNode;
}

export default function SummaryCard({ title, description, children }: SummaryCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg">
      <h3 className="text-lg font-semibold text-polen-dark">{title}</h3>
      <p className="mt-3 text-sm text-slate-600">{description}</p>
      {children ? <div className="mt-4">{children}</div> : null}
    </div>
  );
}
