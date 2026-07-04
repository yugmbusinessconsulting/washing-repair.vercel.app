import { Home, Phone, ArrowRight, Sparkles, Check, Wrench } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950"
    >
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-3xl animate-pulse" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-32 grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Text */}
        <div>
          <h1 className="text-4xl md:text-5xl font-black text-white leading-[1.15] mb-6">
            Your Washing Machine{" "}
            <span className="text-indigo-400 font-extrabold">Fixed Today.</span>
          </h1>

          <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-lg">
            Professional washing machine repair at your doorstep. All major
            brands — LG, Samsung, Whirlpool, IFB, Bosch and more. Same-day
            service with genuine spare parts.
          </p>

          {/* Stats row */}
          <div className="flex gap-10 mb-10 border-t border-b border-slate-800/80 py-6 max-w-lg">
            {[
              { num: "₹150", label: "Visiting Charge" },
              { num: "Same Day", label: "Doorstep Visit" },
              { num: "Genuine", label: "Spare Parts" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-black text-white">{s.num}</p>
                <p className="text-xs text-slate-400 font-bold mt-1 uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-8 py-4 rounded-full text-base transition-all hover:scale-105 shadow-2xl shadow-indigo-600/40"
            >
              Book a Repair <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+919987525875"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-8 py-4 rounded-full text-base transition-all backdrop-blur-sm"
            >
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </div>

          {/* Trust rating badge */}
          <p className="text-xs text-slate-400 font-medium mt-6 flex items-center gap-2">
            <span className="text-amber-400 text-sm">★★★★★</span>
            <span>4.9/5 Rating based on 500+ verified Navi Mumbai reviews</span>
          </p>
        </div>

        {/* Right: Realistic Front-load Washing Machine Mockup */}
        <div className="flex justify-center items-center">
          <div className="relative">
            {/* Ambient background glows */}
            <div className="absolute -inset-10 rounded-full bg-indigo-600/20 blur-3xl opacity-60 animate-pulse pointer-events-none" />
            <div className="absolute -inset-20 rounded-full bg-blue-600/10 blur-3xl opacity-30 animate-pulse delay-700 pointer-events-none" />

            {/* Premium Washer Body */}
            <div className="relative w-80 h-[380px] md:w-96 md:h-[450px] bg-gradient-to-b from-slate-800 to-slate-900 rounded-3xl border-2 border-slate-700 shadow-2xl p-6 flex flex-col justify-between overflow-hidden">
              
              {/* Soap Drawer and Top Divider Line */}
              <div className="absolute top-20 left-0 right-0 h-[2px] bg-slate-750/70" />

              {/* Control Panel Header */}
              <div className="flex justify-between items-start mb-4 relative z-10">
                {/* Brand & Detergent Drawer */}
                <div className="flex flex-col gap-1.5">
                  <span className="text-[9px] text-slate-400 font-extrabold uppercase tracking-widest">CITY SERVICE</span>
                  <div className="w-24 h-5 bg-gradient-to-r from-slate-850 to-slate-900 rounded border border-slate-750/80 shadow-inner relative flex items-center px-1.5">
                    {/* Handle Slot */}
                    <div className="w-6 h-1 bg-slate-950 rounded-sm absolute right-2" />
                  </div>
                </div>

                {/* Digital Display & Selector Dial */}
                <div className="flex gap-4 items-center">
                  {/* Glowing Time Counter */}
                  <div className="bg-slate-950 border border-slate-850 px-3 py-1.5 rounded-lg flex flex-col items-center justify-center font-mono text-indigo-450 shadow-inner">
                    <span className="text-xs font-bold tracking-widest text-indigo-400 animate-pulse">00:30</span>
                    <span className="text-[7px] text-indigo-500/80 uppercase font-sans font-black">Fix Mode</span>
                  </div>
                  
                  {/* Selector Dial with glowing LED dots */}
                  <div className="relative flex items-center justify-center">
                    {/* Dial Ring */}
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800 border-2 border-slate-500 shadow-lg flex items-center justify-center relative z-10">
                      <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1 h-2.5 bg-indigo-400 rounded-full" />
                      <div className="w-4 h-4 rounded-full bg-slate-900 shadow-inner" />
                    </div>
                    {/* Mode LEDs around dial */}
                    <div className="absolute w-12 h-12 flex items-center justify-between">
                      <span className="w-1 h-1 rounded-full bg-indigo-500/80 animate-pulse absolute -top-1 left-1/2 -translate-x-1/2" />
                      <span className="w-1 h-1 rounded-full bg-emerald-500/80 absolute top-1.5 right-0.5" />
                      <span className="w-1 h-1 rounded-full bg-indigo-500/30 absolute bottom-1.5 right-0.5" />
                      <span className="w-1 h-1 rounded-full bg-indigo-500/30 absolute bottom-1.5 left-0.5" />
                      <span className="w-1 h-1 rounded-full bg-indigo-500/30 absolute top-1.5 left-0.5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Porthole Door (Centerpiece) */}
              <div className="flex-1 flex items-center justify-center py-4 relative z-10">
                {/* Shiny Chrome Outer Frame */}
                <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-tr from-slate-500 via-slate-200 to-slate-400 border border-slate-400 p-3.5 shadow-xl flex items-center justify-center">
                  
                  {/* Dark Chrome Inner Frame */}
                  <div className="w-full h-full rounded-full bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-950 border border-slate-750 p-2 shadow-inner flex items-center justify-center relative overflow-hidden">
                    
                    {/* Glass Window Tint & Reflection */}
                    <div className="absolute inset-0 rounded-full bg-indigo-950/20 backdrop-blur-[0.5px] z-10 pointer-events-none" />
                    {/* Diagonal Glare Highlights */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/5 to-white/15 z-20 pointer-events-none" />
                    <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-br from-transparent via-white/5 to-transparent rotate-45 z-20 pointer-events-none transform translate-y-1/4" />
                    
                    {/* Inside Swirling Drum */}
                    <div className="w-full h-full rounded-full bg-gradient-to-b from-slate-800 to-slate-950 border border-slate-850 flex items-center justify-center relative overflow-hidden">
                      {/* Steel Lines */}
                      <div className="absolute inset-2 rounded-full border border-dashed border-slate-700/60 animate-[spin_25s_linear_infinite]" />
                      
                      {/* Active swirl ring */}
                      <div className="absolute inset-4 rounded-full border-2 border-dashed border-indigo-500/20 animate-[spin_10s_linear_infinite]" />
                      
                      {/* Bubble effects */}
                      <div className="absolute top-1/4 left-1/3 w-2.5 h-2.5 rounded-full bg-white/20 blur-[0.5px] animate-bounce" />
                      <div className="absolute bottom-1/3 right-1/4 w-3.5 h-3.5 rounded-full bg-white/15 blur-[0.5px] animate-pulse" />
                      <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 rounded-full bg-white/25 blur-[0.5px]" />
                      <div className="absolute top-1/3 right-1/3 w-2 h-2 rounded-full bg-white/10 blur-[0.5px] animate-ping" />
                      
                      {/* Clean spark */}
                      <div className="relative z-10 flex flex-col items-center">
                        <Sparkles className="w-6 h-6 text-indigo-400 animate-pulse" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom kickplate indicator */}
              <div className="flex justify-between items-center text-[10px] text-slate-500 font-bold border-t border-slate-800/80 pt-4">
                <span className="uppercase tracking-wider">Inverter Direct Drive 9.0 kg</span>
                <div className="w-6 h-4 bg-slate-950/40 rounded border border-slate-800 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-sm bg-emerald-500" />
                </div>
              </div>
            </div>

            {/* Floating Glassmorphic Badges */}
            <div className="absolute -left-6 top-1/4 bg-slate-900/85 backdrop-blur-md text-white text-xs font-bold px-4 py-2.5 rounded-2xl shadow-xl border border-white/10 flex items-center gap-2 transform -rotate-6">
              <Check className="w-4 h-4 text-emerald-400" />
              <div>
                <p className="text-[9px] text-slate-400 block leading-tight font-bold uppercase">Service</p>
                <p className="text-xs font-extrabold leading-tight">Same Day</p>
              </div>
            </div>

            <div className="absolute -right-6 bottom-1/4 bg-slate-900/85 backdrop-blur-md text-white text-xs font-bold px-4 py-2.5 rounded-2xl shadow-xl border border-white/10 flex items-center gap-2 transform rotate-6">
              <Wrench className="w-4 h-4 text-indigo-400" />
              <div>
                <p className="text-[9px] text-slate-400 block leading-tight font-bold uppercase">Warranty</p>
                <p className="text-xs font-extrabold leading-tight">Genuine Parts</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 60L48 50C96 40 192 20 288 16.7C384 13.3 480 26.7 576 30C672 33.3 768 26.7 864 23.3C960 20 1056 20 1152 23.3C1248 26.7 1344 33.3 1392 36.7L1440 40V60H0Z"
            fill="#f8fafc"
          />
        </svg>
      </div>
    </section>
  );
}
