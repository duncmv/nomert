import type { EnquiryFormValues } from "@/lib/enquiry-schema";

/**
 * Single integration point for enquiry/quote form submissions.
 *
 * Not wired to a backend yet. To go live: replace the body with a call to
 * an API route (e.g. `app/api/enquiry/route.ts`) that sends the payload to
 * an email service (Resend, Postmark, etc.) or CRM. Every form on the site
 * calls this one function, so wiring up delivery here is the only change
 * needed to make every service page's quote form functional.
 */
export async function submitEnquiry(values: EnquiryFormValues): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 900));
  if (process.env.NODE_ENV !== "production") {
    console.info("[enquiry] not yet wired to a backend — captured locally:", {
      ...values,
      photos: values.photos?.length ? `${values.photos.length} file(s)` : "none",
    });
  }
}
