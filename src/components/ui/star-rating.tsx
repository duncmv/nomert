import { Star } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";

export function StarRating({ rating, size = 15 }: { rating: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          weight="fill"
          className={cn(i < Math.round(rating) ? "text-gold" : "text-mist-light")}
        />
      ))}
    </div>
  );
}
