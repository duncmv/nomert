import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { StarRating } from "@/components/ui/star-rating";
import { ButtonLink } from "@/components/ui/button";
import { RevealGroup } from "@/components/ui/reveal";
import { testimonials, reviewSummary } from "@/lib/testimonials-data";

export function TestimonialsTeaser() {
  const featured = testimonials.slice(0, 3);

  return (
    <section className="bg-cream py-24 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            index="04"
            eyebrow="Reviews"
            title="What clients say about working with us"
          />
          <div className="flex shrink-0 items-center gap-3 rounded-full border border-navy/10 bg-white px-5 py-3">
            <StarRating rating={reviewSummary.average} />
            <span className="text-sm font-semibold text-navy">
              {reviewSummary.average} / 5
            </span>
            <span className="text-sm text-mist">({reviewSummary.totalReviews} reviews)</span>
          </div>
        </div>

        <RevealGroup className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {featured.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </RevealGroup>

        <div className="mt-10 text-center">
          <ButtonLink href="/reviews" variant="outline-dark">
            Read All Reviews
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
