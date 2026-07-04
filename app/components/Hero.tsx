import Image from "next/image";
import { Phone, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="bg-slate-50 border-b border-slate-200 py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-4">
            Washing Machine Repair in Kopar Khairane, Navi Mumbai
          </h1>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6">
            Doorstep repair for all major brands — LG, Samsung, Whirlpool,
            IFB, Bosch, Siemens, Haier, Panasonic and Godrej. Front load,
            top load, semi-automatic and fully automatic machines.
          </p>

          <ul className="text-slate-700 text-sm space-y-2 mb-8">
            <li>• Site visit charge: ₹150</li>
            <li>• Same-day doorstep service, most areas</li>
            <li>• Diagnosis and price quote given before repair starts</li>
          </ul>

          <div className="flex flex-wrap gap-3">
            <a
              href="tel:+916388239273"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-md text-sm transition-colors"
            >
              <Phone className="w-4 h-4" /> Call Now: 6388 239 273
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-semibold px-6 py-3 rounded-md text-sm transition-colors"
            >
              Book a Repair <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden border border-slate-200 bg-white">
          <Image
            src="/washing1.webp"
            alt="Washing machine repair technician at work"
            width={600}
            height={600}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
