import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Photo } from "@/components/ui/photo";
import { ButtonLink } from "@/components/ui/button";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";

const tiles = [
  { key: "marbleBathroomFinished1", span: "sm:col-span-2 sm:row-span-2" },
  { key: "greenTileBathroomFinished1", span: "" },
  { key: "officeBrandedWallFinished", span: "" },
  { key: "communalLobbyFinished", span: "" },
  { key: "bedroomAfterClean5", span: "sm:col-span-2" },
];

export function GalleryTeaser() {
  return (
    <section className="bg-navy-dark py-24 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            index="02"
            eyebrow="Our Work"
            title="A closer look at recent projects"
            description="A snapshot of the standard we work to — browse the full gallery for bathrooms, commercial fit-outs, cleaning and before-and-after transformations."
            theme="dark"
          />
          <ButtonLink href="/gallery" variant="outline-light" className="shrink-0">
            View Full Gallery
          </ButtonLink>
        </div>

        <RevealGroup className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:[grid-auto-rows:9rem]">
          {tiles.map((tile) => (
            <RevealItem key={tile.key} className={tile.span}>
              <Photo imageKey={tile.key} className="h-full w-full" sizes="(min-width: 640px) 25vw, 50vw" />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
