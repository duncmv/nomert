import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

interface SectionHeadingProps {
  index?: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
  className,
}: SectionHeadingProps) {
  const isDark = theme === "dark";
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <div
        className={cn(
          "mb-5 flex items-center gap-3 text-xs font-semibold tracking-[0.28em] uppercase",
          align === "center" && "justify-center",
          isDark ? "text-gold" : "text-gold-dark"
        )}
      >
        {index && <span className="font-serif text-base italic tracking-normal">{index}</span>}
        <span className={cn("h-px w-8", isDark ? "bg-gold/50" : "bg-gold-dark/40")} />
        <span>{eyebrow}</span>
      </div>
      <h2
        className={cn(
          "text-balance font-display text-3xl leading-[1.15] font-semibold sm:text-4xl lg:text-[2.75rem]",
          isDark ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            isDark ? "text-white/65" : "text-mist"
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
