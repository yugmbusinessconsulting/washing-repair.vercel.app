import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms governing washing machine repair bookings and service with FixMate Home Appliances Repair in Kopar Khairane, Navi Mumbai.",
  alternates: {
    canonical: "/terms-of-service",
  },
};

export default function TermsOfService() {
  return (
    <main>
      <Navbar />

      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Terms of Service</h1>
          <p className="text-sm text-slate-400 mb-10">Last updated: July 2026</p>

          <div className="space-y-8 text-slate-600 text-base leading-relaxed">
            <p>
              These terms apply when you book or use washing machine repair
              services from FixMate Home Appliances Repair (&quot;we&quot;, &quot;us&quot;) in
              Kopar Khairane, Navi Mumbai, whether through this website, phone,
              or WhatsApp. By booking a service, you agree to these terms.
            </p>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                Independent Service Provider
              </h2>
              <p>
                We are an independent local repair business. We are not
                affiliated with, authorised by, endorsed by, or associated with
                LG, Samsung, Whirlpool, IFB, Bosch, Siemens, Haier, Panasonic,
                Godrej, or any other appliance brand or manufacturer. Brand
                names are used only to describe the machines we service.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                Pricing &amp; Site Visit Charge
              </h2>
              <p>
                A site visit charge of ₹150 applies for our technician to visit
                your location and diagnose the issue. This is separate from the
                cost of the repair itself. We&apos;ll give you a quote for the repair
                before any work begins, and we won&apos;t proceed without your
                approval.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                Booking, Rescheduling &amp; Cancellation
              </h2>
              <p>
                Bookings made by phone, WhatsApp, or through our website form
                are confirmed once we contact you to schedule a visit. You can
                reschedule or cancel by calling or messaging us before the
                technician is dispatched, at no charge. The site visit charge
                applies once a technician has reached your location.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                Warranty
              </h2>
              <p>
                Repairs come with a service warranty on the specific work
                performed and parts we fit; your technician will confirm the
                warranty period for your repair. The warranty doesn&apos;t cover
                unrelated new faults, misuse, or damage caused after our visit.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">Payment</h2>
              <p>
                Payment is due on completion of the site visit or repair unless
                we&apos;ve agreed otherwise with you in advance.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                Limitation of Liability
              </h2>
              <p>
                We take care in diagnosing and repairing your machine, but we
                aren&apos;t responsible for pre-existing damage or issues unrelated
                to the repair we perform. Our liability for any claim is
                limited to the amount you paid us for that service.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                Website Content
              </h2>
              <p>
                Information on this website, including pricing and service
                details, is provided for general reference and may change
                without notice. Please confirm current pricing when you book.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                Governing Law
              </h2>
              <p>
                These terms are governed by the laws of India, and any dispute
                is subject to the jurisdiction of the courts in Navi Mumbai.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">Contact Us</h2>
              <p>
                Questions about these terms? Call us at{" "}
                <a href="tel:+916388239273" className="text-indigo-600 hover:text-indigo-700 font-semibold">
                  +91 6388 239 273
                </a>{" "}
                or email{" "}
                <a
                  href="mailto:fixmate041@gmail.com"
                  className="text-indigo-600 hover:text-indigo-700 font-semibold"
                >
                  fixmate041@gmail.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
