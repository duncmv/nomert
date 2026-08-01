import { ChatCircleDots, ClipboardText, Wrench, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";

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

interface HowItWorksProps {
  index?: string;
}

export function HowItWorks({ index }: HowItWorksProps) {
  return (
    <section className="bg-cream py-24 sm:py-28">
      <Container>
        <SectionHeading index={index} eyebrow="How We Work" title="From first message to finished job" align="center" />
        <RevealGroup className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => {
            const Icon = step.icon;
            return (
              <RevealItem key={step.title} className="relative text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold/30 bg-white text-gold-dark shadow-sm">
                  <Icon size={26} weight="bold" />
                </div>
                <span className="mt-4 block font-serif text-sm text-gold-dark italic">Step {i + 1}</span>
                <h3 className="mt-1 font-display text-lg font-semibold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{step.description}</p>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
