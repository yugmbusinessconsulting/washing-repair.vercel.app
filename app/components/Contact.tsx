"use client";
import { useState } from "react";
import { Phone, MessageSquare, MapPin, Mail, CheckCircle, AlertTriangle } from "lucide-react";

const WHATSAPP_NUMBER = "916388239273";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    brand: "",
    issue: "",
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const brands = [
    "LG", "Samsung", "Whirlpool", "IFB", "Bosch",
    "Siemens", "Haier", "Panasonic", "Godrej", "Electrolux", "Other",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = [
      "New Repair Booking Request",
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Brand: ${form.brand}`,
      `Issue: ${form.issue || "Not specified"}`,
    ].join("\n");

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    const win = window.open(waUrl, "_blank", "noopener,noreferrer");

    if (win) {
      setStatus("success");
      setForm({ name: "", phone: "", brand: "", issue: "" });
    } else {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-slate-50 py-24 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

        {/* Left info */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Book Your Repair
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-6">
            Fill in the form and we&apos;ll call you back within 30 minutes to confirm
            your slot. Or reach us directly.
          </p>

          <div className="space-y-3">
            <a
              href="tel:+916388239273"
              className="flex items-center gap-4 bg-white rounded-lg border border-slate-200 p-4 hover:border-indigo-300 transition-colors"
            >
              <div className="w-10 h-10 bg-slate-100 rounded-md flex items-center justify-center text-indigo-600">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                  Call Us
                </p>
                <p className="text-base font-bold text-slate-800">
                  +91 6388 239 273
                </p>
              </div>
            </a>

            <a
              href={`https://wa.me/916388239273?text=${encodeURIComponent("Hi I want to service my washing machine")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white rounded-lg border border-slate-200 p-4 hover:border-indigo-300 transition-colors"
            >
              <div className="w-10 h-10 bg-slate-100 rounded-md flex items-center justify-center text-indigo-600">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                  WhatsApp Us
                </p>
                <p className="text-base font-bold text-slate-800">
                  Chat Now
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4 bg-white rounded-lg border border-slate-200 p-4">
              <div className="w-10 h-10 bg-slate-100 rounded-md flex items-center justify-center text-indigo-600">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                  Service Area
                </p>
                <p className="text-base font-bold text-slate-800">
                  Kopar Khairane, Navi Mumbai
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white rounded-lg border border-slate-200 p-4">
              <div className="w-10 h-10 bg-slate-100 rounded-md flex items-center justify-center text-indigo-600">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                  Email Us
                </p>
                <p className="text-base font-bold text-slate-800">
                  fixmate041@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right form */}
        <div className="bg-white rounded-lg border border-slate-200 p-8">
          {status === "success" ? (
            <div className="text-center py-12 flex flex-col items-center">
              <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Almost Done!</h3>
              <p className="text-slate-500 mb-6">
                We&apos;ve opened WhatsApp with your booking details filled in —
                just hit Send to confirm your slot.
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
              <h3 className="text-xl font-bold text-slate-900 mb-6">Book a Service Slot</h3>

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
                    <span>
                      Couldn&apos;t open WhatsApp automatically. Please allow
                      pop-ups, or message us directly at +91 6388 239 273.
                    </span>
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 rounded-md text-base transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-5 h-5" />
                  Send Booking via WhatsApp
                </button>

                <p className="text-center text-xs text-slate-400">
                  Opens WhatsApp with your details pre-filled ✓
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
