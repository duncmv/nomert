import { Phone, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/site-config";

interface CtaBannerProps {
  title?: string;
  description?: string;
}

export function CtaBanner({
  title = "Ready to get your property sorted?",
  description = "Tell us what you need and we'll come back with a free, no-obligation quote — usually within one working day.",
}: CtaBannerProps) {
  return (
    <section className="relative overflow-hidden bg-navy py-20 sm:py-24">
      <div className="bg-brand-pattern absolute inset-0 opacity-40" />
      <div className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <Container className="relative text-center">
        <Reveal>
          <h2 className="mx-auto max-w-2xl text-balance font-display text-3xl font-semibold text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/65">{description}</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink href="/contact" variant="primary">
              Request a Free Quote
            </ButtonLink>
            <a
              href={siteConfig.contact.phoneHref}
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-white/85 uppercase hover:text-gold"
            >
              <Phone size={18} weight="fill" />
              {siteConfig.contact.phoneDisplay}
            </a>
            <a
              href={siteConfig.contact.whatsappHref}
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-white/85 uppercase hover:text-gold"
            >
              <WhatsappLogo size={18} weight="fill" />
              WhatsApp Us
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
