import Image from "next/image";
import { stockImages } from "@/lib/stock-images";
import { resolveImageSrc } from "@/lib/image-src";
import { cn } from "@/lib/utils";

interface PhotoProps {
  imageKey: keyof typeof stockImages | string;
  shape?: "rect" | "hexagon" | "full";
  className?: string;
  sizes?: string;
  priority?: boolean;
  width?: number;
  grounding?: boolean;
}

const shapeClass: Record<NonNullable<PhotoProps["shape"]>, string> = {
  rect: "rounded-2xl",
  hexagon: "clip-hexagon",
  full: "",
};

/**
 * All site photography comes from different photographers/lighting, so
 * every image gets the same faint navy wash + base-shadow treatment to
 * read as one shot-for-the-brand set rather than assorted stock photos.
 */
export function Photo({
  imageKey,
  shape = "rect",
  className,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  width = 1600,
  grounding = true,
}: PhotoProps) {
  const image = stockImages[imageKey];
  if (!image) return null;
  const { src, unoptimized } = resolveImageSrc(image.url, width);

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-navy-light",
        shapeClass[shape],
        className
      )}
    >
      <Image
        src={src}
        alt={image.alt}
        fill
        sizes={sizes}
        priority={priority}
        unoptimized={unoptimized}
        className="object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-navy mix-blend-multiply opacity-[0.08]" />
      {grounding && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent" />
      )}
    </div>
  );
}
