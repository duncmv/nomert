import { ShieldCheck, HandCoins, MapPinLine, SealCheck } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatCounter } from "@/components/ui/stat-counter";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/site-config";

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

interface WhyChooseProps {
  index?: string;
  showStats?: boolean;
}

export function WhyChoose({ index, showStats = true }: WhyChooseProps) {
  return (
    <section className="bg-navy py-24 sm:py-28">
      <Container>
        <SectionHeading
          index={index}
          eyebrow="Why Nomert"
          title="What guides how we work"
          theme="dark"
          align="center"
        />
        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <RevealItem key={value.title} className="rounded-2xl border border-white/10 bg-white/5 p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <Icon size={22} weight="bold" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{value.description}</p>
              </RevealItem>
            );
          })}
        </RevealGroup>

        {showStats && (
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
        )}
      </Container>
    </section>
  );
}
