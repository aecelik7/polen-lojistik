import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "ghost";
  className?: string;
}

export default function Button({ children, href, onClick, type = "button", variant = "primary", className = "" }: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-polen-blue/50";
  const styles =
    variant === "primary"
      ? "bg-polen-blue text-white shadow-sm hover:bg-blue-700"
      : "border border-white/30 bg-white/10 text-white hover:bg-white/15";

  if (href) {
    return (
      <Link href={href} className={`${base} ${styles} ${className}`} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`${base} ${styles} ${className}`}>
      {children}
    </button>
  );
}
