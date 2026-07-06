import type { Metadata } from "next";
import { GoogleLogo, Star } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Container } from "@/components/ui/container";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { StarRating } from "@/components/ui/star-rating";
import { RevealGroup, Reveal } from "@/components/ui/reveal";
import { testimonials, reviewSummary } from "@/lib/testimonials-data";

export const metadata: Metadata = {
  title: "Reviews",
  description: "Read client testimonials and Google Reviews for Nomert Property Services.",
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="What it's like to work with Nomert"
        description="Client testimonials and Google Reviews from across London."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Reviews" }]}
      />

      <section className="bg-cream py-24 sm:py-28">
        <Container>
          <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-2xl border border-navy/8 bg-white p-10 text-center shadow-[0_1px_2px_rgba(10,27,47,0.06)] sm:flex-row sm:text-left">
            <div className="flex flex-col items-center gap-2 sm:items-start">
              <div className="flex items-center gap-2 text-mist">
                <GoogleLogo size={20} weight="bold" />
                <span className="text-sm font-medium">Google Reviews</span>
              </div>
              <span className="font-display text-5xl font-bold text-navy">
                {reviewSummary.average}
              </span>
              <StarRating rating={reviewSummary.average} size={18} />
              <span className="text-sm text-mist">{reviewSummary.totalReviews} reviews</span>
            </div>
            <div className="w-full flex-1 space-y-2">
              {reviewSummary.breakdown.map((row) => (
                <div key={row.stars} className="flex items-center gap-3">
                  <span className="flex w-10 items-center gap-1 text-xs text-mist">
                    {row.stars} <Star size={11} weight="fill" className="text-gold" />
                  </span>
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-mist-light">
                    <div
                      className="h-full rounded-full bg-gold"
                      style={{ width: `${row.percentage}%` }}
                    />
                  </div>
                  <span className="w-9 text-right text-xs text-mist">{row.percentage}%</span>
                </div>
              ))}
            </div>
          </Reveal>

          <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </RevealGroup>
        </Container>
      </section>

      <CtaBanner
        title="Join our list of satisfied clients"
        description="Request a free quote today and see why clients across London trust Nomert with their properties."
      />
    </>
  );
}
