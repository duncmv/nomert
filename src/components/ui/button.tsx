import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline-light" | "outline-dark" | "ghost";

const base =
  "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide uppercase transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<Variant, string> = {
  primary:
    "bg-gold text-navy hover:bg-gold-light active:bg-gold-dark shadow-[0_8px_24px_-8px_rgba(212,175,55,0.6)] hover:shadow-[0_10px_30px_-8px_rgba(212,175,55,0.75)] hover:-translate-y-0.5",
  "outline-light":
    "border border-white/35 text-white hover:border-gold hover:text-gold backdrop-blur-sm",
  "outline-dark":
    "border border-navy/25 text-navy hover:border-gold hover:text-gold-dark",
  ghost: "text-navy hover:text-gold-dark",
};

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: Variant;
}

export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  return <button className={cn(base, variants[variant], className)} {...props} />;
}

interface ButtonLinkProps extends ComponentPropsWithoutRef<typeof Link> {
  variant?: Variant;
}

export function ButtonLink({ variant = "primary", className, ...props }: ButtonLinkProps) {
  return <Link className={cn(base, variants[variant], className)} {...props} />;
}
