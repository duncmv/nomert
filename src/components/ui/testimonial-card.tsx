import { Quotes } from "@phosphor-icons/react/dist/ssr";
import type { Testimonial } from "@/lib/testimonials-data";
import { StarRating } from "@/components/ui/star-rating";
import { RevealItem } from "@/components/ui/reveal";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <RevealItem className="flex h-full flex-col rounded-2xl border border-navy/8 bg-white p-8 shadow-[0_1px_2px_rgba(10,27,47,0.06)]">
      <Quotes size={28} weight="fill" className="text-gold/70" />
      <p className="mt-4 flex-1 font-serif text-lg leading-relaxed text-navy italic">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="mt-6 flex items-center justify-between border-t border-navy/8 pt-5">
        <div>
          <p className="font-display text-sm font-semibold text-navy">{testimonial.name}</p>
          <p className="text-xs text-mist">
            {testimonial.location} &middot; {testimonial.service}
          </p>
        </div>
        <StarRating rating={testimonial.rating} />
      </div>
    </RevealItem>
  );
}
