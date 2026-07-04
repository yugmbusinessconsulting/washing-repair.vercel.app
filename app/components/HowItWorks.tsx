import { PhoneCall, UserCheck, Search, CheckCircle } from "lucide-react";

const steps = [
  {
    step: "1",
    icon: PhoneCall,
    title: "Call or Book Online",
    desc: "Call us, WhatsApp, or fill the form. Tell us your machine's brand and the issue.",
  },
  {
    step: "2",
    icon: UserCheck,
    title: "Technician Arrives",
    desc: "Our technician reaches your doorstep, usually the same day. Site visit charge of ₹150 applies.",
  },
  {
    step: "3",
    icon: Search,
    title: "Diagnosis & Quote",
    desc: "We diagnose the problem and give you a quote before starting the repair.",
  },
  {
    step: "4",
    icon: CheckCircle,
    title: "Fixed & Guaranteed",
    desc: "Repair done and tested in front of you, with a warranty on the fix.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-20 px-4 border-t border-slate-200">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
            How It Works
          </h2>
          <p className="text-slate-600 text-base max-w-xl">
            What happens from booking to a working machine.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="flex flex-col">
                <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center mb-3">
                  <Icon className="w-4 h-4 text-indigo-600" />
                </div>
                <span className="text-slate-400 font-bold text-xs mb-1">
                  STEP {s.step}
                </span>
                <h3 className="text-slate-900 font-bold text-base mb-1.5">{s.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
