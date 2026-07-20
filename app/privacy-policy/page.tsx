import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Perfect Appliance Repair collects and uses information from visitors and customers in Kopar Khairane, Navi Mumbai.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  return (
    <main>
      <Navbar />

      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Privacy Policy</h1>
          <p className="text-sm text-slate-400 mb-10">Last updated: July 2026</p>

          <div className="space-y-8 text-slate-600 text-base leading-relaxed">
            <p>
              Perfect Appliance Repair (&quot;we&quot;, &quot;us&quot;) provides doorstep
              washing machine repair services in Kopar Khairane, Navi Mumbai. This
              page explains what information we collect through this website and
              how we use it.
            </p>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                Information We Collect
              </h2>
              <p>
                When you use our booking form, we ask for your name, phone number,
                washing machine brand, and a description of the issue. We don&apos;t
                collect any other personal information through this website, and we
                don&apos;t use tracking cookies to build a profile of you beyond what&apos;s
                described below.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                How We Use It
              </h2>
              <p>
                The booking form prepares a WhatsApp message with your details and
                opens WhatsApp so you can send it to us directly. We don&apos;t store
                form submissions on our servers — the message goes straight to our
                WhatsApp number, where it&apos;s handled under WhatsApp&apos;s own privacy
                policy. If you call or message us directly, we may keep your name
                and number on file to follow up on your repair or honour a service
                warranty.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                Advertising &amp; Cookies
              </h2>
              <p>
                We may run Google Ads and use Google Analytics to understand how
                people find this website and to measure the effectiveness of our
                advertising. These services can use cookies or similar technology
                to record ad clicks and site visits. You can block or delete
                cookies in your browser settings at any time; this won&apos;t affect
                your ability to call or WhatsApp us.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                Brand Names
              </h2>
              <p>
                We mention brand names like LG, Samsung, Whirlpool, IFB, Bosch,
                Siemens, Haier, Panasonic and Godrej only to describe the machines
                we repair. We are an independent service provider and are not
                affiliated with, authorised by, or endorsed by any of these
                brands, and this policy doesn&apos;t cover their websites or apps.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                Data Retention &amp; Your Rights
              </h2>
              <p>
                We keep customer details only as long as needed for service
                follow-up or warranty support. To ask us to correct or delete
                information we hold about you, call us at{" "}
                <a
                  href="tel:+916388239273"
                  className="text-indigo-600 hover:text-indigo-700 font-semibold"
                >
                  +91 6388 239 273
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                Changes to This Policy
              </h2>
              <p>
                We may update this page from time to time as our services or
                tools change. Check back here for the latest version.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">Contact Us</h2>
              <p>
                Questions about this policy? Call us at{" "}
                <a href="tel:+916388239273" className="text-indigo-600 hover:text-indigo-700 font-semibold">
                  +91 6388 239 273
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
