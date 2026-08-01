import Link from "next/link";
import Image from "next/image";
import {
  InstagramLogo,
  FacebookLogo,
  LinkedinLogo,
  Phone,
  EnvelopeSimple,
  WhatsappLogo,
  MapPin,
} from "@phosphor-icons/react/dist/ssr";
import { siteConfig } from "@/lib/site-config";
import { propertyServices } from "@/lib/services-data";
import { Container } from "@/components/ui/container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-white/70">
      <Container className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-5">
        <div className="sm:col-span-2 lg:col-span-2">
          <Link href="/" className="flex items-center gap-3">
            <span className="relative h-10 w-10 shrink-0">
              <Image src="/logo.png" alt="" fill className="object-contain" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-lg font-bold tracking-wide text-white">
                NOMERT
              </span>
              <span className="text-[0.65rem] font-medium tracking-[0.25em] text-gold uppercase">
                Property Services
              </span>
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
            {siteConfig.description}
          </p>
          <p className="mt-5 max-w-sm text-xs leading-relaxed text-white/35">
            {siteConfig.tradingLine}
          </p>
          <div className="mt-6 flex items-center gap-4">
            <a
              href={siteConfig.social.instagram}
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-gold hover:text-gold"
            >
              <InstagramLogo size={16} />
            </a>
            <a
              href={siteConfig.social.facebook}
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-gold hover:text-gold"
            >
              <FacebookLogo size={16} />
            </a>
            <a
              href={siteConfig.social.linkedin}
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-gold hover:text-gold"
            >
              <LinkedinLogo size={16} />
            </a>
          </div>
        </div>

        <FooterColumn
          title="Property Services"
          links={propertyServices.slice(0, 6).map((s) => ({
            label: s.name,
            href: `/property-services/${s.slug}`,
          }))}
          seeAllHref="/property-services"
        />

        <FooterColumn
          title="More Services"
          links={[
            { label: "Cleaning Services", href: "/cleaning-services" },
            { label: "Commercial Services", href: "/commercial-services" },
            ...["Residential Cleaning", "Window Cleaning"].map((label) => ({
              label,
              href: "/cleaning-services",
            })),
            ...["Facilities Management", "Reactive Maintenance"].map((label) => ({
              label,
              href: "/commercial-services",
            })),
          ]}
        />

        <div>
          <h3 className="font-display text-sm font-semibold tracking-wide text-white uppercase">
            Get in touch
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a href={siteConfig.contact.phoneHref} className="flex items-center gap-2.5 hover:text-gold">
                <Phone size={16} className="shrink-0 text-gold" />
                {siteConfig.contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={siteConfig.contact.whatsappHref} className="flex items-center gap-2.5 hover:text-gold">
                <WhatsappLogo size={16} className="shrink-0 text-gold" />
                WhatsApp Us
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-2.5 hover:text-gold">
                <EnvelopeSimple size={16} className="shrink-0 text-gold" />
                {siteConfig.contact.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
              <span>{siteConfig.contact.addressLine2}</span>
            </li>
          </ul>
          <p className="mt-5 text-xs leading-relaxed text-white/45">
            Covering {siteConfig.serviceAreas.join(", ")}
          </p>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/40 sm:flex-row">
          <p>
            &copy; {year} {siteConfig.legalName}
            {siteConfig.companyRegistrationNumber && (
              <> &middot; Company No. {siteConfig.companyRegistrationNumber}</>
            )}
            . All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-gold">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gold">
              Terms and Conditions
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
  seeAllHref,
}: {
  title: string;
  links: { label: string; href: string }[];
  seeAllHref?: string;
}) {
  return (
    <div>
      <h3 className="font-display text-sm font-semibold tracking-wide text-white uppercase">
        {title}
      </h3>
      <ul className="mt-5 space-y-3 text-sm">
        {links.map((link, i) => (
          <li key={`${link.href}-${i}`}>
            <Link href={link.href} className="transition-colors hover:text-gold">
              {link.label}
            </Link>
          </li>
        ))}
        {seeAllHref && (
          <li>
            <Link href={seeAllHref} className="font-semibold text-gold hover:text-gold-light">
              View all &rarr;
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}
