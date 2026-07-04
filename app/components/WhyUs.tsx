import { Zap, Award, Settings, Coins, ShieldCheck, Home } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Same-Day Service",
    desc: "Book before noon and we show up the same day. No waiting, no guessing.",
  },
  {
    icon: Award,
    title: "Certified Technicians",
    desc: "Our team is trained and experienced with all brands and machine types.",
  },
  {
    icon: Settings,
    title: "Genuine Spare Parts",
    desc: "We only use original spare parts — your machine runs like new.",
  },
  {
    icon: Coins,
    title: "Transparent Pricing",
    desc: "No hidden charges. You know the cost before we start the repair.",
  },
  {
    icon: ShieldCheck,
    title: "Service Warranty",
    desc: "All repairs come with a warranty. If it breaks again, we come back.",
  },
  {
    icon: Home,
    title: "Doorstep Convenience",
    desc: "We come to you — no need to carry your machine anywhere.",
  },
];

export default function WhyUs() {
  return (
    <section id="about" className="bg-gradient-to-b from-white to-slate-50 py-28 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left text */}
        <div>
          <span className="text-indigo-600 font-bold text-sm tracking-widest uppercase">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-2 mb-6">
            Navi Mumbai&apos;s Most{" "}
            <span className="text-indigo-600">Trusted</span> Repair Team
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed mb-8">
            Home Appliances Repair has been serving households across Kopar Khairane, Navi Mumbai with fast,
            reliable washing machine repairs. We believe in doing it right the
            first time — with quality parts, honest pricing, and a team you can
            trust.
          </p>

          {/* Big stat */}
          <div className="bg-slate-950 text-white rounded-3xl p-8 flex gap-8 items-center border border-slate-800 shadow-2xl relative overflow-hidden group">
            {/* Soft inner glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="text-6xl font-black text-indigo-400 select-none relative z-10">98%</div>
            <div className="relative z-10">
              <p className="font-extrabold text-white text-lg tracking-tight mb-1">
                Customer Satisfaction
              </p>
              <p className="text-slate-400 text-sm">
                Based on 500+ completed doorstep repairs across Kopar Khairane, Navi Mumbai.
              </p>
            </div>
          </div>
        </div>

        {/* Right grid */}
        <div className="grid grid-cols-2 gap-6">
          {reasons.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className="bg-white hover:bg-indigo-50/30 rounded-2xl p-6 transition-all duration-300 border border-slate-100 hover:border-indigo-100 shadow-sm hover:shadow-md flex flex-col"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center mb-4 text-indigo-600">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-black text-slate-900 text-base mb-1.5 tracking-tight">
                  {r.title}
                </h4>
                <p className="text-slate-500 text-xs leading-relaxed">{r.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
