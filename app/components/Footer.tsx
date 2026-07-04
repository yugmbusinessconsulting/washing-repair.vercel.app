import { WashingMachine, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <WashingMachine className="w-8 h-8 text-indigo-500" />
              <div>
                <span className="font-black text-xl text-white block">
                  Home Appliances Repair
                </span>
                <span className="text-xs text-indigo-400 tracking-widest uppercase">
                  Repair Experts
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              Fast, reliable, and affordable washing machine repair at your
              doorstep in Kopar Khairane, Navi Mumbai. All major brands, genuine spare parts, same-day
              service.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Home", "Services", "About", "Contact Us"].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase().replace(" ", "")}`}
                    className="text-sm hover:text-indigo-400 transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                <span>Kopar Khairane, Navi Mumbai</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                <a href="tel:+916388239273" className="hover:text-indigo-400 transition-colors">
                  6388 239 273
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:homeappliancesrepair913@gmail.com"
                  className="hover:text-indigo-400 transition-colors"
                >
                  homeappliancesrepair913@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <p className="text-xs leading-relaxed max-w-3xl">
            Home Appliances Repair is an independent washing machine repair
            service provider. We are not affiliated with, authorised by,
            endorsed by, or associated with LG, Samsung, Whirlpool, IFB,
            Bosch, Siemens, Haier, Panasonic, Godrej, or any other appliance
            brand or manufacturer. Brand names are mentioned only to indicate
            the models we repair.
          </p>
        </div>

        <div className="border-t border-slate-800 mt-6 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2026 Home Appliances Repair. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-indigo-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-indigo-400 transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
