/**
 * Remote (Unsplash) images are served pre-resized via URL query params and
 * marked unoptimized. Local images live under /public and should go through
 * Next's own image optimizer instead — no query-param hack, and no
 * `unoptimized` flag so it actually gets to do its job.
 */
export function resolveImageSrc(url: string, width: number): { src: string; unoptimized: boolean } {
  if (!url.startsWith("http")) {
    return { src: url, unoptimized: false };
  }
  const hasQuery = url.includes("?");
  return {
    src: `${url}${hasQuery ? "&" : "?"}auto=format&fit=crop&w=${width}&q=80`,
    unoptimized: true,
  };
}
