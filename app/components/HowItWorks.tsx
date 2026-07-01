import { PhoneCall, UserCheck, Search, CheckCircle } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: PhoneCall,
    title: "Call or Book Online",
    desc: "Call us, WhatsApp, or fill the form. Tell us your machine's brand and the issue — takes under 2 minutes.",
  },
  {
    step: "02",
    icon: UserCheck,
    title: "Technician Arrives",
    desc: "Our certified technician reaches your doorstep — usually the same day. No extra travel charges in Pune.",
  },
  {
    step: "03",
    icon: Search,
    title: "Diagnosis & Quote",
    desc: "We diagnose the problem and give you a transparent quote before touching anything. No surprises.",
  },
  {
    step: "04",
    icon: CheckCircle,
    title: "Fixed & Guaranteed",
    desc: "Repair done with genuine parts. We test it in front of you and give you a warranty on the fix.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-slate-900 py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-indigo-400 font-bold text-sm tracking-widest uppercase">
            The Process
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2 mb-4">
            How It Works
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Getting your washing machine repaired is simple. Here&apos;s what
            happens from booking to a working machine.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-indigo-500/0 via-indigo-500/50 to-indigo-500/0" />

          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="relative flex flex-col items-center text-center">
                {/* Step icon circle */}
                <div className="w-16 h-16 rounded-full bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-2xl mb-4 relative z-10">
                  <Icon className="w-6 h-6 text-indigo-400" />
                </div>
                <span className="text-indigo-400 font-black text-xs tracking-widest mb-2">
                  STEP {s.step}
                </span>
                <h3 className="text-white font-bold text-base mb-2">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
