import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Photo } from "@/components/ui/photo";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import type { WorkPhoto } from "@/lib/work-photos";

interface RecentWorkStripProps {
  photos: WorkPhoto[];
  title?: string;
  limit?: number;
  tone?: "cream" | "white";
}

/**
 * Renders nothing when there are no real photos for the category — a
 * missing section here is preferable to filling the gap with stock images
 * captioned as "recent work."
 */
export function RecentWorkStrip({ photos, title = "Recent work", limit = 4, tone = "cream" }: RecentWorkStripProps) {
  if (photos.length === 0) return null;
  const shown = photos.slice(0, limit);

  return (
    <section className={cn("py-24 sm:py-28", tone === "cream" ? "bg-cream" : "bg-white")}>
      <Container>
        <SectionHeading eyebrow="Our Work" title={title} />
        <RevealGroup className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {shown.map((photo) => (
            <RevealItem key={photo.key} className="aspect-[4/5] overflow-hidden rounded-xl">
              <Photo imageKey={photo.key} grounding={false} width={640} className="h-full w-full" sizes="(min-width: 1024px) 25vw, 50vw" />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
