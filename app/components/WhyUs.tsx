import Image from "next/image";
import { Zap, Award, Settings, Coins, ShieldCheck, Home } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Same-Day Service",
    desc: "Book before noon and we show up the same day, most areas.",
  },
  {
    icon: Award,
    title: "Experienced Technicians",
    desc: "Our team is experienced with all brands and machine types.",
  },
  {
    icon: Settings,
    title: "Genuine Spare Parts",
    desc: "We use original spare parts wherever possible.",
  },
  {
    icon: Coins,
    title: "Transparent Pricing",
    desc: "You know the cost before we start the repair. No hidden charges.",
  },
  {
    icon: ShieldCheck,
    title: "Service Warranty",
    desc: "Repairs come with a warranty. If it breaks again, we come back.",
  },
  {
    icon: Home,
    title: "Doorstep Convenience",
    desc: "We come to you — no need to carry your machine anywhere.",
  },
];

export default function WhyUs() {
  return (
    <section id="about" className="bg-slate-50 py-20 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left: image + intro text */}
        <div>
          <div className="rounded-lg overflow-hidden border border-slate-200 bg-white mb-6">
            <Image
              src="/washing2.webp"
              alt="Washing machine repair service"
              width={1000}
              height={1000}
              className="w-full h-auto object-cover"
            />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            FixMate Home Appliances Repair serves households across Kopar
            Khairane and Navi Mumbai — including Vashi, Ghansoli, Kharghar,
            CBD Belapur, Nerul, Sanpada, Panvel, Kamothe, Ulwe and Airoli —
            with washing machine repairs. We are an independent local service
            provider — not affiliated with or authorised by any appliance
            brand or manufacturer.
          </p>
        </div>

        {/* Right grid */}
        <div className="grid grid-cols-2 gap-5">
          {reasons.map((r) => {
            const Icon = r.icon;
            return (
              <div key={r.title} className="bg-white rounded-lg p-5 border border-slate-200">
                <Icon className="w-5 h-5 text-indigo-600 mb-3" />
                <h4 className="font-bold text-slate-900 text-sm mb-1">
                  {r.title}
                </h4>
                <p className="text-slate-600 text-xs leading-relaxed">{r.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
