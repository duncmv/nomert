import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Photo } from "@/components/ui/photo";
import { ButtonLink } from "@/components/ui/button";
import { StatCounter } from "@/components/ui/stat-counter";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/site-config";

const points = [
  "One accountable team, from quotation through to completion",
  "Fully insured and vetted tradespeople",
  "Consistent, premium finishing standard on every job",
];

export function AboutTeaser() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <Container className="grid items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <Photo
              imageKey="landlordRefurb"
              className="aspect-[4/5] w-full"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
            <div className="absolute -bottom-8 -right-6 hidden w-64 rounded-2xl border border-navy/8 bg-white p-5 shadow-[0_24px_48px_-16px_rgba(10,27,47,0.25)] sm:block">
              <p className="font-serif text-3xl font-semibold text-navy italic">
                &ldquo;{siteConfig.tagline}&rdquo;
              </p>
            </div>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            index="01"
            eyebrow="Who We Are"
            title="A single, accountable team looking after your property"
            description="Nomert Property Services delivers property maintenance, repairs, refurbishments and home improvements across London. We handle every stage of the works ourselves — you're hiring one team, not coordinating a list of tradespeople."
          />
          <ul className="mt-8 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-navy">
                <CheckCircle size={20} weight="fill" className="mt-0.5 shrink-0 text-gold" />
                <span className="text-[0.95rem] leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 grid grid-cols-2 gap-8 rounded-2xl bg-navy p-8 sm:grid-cols-4 sm:p-10">
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
          <ButtonLink href="/about" variant="outline-dark" className="mt-9">
            More About Nomert
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
