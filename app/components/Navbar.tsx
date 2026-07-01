"use client";
import { useState, useEffect } from "react";
import { WashingMachine, PhoneCall } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-350 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-slate-200/40 shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <WashingMachine className={`w-7 h-7 transition-transform group-hover:rotate-12 ${scrolled ? "text-indigo-600" : "text-white"}`} />
          <div className="leading-tight">
            <span
              className={`font-black text-xl tracking-tight block transition-colors ${
                scrolled ? "text-slate-900" : "text-white"
              }`}
            >
              City Appliance
            </span>
            <span
              className={`text-xs tracking-widest uppercase font-bold transition-colors ${
                scrolled ? "text-indigo-600" : "text-indigo-300"
              }`}
            >
              Repair Experts
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`text-sm font-bold transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-indigo-500 after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left hover:text-indigo-500 ${
                scrolled ? "text-slate-700" : "text-white/90"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href="tel:+919987525875"
            className={`text-sm font-extrabold flex items-center gap-1.5 transition-colors hover:text-indigo-500 ${
              scrolled ? "text-slate-700" : "text-white/95"
            }`}
          >
            <PhoneCall className="w-4 h-4 text-indigo-500" /> 9987525875
          </a>
          <a
            href="#contact"
            className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-extrabold px-6 py-3 rounded-full transition-all hover:scale-105 shadow-lg shadow-indigo-600/25"
          >
            Book Service
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden text-2xl p-1 transition-colors ${scrolled ? "text-slate-800" : "text-white"}`}
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-b border-slate-200 shadow-xl px-6 py-6 flex flex-col gap-4">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-slate-800 font-extrabold text-base border-b border-slate-100 pb-3 hover:text-indigo-600 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="bg-indigo-600 hover:bg-indigo-500 text-white text-center font-extrabold py-3.5 rounded-full mt-2 transition-colors shadow-lg shadow-indigo-600/25"
          >
            Book Service
          </a>
        </div>
      )}
    </header>
  );
}
