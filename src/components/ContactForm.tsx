"use client";

import type { FormEvent } from "react";
import { site } from "@/data/site";
import type { LocaleData } from "@/data/locales";

interface ContactFormProps {
  data?: LocaleData;
}

export default function ContactForm({ data = site }: ContactFormProps) {
  const copy = data.ui.contactForm;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const subject = copy.subject;
    const body = [
      `${copy.name}: ${formData.get("name") ?? ""}`,
      `${copy.company}: ${formData.get("company") ?? ""}`,
      `${copy.phone}: ${formData.get("phone") ?? ""}`,
      `${copy.email}: ${formData.get("email") ?? ""}`,
      "",
      `${copy.message}:`,
      `${formData.get("message") ?? ""}`,
    ].join("\n");

    window.location.href = `mailto:${data.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit}
      className="scroll-mt-28 space-y-8"
    >
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="contact-name" className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#A3A3A3]">
            {copy.name}
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full border-b border-[#333333] bg-transparent pb-3 text-white placeholder-[#666666] transition-colors focus:border-[#C90606] focus:outline-none"
            placeholder={copy.namePlaceholder}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="contact-company" className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#A3A3A3]">
            {copy.company}
          </label>
          <input
            id="contact-company"
            name="company"
            type="text"
            autoComplete="organization"
            className="w-full border-b border-[#333333] bg-transparent pb-3 text-white placeholder-[#666666] transition-colors focus:border-[#C90606] focus:outline-none"
            placeholder={copy.companyPlaceholder}
          />
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="contact-phone" className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#A3A3A3]">
            {copy.phone}
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className="w-full border-b border-[#333333] bg-transparent pb-3 text-white placeholder-[#666666] transition-colors focus:border-[#C90606] focus:outline-none"
            placeholder={copy.phonePlaceholder}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="contact-email" className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#A3A3A3]">
            {copy.email}
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full border-b border-[#333333] bg-transparent pb-3 text-white placeholder-[#666666] transition-colors focus:border-[#C90606] focus:outline-none"
            placeholder={copy.emailPlaceholder}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="contact-message" className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#A3A3A3]">
          {copy.message}
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          required
          className="w-full resize-none border-b border-[#333333] bg-transparent pb-3 text-white placeholder-[#666666] transition-colors focus:border-[#C90606] focus:outline-none"
          placeholder={copy.messagePlaceholder}
        />
      </div>

      <button
        type="submit"
        className="group flex w-full items-center justify-between bg-[#C90606] p-6 text-sm font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-[#111111]"
      >
        <span>{copy.submit}</span>
        <span className="h-[2px] w-8 bg-white transition-colors group-hover:bg-[#111111]" />
      </button>
      <p className="text-xs leading-relaxed text-[#666666]">
        {copy.note}
      </p>
    </form>
  );
}
