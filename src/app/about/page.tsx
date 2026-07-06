import type { Metadata } from "next";
import {
  ShieldCheck,
  HandCoins,
  MapPinLine,
  SealCheck,
  ChatCircleDots,
  ClipboardText,
  Wrench,
  CheckCircle,
} from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Container } from "@/components/ui/container";
import { Photo } from "@/components/ui/photo";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatCounter } from "@/components/ui/stat-counter";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description:
    "Nomert Property Services is a London property maintenance, repairs and refurbishment company delivering every stage of the work directly, with no middlemen.",
};

const values = [
  {
    icon: ShieldCheck,
    title: "Fully Accountable",
    description:
      "One team delivers the work, start to finish. No subcontractor hand-offs, no lost accountability along the way.",
  },
  {
    icon: SealCheck,
    title: "Premium Standard",
    description:
      "We hold every job — big or small — to the same finishing standard, whether it's a single repair or a full refurbishment.",
  },
  {
    icon: HandCoins,
    title: "Fair, Transparent Quotes",
    description:
      "Clear, free quotes with no pressure and no hidden costs, so you know exactly what you're agreeing to.",
  },
  {
    icon: MapPinLine,
    title: "London-Wide Coverage",
    description:
      "From central London to the wider boroughs, our team is set up to work across the capital.",
  },
];

const process = [
  {
    icon: ChatCircleDots,
    title: "Get in touch",
    description: "Call, WhatsApp or submit an enquiry with a few details about the work required.",
  },
  {
    icon: ClipboardText,
    title: "Free, no-obligation quote",
    description: "We review the details and come back with a clear quote — usually within one working day.",
  },
  {
    icon: Wrench,
    title: "We deliver the work",
    description: "Our own team carries out the work to a premium finishing standard, on the agreed timeline.",
  },
  {
    icon: CheckCircle,
    title: "Sign-off & aftercare",
    description: "We walk the completed work through with you before we consider the job done.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Nomert"
        title="Property care you can hand over completely"
        description="Nomert Property Services is the customer-facing trading name of Nomert Facilities Management Ltd — a London property maintenance, repairs and refurbishment company."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <section className="bg-white py-24 sm:py-28">
        <Container className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <Photo imageKey="about" className="aspect-[4/5] w-full" />
          </Reveal>
          <div>
            <SectionHeading
              index="01"
              eyebrow="Our Story"
              title="Property maintenance, without the usual hassle"
              description="Too many property jobs involve juggling multiple tradespeople, chasing quotes, and hoping the standard holds up. Nomert exists to remove that friction — one team, one point of contact, and a consistent standard across every visit."
            />
            <p className="mt-6 text-base leading-relaxed text-mist">
              We handle every stage of the works ourselves, from the first
              conversation through to completion — repairs, refurbishments, home
              improvements and the cleaning that supports them. When you hire Nomert,
              you&apos;re hiring the team that turns up and does the work.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-navy py-24 sm:py-28">
        <Container>
          <SectionHeading
            index="02"
            eyebrow="Why Nomert"
            title="What guides how we work"
            theme="dark"
            align="center"
          />
          <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <RevealItem
                  key={value.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-7"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <Icon size={22} weight="bold" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-white">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {value.description}
                  </p>
                </RevealItem>
              );
            })}
          </RevealGroup>

          <div className="mt-16 grid grid-cols-2 gap-8 border-t border-white/10 pt-12 sm:grid-cols-4">
            {siteConfig.stats.map((stat) => (
              <StatCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                decimals={"decimals" in stat ? stat.decimals : 0}
                label={stat.label}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream py-24 sm:py-28">
        <Container>
          <SectionHeading
            index="03"
            eyebrow="How We Work"
            title="From first message to finished job"
            align="center"
          />
          <RevealGroup className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => {
              const Icon = step.icon;
              return (
                <RevealItem key={step.title} className="relative text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold/30 bg-white text-gold-dark shadow-sm">
                    <Icon size={26} weight="bold" />
                  </div>
                  <span className="mt-4 block font-serif text-sm text-gold-dark italic">
                    Step {i + 1}
                  </span>
                  <h3 className="mt-1 font-display text-lg font-semibold text-navy">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">
                    {step.description}
                  </p>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
