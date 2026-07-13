import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Phone } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Booking Received",
  robots: {
    index: false,
    follow: true,
  },
};

export default function ThankYou() {
  return (
    <main>
      <Navbar />

      <section className="bg-white py-24 px-4">
        <div className="max-w-lg mx-auto text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mb-6 mx-auto" />
          <h1 className="text-3xl font-bold text-slate-900 mb-3">
            Booking Request Sent
          </h1>
          <p className="text-slate-600 text-base leading-relaxed mb-8">
            We&apos;ve opened WhatsApp with your booking details filled in. Just
            hit Send there to confirm your slot — we&apos;ll get back to you
            shortly.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+916388239273"
              className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-md text-sm transition-colors"
            >
              <Phone className="w-4 h-4" /> Call Us Instead
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-semibold px-6 py-3 rounded-md text-sm transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
