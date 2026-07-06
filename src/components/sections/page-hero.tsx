import Link from "next/link";
import { CaretRight } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

interface Crumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  breadcrumbs?: Crumb[];
}

export function PageHero({ eyebrow, title, description, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy py-24 sm:py-28">
      <div className="bg-brand-pattern absolute inset-0 opacity-30" />
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <Container className="relative">
        <Reveal>
          {breadcrumbs && (
            <nav className="mb-6 flex flex-wrap items-center gap-1.5 text-xs text-white/50">
              {breadcrumbs.map((crumb, i) => (
                <span key={crumb.label} className="flex items-center gap-1.5">
                  {i > 0 && <CaretRight size={10} />}
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-gold">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-gold">{crumb.label}</span>
                  )}
                </span>
              ))}
            </nav>
          )}
          <div className="mb-4 text-xs font-semibold tracking-[0.28em] text-gold uppercase">
            {eyebrow}
          </div>
          <h1 className="max-w-3xl text-balance font-display text-4xl leading-[1.1] font-bold text-white sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
              {description}
            </p>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
