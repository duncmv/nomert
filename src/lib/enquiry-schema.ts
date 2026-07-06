import { z } from "zod";

export const contactMethods = ["Phone", "Email", "WhatsApp"] as const;

export const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name"),
  telephone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(20, "Please enter a valid phone number"),
  email: z.string().trim().email("Please enter a valid email address"),
  address: z.string().trim().min(5, "Please enter the property address"),
  service: z.string().trim().min(1, "Please select a service"),
  description: z
    .string()
    .trim()
    .min(10, "Please add a few details about the work required"),
  preferredContact: z.enum(contactMethods),
  // Kept loosely typed: FileList is a browser-only global and this schema
  // module can be evaluated during SSR of the client form component.
  photos: z.any().optional(),
});

export type EnquiryFormValues = z.infer<typeof enquirySchema>;
