import { Wrench, WashingMachine, Settings, Headphones } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Washing Machine Repair",
    desc: "Repair for front load, top load, semi-automatic, and fully automatic machines. We fix draining, spinning, noise, leaks, and power failures.",
    tags: "Front Load, Top Load, Semi-Automatic",
  },
  {
    icon: WashingMachine,
    title: "Installation & Setup",
    desc: "Installation with proper water connections, drainage setup, and electrical fitting for new machines.",
    tags: "New Machine, Water Lines, Electrical",
  },
  {
    icon: Settings,
    title: "Routine Maintenance",
    desc: "Preventive servicing to clean drums, descale, lubricate, and inspect seals. Keeps the machine running efficiently for longer.",
    tags: "Drum Cleaning, Descaling, Inspection",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    desc: "Call or WhatsApp for bookings, maintenance queries, and repair follow-ups.",
    tags: "Booking, WhatsApp, Follow-up",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
            Services We Offer
          </h2>
          <p className="text-slate-600 text-base max-w-xl">
            From quick fixes to full installations, at your doorstep.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="bg-white rounded-lg border border-slate-200 p-6 flex flex-col"
              >
                <div className="w-11 h-11 rounded-md bg-slate-100 flex items-center justify-center mb-4 text-indigo-600">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">
                  {s.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-3">
                  {s.desc}
                </p>
                <p className="text-xs text-slate-400">{s.tags}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
