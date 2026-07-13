import { MapPin } from "lucide-react";

const areas = [
  "Kopar Khairane",
  "Vashi",
  "Ghansoli",
  "Kharghar",
  "CBD Belapur",
  "Nerul",
  "Sanpada",
  "Panvel",
  "Kamothe",
  "Ulwe",
  "Airoli",
];

export default function AreasWeServe() {
  return (
    <section className="bg-slate-50 py-20 px-4 border-t border-slate-200">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
            Areas We Serve
          </h2>
          <p className="text-slate-600 text-base max-w-xl">
            Doorstep washing machine repair across Navi Mumbai, based out of
            Kopar Khairane.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {areas.map((area) => (
            <span
              key={area}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-full px-4 py-2"
            >
              <MapPin className="w-3.5 h-3.5 text-indigo-600" />
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
