import { Phone, WhatsappLogo, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Photo } from "@/components/ui/photo";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div className="absolute inset-0">
        <Photo imageKey="whiteSubwayTileBathroomFinished" shape="full" grounding={false} priority className="h-full w-full" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/92 to-navy/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/10 to-transparent" />
        <div className="bg-brand-pattern absolute inset-0 opacity-30 mix-blend-overlay" />
      </div>

      <Container className="relative flex min-h-[86vh] flex-col justify-center py-32 sm:min-h-[80vh]">
        <div className="max-w-2xl fade-up fade-up-1">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-gold/30 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-gold uppercase backdrop-blur-sm">
            London Property Services
          </div>
          <h1 className="text-balance font-display text-4xl leading-[1.08] font-bold text-white sm:text-5xl lg:text-6xl">
            Property Maintenance &amp; Home Improvement Solutions Across London
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
            Professional repairs, maintenance, refurbishments and home improvement
            services for residential and commercial properties.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <ButtonLink href="/contact" variant="primary">
              Request a Free Quote
              <ArrowRight size={16} weight="bold" />
            </ButtonLink>
            <a
              href={siteConfig.contact.phoneHref}
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold tracking-wide text-white uppercase backdrop-blur-sm transition-colors hover:border-gold hover:text-gold"
            >
              <Phone size={16} weight="fill" />
              Call Now
            </a>
            <a
              href={siteConfig.contact.whatsappHref}
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold tracking-wide text-white uppercase backdrop-blur-sm transition-colors hover:border-gold hover:text-gold"
            >
              <WhatsappLogo size={16} weight="fill" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </Container>

      <div className="absolute right-0 bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
    </section>
  );
}
