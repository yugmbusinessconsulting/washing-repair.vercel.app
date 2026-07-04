"use client";
import { useState } from "react";
import { Phone, MessageSquare, MapPin, Mail, CheckCircle, AlertTriangle } from "lucide-react";

// After deploying your Google Apps Script, paste the URL here:
const APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL || "";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    brand: "",
    issue: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const brands = [
    "LG", "Samsung", "Whirlpool", "IFB", "Bosch",
    "Siemens", "Haier", "Panasonic", "Godrej", "Electrolux", "Other",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Google Apps Script Web Apps need no-cors + FormData or URL params
      const params = new URLSearchParams({
        name: form.name,
        phone: form.phone,
        brand: form.brand,
        issue: form.issue,
        timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      });

      await fetch(`${APPS_SCRIPT_URL}?${params.toString()}`, {
        method: "GET",
        mode: "no-cors", // Apps Script requires this
      });

      // no-cors means we can't read the response — assume success if no throw
      setStatus("success");
      setForm({ name: "", phone: "", brand: "", issue: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-slate-50 py-24 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

        {/* Left info */}
        <div>
          <span className="text-indigo-600 font-bold text-sm tracking-widest uppercase">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-2 mb-6">
            Book Your <span className="text-indigo-600">Repair</span> Today
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed mb-8">
            Fill in the form and we&apos;ll call you back within 30 minutes to confirm
            your slot. Or reach us directly — we&apos;re always available.
          </p>

          <div className="space-y-4">
            <a
              href="tel:+919026561759"
              className="flex items-center gap-4 bg-white rounded-xl border border-slate-200 p-4 hover:border-indigo-300 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Call Us
                </p>
                <p className="text-base font-black text-slate-800 group-hover:text-indigo-600 transition-colors">
                  +91 90265 61759
                </p>
              </div>
            </a>

            <a
              href={`https://wa.me/919026561759?text=${encodeURIComponent("Hi I want to service my washing machine")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white rounded-xl border border-slate-200 p-4 hover:border-indigo-300 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  WhatsApp Us
                </p>
                <p className="text-base font-black text-slate-800 group-hover:text-indigo-600 transition-colors">
                  Chat Now (30s Reply)
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4 bg-white rounded-xl border border-slate-200 p-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Service Area
                </p>
                <p className="text-base font-black text-slate-800">
                  Kopar Khairane, Navi Mumbai
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white rounded-xl border border-slate-200 p-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Email Us
                </p>
                <p className="text-base font-black text-slate-800">
                  info@city-service.co.in
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right form */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-8">
          {status === "success" ? (
            <div className="text-center py-12 flex flex-col items-center">
              <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
              <h3 className="text-2xl font-black text-slate-900 mb-2">Booking Received!</h3>
              <p className="text-slate-500 mb-6">
                We&apos;ll call you back within 30 minutes to confirm your slot.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="text-indigo-600 font-semibold text-sm underline underline-offset-2 hover:text-indigo-500 transition-colors"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <>
              <h3 className="text-xl font-black text-slate-900 mb-6">Book a Service Slot</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    Machine Brand *
                  </label>
                  <select
                    required
                    value={form.brand}
                    onChange={(e) => setForm({ ...form, brand: e.target.value })}
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all bg-white"
                  >
                    <option value="">Select brand...</option>
                    {brands.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    Describe the Issue
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Machine not draining water, making noise..."
                    value={form.issue}
                    onChange={(e) => setForm({ ...form, issue: e.target.value })}
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-500 text-sm bg-red-50 rounded-lg px-4 py-2 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                    <span>Something went wrong. Please call us directly at +91 90265 61759.</span>
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-300 text-white font-bold py-4 rounded-xl text-base transition-all hover:scale-[1.02] shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <>
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" />
                        <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    "Book My Repair Slot →"
                  )}
                </button>

                <p className="text-center text-xs text-slate-400">
                  We&apos;ll call you back within 30 minutes ✓
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
