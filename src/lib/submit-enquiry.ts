import type { EnquiryFormValues } from "@/lib/enquiry-schema";

/**
 * Single integration point for enquiry/quote form submissions — every form
 * on the site calls this one function. Posts to /api/enquiry, which emails
 * the enquiry via Resend once RESEND_API_KEY and ENQUIRY_TO_EMAIL are set
 * (see .env.example); until then the route logs it server-side instead of
 * failing, so the form still works end-to-end in dev/staging.
 */
export async function submitEnquiry(values: EnquiryFormValues): Promise<void> {
  const formData = new FormData();
  formData.set("name", values.name);
  formData.set("telephone", values.telephone);
  formData.set("email", values.email);
  formData.set("address", values.address);
  formData.set("service", values.service);
  formData.set("description", values.description);
  formData.set("preferredContact", values.preferredContact);

  const photos = values.photos as FileList | undefined;
  if (photos) {
    for (const file of Array.from(photos)) {
      formData.append("photos", file);
    }
  }

  const response = await fetch("/api/enquiry", { method: "POST", body: formData });
  if (!response.ok) {
    throw new Error("Failed to submit enquiry");
  }
}
