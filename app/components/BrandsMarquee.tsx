import React from "react";

const brandData = [
  {
    name: "LG",
    color: "text-[#a50034]",
    logo: (
      <div className="flex items-center gap-1.5">
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="9.5" cy="9.5" r="1" fill="currentColor" />
          <path d="M 12 7 L 12 12 L 15 12" />
          <path d="M 8 15 A 4.5 4.5 0 0 0 16 15" />
        </svg>
        <span className="font-black text-base tracking-tighter">LG</span>
      </div>
    )
  },
  {
    name: "Samsung",
    color: "text-[#0c4da2]",
    logo: (
      <span className="font-black tracking-widest text-base">SΛMSUNG</span>
    )
  },
  {
    name: "Whirlpool",
    color: "text-[#f2a900]",
    logo: (
      <div className="flex items-center gap-1">
        <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current fill-none" strokeWidth="2">
          <circle cx="12" cy="12" r="8" />
          <path d="M 8 12 A 4 4 0 0 1 16 12" />
          <path d="M 16 12 A 4 4 0 0 1 8 12" />
        </svg>
        <span className="font-serif italic font-extrabold text-base tracking-tighter">Whirlpool</span>
      </div>
    )
  },
  {
    name: "Bosch",
    color: "text-[#e2001a]",
    logo: (
      <div className="flex items-center gap-1.5">
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="12" cy="12" r="4.5" />
          <rect x="11" y="2" width="2" height="3" />
          <rect x="11" y="19" width="2" height="3" />
        </svg>
        <span className="font-black text-xs tracking-wider">BOSCH</span>
      </div>
    )
  },
  {
    name: "IFB",
    color: "text-[#e31b23]",
    logo: (
      <span className="font-black italic text-lg tracking-tight">IFB</span>
    )
  },
  {
    name: "Siemens",
    color: "text-[#005f6a]",
    logo: (
      <span className="font-bold tracking-wider text-base">SIEMENS</span>
    )
  },
  {
    name: "Haier",
    color: "text-[#005ea6]",
    logo: (
      <span className="font-black tracking-tight text-lg">Haier</span>
    )
  },
  {
    name: "Panasonic",
    color: "text-[#0f2c59]",
    logo: (
      <span className="font-extrabold tracking-tight text-sm uppercase">Panasonic</span>
    )
  },
  {
    name: "Godrej",
    color: "text-[#e21a22]",
    logo: (
      <span className="font-semibold italic text-lg font-serif">Godrej</span>
    )
  }
];

export default function BrandsMarquee() {
  return (
    <section className="bg-white py-12 border-y border-slate-200/80 overflow-hidden">
      <p className="text-center text-xs font-bold tracking-widest text-slate-400 uppercase mb-8">
        We service all major brands
      </p>
      <div className="relative flex overflow-hidden">
        {/* Gradient overlays to fade edges */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee whitespace-nowrap gap-16 items-center">
          {[...brandData, ...brandData, ...brandData].map((brand, i) => (
            <div
              key={i}
              className={`inline-flex items-center ${brand.color} transition-all duration-300 transform hover:scale-105 cursor-pointer`}
            >
              {brand.logo}
            </div>
          ))}
        </div>
      </div>

      <p className="text-center text-xs text-slate-400 mt-8 max-w-xl mx-auto px-4">
        Brand names are used only to indicate the models we service. We are an
        independent repair provider and are not affiliated with these brands.
      </p>
    </section>
  );
}
