import { NextResponse } from "next/server";
import { Resend } from "resend";
import { enquirySchema, contactMethods } from "@/lib/enquiry-schema";

export const runtime = "nodejs";

// Conservative cap for total attachment payload — serverless request body
// limits (e.g. Vercel's default ~4.5MB) make large photo uploads risky.
const MAX_ATTACHMENTS_BYTES = 4 * 1024 * 1024;

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.ENQUIRY_TO_EMAIL;

  const formData = await request.formData();

  const parsed = enquirySchema.safeParse({
    name: formData.get("name"),
    telephone: formData.get("telephone"),
    email: formData.get("email"),
    address: formData.get("address"),
    service: formData.get("service"),
    description: formData.get("description"),
    preferredContact: formData.get("preferredContact"),
  });

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid enquiry data" }, { status: 400 });
  }
  const values = parsed.data;
  if (!contactMethods.includes(values.preferredContact)) {
    return NextResponse.json({ error: "Invalid preferred contact method" }, { status: 400 });
  }

  const photoFiles = formData.getAll("photos").filter((f): f is File => f instanceof File && f.size > 0);

  if (!apiKey || !toEmail) {
    console.warn(
      "[enquiry] RESEND_API_KEY / ENQUIRY_TO_EMAIL not configured — enquiry captured but not emailed:",
      { ...values, photoCount: photoFiles.length }
    );
    return NextResponse.json({ ok: true, sent: false });
  }

  let attachments: { filename: string; content: Buffer }[] = [];
  let attachmentNote = "";
  const totalBytes = photoFiles.reduce((sum, f) => sum + f.size, 0);

  if (totalBytes > MAX_ATTACHMENTS_BYTES) {
    attachmentNote = `${photoFiles.length} photo(s) were attached to this enquiry but exceeded the email size limit — follow up with the customer directly for photos.`;
  } else if (photoFiles.length > 0) {
    attachments = await Promise.all(
      photoFiles.map(async (file) => ({
        filename: file.name || "photo.jpg",
        content: Buffer.from(await file.arrayBuffer()),
      }))
    );
  }

  const resend = new Resend(apiKey);
  const bodyLines = [
    `Name: ${values.name}`,
    `Telephone: ${values.telephone}`,
    `Email: ${values.email}`,
    `Property address: ${values.address}`,
    `Service required: ${values.service}`,
    `Preferred contact method: ${values.preferredContact}`,
    "",
    "Description:",
    values.description,
    attachmentNote ? `\n${attachmentNote}` : "",
  ];

  try {
    // TODO: this domain needs verifying in Resend before sending will work —
    // swap once the real domain is confirmed.
    await resend.emails.send({
      from: "Nomert Website <enquiries@notifications.nomertpropertyservices.co.uk>",
      to: toEmail,
      replyTo: values.email,
      subject: `New enquiry: ${values.service} — ${values.name}`,
      text: bodyLines.join("\n"),
      attachments: attachments.length > 0 ? attachments : undefined,
    });
  } catch (error) {
    console.error("[enquiry] Failed to send enquiry email:", error);
    return NextResponse.json({ error: "Failed to send enquiry" }, { status: 502 });
  }

  return NextResponse.json({ ok: true, sent: true });
}
