import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms and conditions for quotes and work carried out by Nomert Property Services.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Terms and Conditions"
        title="Terms and Conditions"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms and Conditions" }]}
      />

      <section className="bg-white py-20 sm:py-24">
        <Container className="max-w-3xl">
          <div className="mb-12 rounded-2xl border border-gold/30 bg-cream px-6 py-5 text-sm leading-relaxed text-navy">
            <strong className="font-display font-semibold">Draft — pending Nomert&apos;s legal review.</strong>{" "}
            This is standard boilerplate for a UK trades/property-services business. Please review and confirm
            before this page goes live.
          </div>

          <div className="space-y-10 text-[0.95rem] leading-relaxed text-mist">
            <div>
              <h2 className="font-display text-xl font-semibold text-navy">About these terms</h2>
              <p className="mt-3">
                These terms apply to quotes requested and work carried out by {siteConfig.brandName}, a trading
                division of {siteConfig.legalName}. By requesting a quote or booking work with us, you agree to
                these terms.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-navy">Quotes</h2>
              <p className="mt-3">
                Quotes are provided free and without obligation, based on the information and photos supplied at
                the time of enquiry. A site visit may be required to confirm a final price for larger jobs.
                Quotes are typically valid for 30 days unless otherwise stated.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-navy">Booking and payment</h2>
              <p className="mt-3">
                Work is scheduled once a quote is accepted. Payment terms (deposit, staged payments, or payment
                on completion) will be confirmed with you before work begins.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-navy">Access and property</h2>
              <p className="mt-3">
                You agree to provide reasonable access to the property for the agreed work to be carried out. We
                treat every property with care and will flag any pre-existing issues we find before starting
                work where relevant.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-navy">Cancellations</h2>
              <p className="mt-3">
                We ask for as much notice as possible if you need to reschedule or cancel booked work, so we can
                offer the slot to another client.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-navy">Liability</h2>
              <p className="mt-3">
                We carry out all work to a professional standard. Details of our insurance cover will be
                confirmed on request.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-navy">Contact</h2>
              <p className="mt-3">
                Questions about these terms can be sent to{" "}
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
