import type { Metadata } from "next";
import { Phone, EnvelopeSimple, WhatsappLogo, MapPin, Clock } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { EnquiryForm } from "@/components/enquiry-form";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Nomert Property Services — request a free quote by phone, WhatsApp, email or contact form.",
};

const methods = [
  {
    icon: Phone,
    label: "Call",
    value: siteConfig.contact.phoneDisplay,
    href: siteConfig.contact.phoneHref,
  },
  {
    icon: WhatsappLogo,
    label: "WhatsApp",
    value: siteConfig.contact.whatsappDisplay,
    href: siteConfig.contact.whatsappHref,
  },
  {
    icon: EnvelopeSimple,
    label: "Email",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what your property needs"
        description="Request a free, no-obligation quote — our team responds directly, usually within one working day."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="bg-white py-24 sm:py-28">
        <Container className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-10">
            <Reveal>
              <div className="space-y-4">
                {methods.map((method) => {
                  const Icon = method.icon;
                  return (
                    <a
                      key={method.label}
                      href={method.href}
                      className="group flex items-center gap-4 rounded-2xl border border-navy/8 p-5 transition-colors hover:border-gold"
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/12 text-gold-dark">
                        <Icon size={20} weight="fill" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold tracking-wide text-mist uppercase">
                          {method.label}
                        </p>
                        <p className="font-display text-base font-semibold text-navy group-hover:text-gold-dark">
                          {method.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex items-start gap-3 text-mist">
                <MapPin size={18} className="mt-0.5 shrink-0 text-gold-dark" />
                <p className="text-sm leading-relaxed">
                  {siteConfig.contact.addressLine2}
                  <br />
                  {siteConfig.tradingLine}
                </p>
              </div>
              <div className="mt-4 flex items-start gap-3 text-mist">
                <Clock size={18} className="mt-0.5 shrink-0 text-gold-dark" />
                <p className="text-sm leading-relaxed">
                  Mon&ndash;Fri: 8:00&ndash;18:00 &middot; Sat: 9:00&ndash;14:00
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div>
                <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-mist uppercase">
                  Service Areas
                </p>
                <div className="flex flex-wrap gap-2">
                  {siteConfig.serviceAreas.map((area) => (
                    <span
                      key={area}
                      className="rounded-full border border-navy/10 px-3.5 py-1.5 text-xs font-medium text-navy"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="overflow-hidden rounded-2xl border border-navy/8">
                <iframe
                  title="Nomert Property Services coverage area map"
                  src={siteConfig.contact.mapEmbedSrc}
                  className="h-64 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="rounded-2xl border border-navy/8 bg-cream p-8 shadow-[0_1px_2px_rgba(10,27,47,0.06)] sm:p-10">
            <h2 className="font-display text-2xl font-semibold text-navy">
              Request a Free Quote
            </h2>
            <p className="mt-2 mb-8 text-sm text-mist">
              Fields marked required help us respond faster with an accurate quote.
            </p>
            <EnquiryForm />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
