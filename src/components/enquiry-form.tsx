"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle, UploadSimple, Spinner } from "@phosphor-icons/react";
import { enquirySchema, contactMethods, type EnquiryFormValues } from "@/lib/enquiry-schema";
import { submitEnquiry } from "@/lib/submit-enquiry";
import { allServices } from "@/lib/services-data";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const serviceOptions = Array.from(new Set(allServices.map((s) => s.name))).sort();

interface EnquiryFormProps {
  defaultService?: string;
  theme?: "light" | "dark";
  className?: string;
}

export function EnquiryForm({ defaultService, theme = "light", className }: EnquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryFormValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      service: defaultService ?? "",
      preferredContact: "Phone",
    },
  });

  const isDark = theme === "dark";
  const label = cn("mb-1.5 block text-sm font-medium", isDark ? "text-white/85" : "text-navy");
  const input = cn(
    "w-full rounded-lg border px-4 py-3 text-sm outline-none transition-colors focus:border-gold",
    isDark
      ? "border-white/15 bg-white/5 text-white placeholder:text-white/35"
      : "border-navy/12 bg-white text-navy placeholder:text-mist/60"
  );
  const errorText = "mt-1.5 text-xs font-medium text-red-400";

  async function onSubmit(values: EnquiryFormValues) {
    try {
      setSubmitError(false);
      await submitEnquiry(values);
      setSubmitted(true);
      reset();
    } catch {
      setSubmitError(true);
    }
  }

  if (submitted) {
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center rounded-2xl border p-10 text-center",
          isDark ? "border-gold/25 bg-white/5" : "border-gold/25 bg-cream",
          className
        )}
      >
        <CheckCircle size={44} weight="fill" className="text-gold" />
        <h3 className={cn("mt-4 font-display text-xl font-semibold", isDark ? "text-white" : "text-navy")}>
          Enquiry received
        </h3>
        <p className={cn("mt-2 max-w-sm text-sm", isDark ? "text-white/65" : "text-mist")}>
          Thank you — our team will review the details and come back to you using your
          preferred contact method shortly.
        </p>
        <Button
          type="button"
          variant={isDark ? "outline-light" : "outline-dark"}
          className="mt-6"
          onClick={() => setSubmitted(false)}
        >
          Submit another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn("space-y-5", className)} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">
            Name
          </label>
          <input id="name" className={input} placeholder="Full name" {...register("name")} />
          {errors.name && <p className={errorText}>{errors.name.message}</p>}
        </div>
        <div>
          <label className={label} htmlFor="telephone">
            Telephone
          </label>
          <input id="telephone" className={input} placeholder="07XXX XXXXXX" {...register("telephone")} />
          {errors.telephone && <p className={errorText}>{errors.telephone.message}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="email">
            Email
          </label>
          <input id="email" type="email" className={input} placeholder="you@example.com" {...register("email")} />
          {errors.email && <p className={errorText}>{errors.email.message}</p>}
        </div>
        <div>
          <label className={label} htmlFor="address">
            Property address
          </label>
          <input id="address" className={input} placeholder="Street, borough, postcode" {...register("address")} />
          {errors.address && <p className={errorText}>{errors.address.message}</p>}
        </div>
      </div>

      <div>
        <label className={label} htmlFor="service">
          Service required
        </label>
        <select id="service" className={input} {...register("service")}>
          <option value="" disabled>
            Select a service
          </option>
          {serviceOptions.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
        {errors.service && <p className={errorText}>{errors.service.message}</p>}
      </div>

      <div>
        <label className={label} htmlFor="description">
          Tell us about the work
        </label>
        <textarea
          id="description"
          rows={4}
          className={input}
          placeholder="A brief description of what you need done"
          {...register("description")}
        />
        {errors.description && <p className={errorText}>{errors.description.message}</p>}
      </div>

      <div>
        <label className={label} htmlFor="photos">
          Photos <span className="font-normal opacity-60">(optional)</span>
        </label>
        <label
          htmlFor="photos"
          className={cn(
            "flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-dashed px-4 py-5 text-sm transition-colors",
            isDark
              ? "border-white/20 text-white/60 hover:border-gold hover:text-gold"
              : "border-navy/20 text-mist hover:border-gold-dark hover:text-gold-dark"
          )}
        >
          <UploadSimple size={18} />
          Upload photos of the property or issue
        </label>
        <input id="photos" type="file" accept="image/*" multiple className="sr-only" {...register("photos")} />
      </div>

      <fieldset>
        <legend className={label}>Preferred contact method</legend>
        <div className="flex flex-wrap gap-3">
          {contactMethods.map((method) => (
            <label
              key={method}
              className={cn(
                "cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition-colors has-[:checked]:border-gold has-[:checked]:bg-gold has-[:checked]:text-navy",
                isDark ? "border-white/20 text-white/75" : "border-navy/15 text-navy"
              )}
            >
              <input type="radio" value={method} className="sr-only" {...register("preferredContact")} />
              {method}
            </label>
          ))}
        </div>
      </fieldset>

      {submitError && (
        <p className="text-center text-sm font-medium text-red-400">
          Something went wrong sending your enquiry — please try again, or call/WhatsApp us directly.
        </p>
      )}

      <Button type="submit" variant="primary" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Spinner size={16} className="animate-spin" />
            Sending
          </>
        ) : (
          "Request a Free Quote"
        )}
      </Button>
      <p className={cn("text-center text-xs", isDark ? "text-white/40" : "text-mist/70")}>
        We&apos;ll never share your details. No obligation, no pressure.
      </p>
    </form>
  );
}
