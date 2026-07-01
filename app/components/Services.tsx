import { Wrench, WashingMachine, Settings, Headphones } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Washing Machine Repair",
    desc: "Complete repair for front load, top load, semi-automatic, and fully automatic machines. We fix all issues — draining, spinning, noise, leaks, power failures.",
    tags: ["Front Load", "Top Load", "Semi-Auto"],
    color: "indigo",
  },
  {
    icon: WashingMachine,
    title: "Installation & Setup",
    desc: "Professional installation with proper water connections, drainage setup, and safe electrical fitting. We ensure your new machine is ready to run perfectly.",
    tags: ["New Machine", "Water Lines", "Electrical"],
    color: "blue",
  },
  {
    icon: Settings,
    title: "Routine Maintenance",
    desc: "Preventive servicing to clean drums, descale, lubricate, and inspect seals. Regular maintenance extends machine life and improves washing efficiency.",
    tags: ["Drum Clean", "Descaling", "Inspection"],
    color: "violet",
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    desc: "Our team is always ready for service bookings, maintenance queries, and emergency repairs. Fast response, easy scheduling, reliable after-service support.",
    tags: ["Emergency", "Booking", "WhatsApp"],
    color: "orange",
  },
];

const colorMap: Record<string, string> = {
  indigo: "bg-indigo-50/80 border-indigo-100/50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-indigo-600/30",
  blue: "bg-blue-50/80 border-blue-100/50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-600/30",
  violet: "bg-violet-50/80 border-violet-100/50 text-violet-600 group-hover:bg-violet-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-violet-600/30",
  orange: "bg-orange-50/80 border-orange-100/50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-orange-600/30",
};

const tagColorMap: Record<string, string> = {
  indigo: "bg-indigo-50 text-indigo-700 border-indigo-100/50",
  blue: "bg-blue-50 text-blue-700 border-blue-100/50",
  violet: "bg-violet-50 text-violet-700 border-violet-100/50",
  orange: "bg-orange-50 text-orange-700 border-orange-100/50",
};

export default function Services() {
  return (
    <section id="services" className="bg-gradient-to-b from-slate-50 to-white py-28 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-indigo-600 font-bold text-sm tracking-widest uppercase">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-2 mb-4">
            Complete Repair Solutions
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            From quick fixes to full installations — we&apos;ve got every
            washing machine need covered at your doorstep.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group bg-white rounded-3xl border border-slate-100 p-8 hover:shadow-2xl hover:shadow-slate-100/80 hover:-translate-y-1.5 transition-all duration-300 flex flex-col relative overflow-hidden"
              >
                {/* Accent line on hover */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-indigo-500 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                
                <div
                  className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-6 transition-all duration-300 ${colorMap[s.color]}`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-black text-slate-900 text-xl mb-3">
                  {s.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-6">
                  {s.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs font-bold px-3 py-1 rounded-full border ${tagColorMap[s.color]}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
