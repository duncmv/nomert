import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Unsplash CDN images are rendered with `unoptimized` (they're already
    // resized/format-negotiated via Unsplash's own URL params), so this
    // allowlist isn't load-bearing today — kept for if that changes.
    remotePatterns: [new URL("https://images.unsplash.com/**")],
  },
};

export default nextConfig;
