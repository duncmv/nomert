import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Nomert Property Services collects, uses and protects your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy Policy"
        title="Privacy Policy"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
      />

      <section className="bg-white py-20 sm:py-24">
        <Container className="max-w-3xl">
          <div className="mb-12 rounded-2xl border border-gold/30 bg-cream px-6 py-5 text-sm leading-relaxed text-navy">
            <strong className="font-display font-semibold">Draft — pending Nomert&apos;s legal review.</strong>{" "}
            This is standard boilerplate for a UK small business quote-and-contact site. Please review and
            confirm before this page goes live.
          </div>

          <div className="space-y-10 text-[0.95rem] leading-relaxed text-mist">
            <div>
              <h2 className="font-display text-xl font-semibold text-navy">Who we are</h2>
              <p className="mt-3">
                {siteConfig.brandName} is a trading division of {siteConfig.legalName} (&ldquo;Nomert&rdquo;,
                &ldquo;we&rdquo;, &ldquo;us&rdquo;). This policy explains what information we collect through{" "}
                {siteConfig.domain}, why we collect it, and how it&apos;s handled.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-navy">Information we collect</h2>
              <p className="mt-3">When you submit a quote request or contact form, we collect:</p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5">
                <li>Your name, telephone number and email address</li>
                <li>Your property address or postcode</li>
                <li>Details of the service you&apos;re enquiring about and a description of the work</li>
                <li>Your preferred contact method</li>
                <li>Any photos you choose to upload of the property or the issue</li>
              </ul>
              <p className="mt-3">
                We don&apos;t collect payment details, and we don&apos;t use cookies for advertising or tracking
                beyond basic site analytics.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-navy">How we use it</h2>
              <p className="mt-3">
                Your information is used solely to respond to your enquiry, prepare a quote, and carry out
                agreed work — including sharing relevant details with our own tradespeople for the purposes of
                completing that work. We don&apos;t sell or share your details with third parties for marketing.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-navy">How long we keep it</h2>
              <p className="mt-3">
                We retain enquiry and job records for as long as reasonably necessary for business, accounting
                and legal purposes, after which they&apos;re deleted.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-navy">Your rights</h2>
              <p className="mt-3">
                You can ask us what information we hold about you, ask us to correct it, or ask us to delete it,
                by contacting us at{" "}
                <a href={`mailto:${siteConfig.contact.email}`} className="font-semibold text-gold-dark hover:text-navy">
                  {siteConfig.contact.email}
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-navy">Contact</h2>
              <p className="mt-3">
                Questions about this policy can be sent to{" "}
                <a href={`mailto:${siteConfig.contact.email}`} className="font-semibold text-gold-dark hover:text-navy">
                  {siteConfig.contact.email}
                </a>{" "}
                or {siteConfig.contact.phoneDisplay}.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
