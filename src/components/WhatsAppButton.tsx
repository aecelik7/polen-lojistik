import { MessageCircle } from "lucide-react";
import { contact } from "@/data/contact";

type WhatsAppButtonVariant = "solid" | "outline" | "footer";

interface WhatsAppButtonProps {
  variant?: WhatsAppButtonVariant;
  className?: string;
  label?: string;
}

const variantStyles: Record<WhatsAppButtonVariant, string> = {
  solid:
    "min-h-12 w-full bg-[#C90606] px-6 py-3 text-white hover:bg-[#A80505] focus-visible:ring-[#C90606]/40 sm:w-auto",
  outline:
    "min-h-12 w-full border border-[#C90606] px-6 py-3 text-[#C90606] hover:bg-[#C90606] hover:text-white focus-visible:ring-[#C90606]/40 sm:w-auto",
  footer:
    "w-fit border border-[#333333] px-3 py-2 text-[#E5E5E5] hover:border-[#C90606] hover:bg-[#C90606]/10 hover:text-white focus-visible:ring-white/20",
};

const iconStyles: Record<WhatsAppButtonVariant, string> = {
  solid: "text-white",
  outline: "text-current",
  footer: "text-[#C90606]",
};

export default function WhatsAppButton({
  variant = "solid",
  className = "",
  label = "WhatsApp ile İletişime Geç",
}: WhatsAppButtonProps) {
  return (
    <a
      href={contact.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={[
        "inline-flex items-center justify-center gap-2 rounded-full text-sm font-bold transition-colors duration-200 focus:outline-none focus-visible:ring-2",
        variantStyles[variant],
        className,
      ].join(" ")}
      aria-label={label}
    >
      <MessageCircle className={`h-4 w-4 shrink-0 ${iconStyles[variant]}`} aria-hidden="true" />
      <span>{label}</span>
    </a>
  );
}
