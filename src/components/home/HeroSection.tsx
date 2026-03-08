import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "Webs en 10", label: "días de entrega" },
  { value: "$250K", label: "desde" },
  { value: "100%", label: "asistido" },
  { value: "1 año", label: "dominio incluido" },
];

const DeviceMockup = () => (
  <div className="relative flex items-center justify-center gap-4 sm:gap-8 py-8 select-none px-4">
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="w-60 sm:w-80 h-32 sm:h-40 bg-red-600/10 dark:bg-red-600/15 rounded-full blur-3xl" />
    </div>

    {/* Monitor */}
    <div className="relative z-10 drop-shadow-2xl shrink-0" style={{ width: 'min(256px, 60vw)' }}>
      <div className="bg-gray-900 rounded-xl border-[3px] border-gray-700 overflow-hidden">
        <div className="bg-gray-800 px-3 py-2 flex items-center gap-2">
          <div className="flex gap-1 shrink-0">
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <div className="w-2 h-2 rounded-full bg-yellow-400" />
            <div className="w-2 h-2 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 bg-gray-700 rounded px-2 py-1 flex items-center gap-1.5 min-w-0">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />
            <div className="h-1.5 w-full bg-gray-600 rounded-full" />
          </div>
        </div>
        <div className="bg-gray-950 p-3 space-y-3 h-36 sm:h-44">
          <div className="flex justify-between items-center">
            <div className="h-2 w-10 bg-red-600 rounded-full" />
            <div className="flex gap-1.5">
              {[0,1,2].map(i => <div key={i} className="h-1.5 w-6 bg-gray-700 rounded-full" />)}
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-2.5 w-4/5 bg-white/80 rounded-full" />
            <div className="h-1.5 w-3/5 bg-white/30 rounded-full" />
            <div className="h-5 w-14 bg-red-600 rounded-lg mt-2" />
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            {[0,1,2].map(i => (
              <div key={i} className="bg-gray-800 rounded-lg p-1.5 space-y-1">
                <div className="h-6 bg-gray-700 rounded-md" />
                <div className="h-1.5 bg-gray-600 rounded-full w-3/4" />
                <div className="h-1.5 bg-gray-700 rounded-full w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Pie del monitor */}
      <div className="flex flex-col items-center">
        <div className="w-16 h-3 bg-gray-700 rounded-b-md" />
        <div className="w-24 h-1.5 bg-gray-600 rounded-full" />
      </div>
    </div>

    {/* Celular */}
    <div className="relative z-20 drop-shadow-2xl shrink-0" style={{ width: 'min(112px, 26vw)' }}>
      <div className="bg-gray-900 rounded-1.5rem border-[3px] border-gray-700 overflow-hidden">
        {/* Dynamic island */}
        <div className="bg-gray-950 flex justify-center pt-2 pb-1">
          <div className="w-10 h-2 bg-gray-800 rounded-full" />
        </div>
        {/* Contenido */}
        <div className="bg-gray-950 px-2 pb-10 space-y-2 relative h-36 sm:h-44">
          <div className="flex justify-between items-center py-1">
            <div className="h-1.5 w-7 bg-red-600 rounded-full" />
            <div className="flex flex-col gap-0.5">
              {[0,1,2].map(i => <div key={i} className="h-0.5 w-3.5 bg-gray-600 rounded-full" />)}
            </div>
          </div>
          <div className="space-y-1">
            <div className="h-2 w-full bg-white/70 rounded-full" />
            <div className="h-2 w-4/5 bg-white/50 rounded-full" />
            <div className="h-1.5 w-3/5 bg-white/20 rounded-full" />
            <div className="h-4 w-12 bg-red-600 rounded-lg mt-2" />
          </div>
          <div className="space-y-1.5">
            {[0,1].map(i => (
              <div key={i} className="bg-gray-800 rounded-lg p-1.5 flex gap-1.5 items-center">
                <div className="w-4 h-4 rounded-md bg-gray-700 shrink-0" />
                <div className="space-y-1 flex-1 min-w-0">
                  <div className="h-1.5 bg-gray-600 rounded-full w-3/4" />
                  <div className="h-1.5 bg-gray-700 rounded-full w-1/2" />
                </div>
              </div>
            ))}
          </div>
          {/* Bottom nav */}
          <div className="absolute bottom-2 left-2 right-2 bg-gray-800 rounded-2xl p-1.5 flex justify-around items-center">
            {[0,1,2,3].map(i => (
              <div key={i} className={`w-3.5 h-3.5 rounded-md ${i === 0 ? 'bg-red-600' : 'bg-gray-600'}`} />
            ))}
          </div>
        </div>
        {/* Home indicator */}
        <div className="bg-gray-950 flex justify-center py-2">
          <div className="w-10 h-1 bg-gray-700 rounded-full" />
        </div>
      </div>
    </div>
  </div>
);

export const HeroSection = () => (
  <div className="space-y-16 pt-14">

    <div className="text-center space-y-6">
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight dark:text-zinc-100">
        Sitios web y sistemas <br />
      </h1>
      <h2 className="text-2xl md:text-5xl font-semibold tracking-tight dark:text-zinc-300">
        <span className="text-red-600 italic">que hacen crecer tu negocio.</span>
      </h2>

      <p className="text-gray-600 dark:text-zinc-400 max-w-xl mx-auto text-xl leading-relaxed">
        Diseño moderno y profesional, dominio, hosting.
      </p>
        <DeviceMockup />
      <div className="flex flex-wrap justify-center gap-4 pt-2">
        <Link
          to="/contacto"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-red-600 text-white font-bold hover:bg-red-700 dark:hover:bg-red-500 transition-all shadow-xl shadow-red-600/20"
        >
          Solicitar web
          <ArrowRight size={16} />
        </Link>
        <Link
          to="/servicios"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-gray-300 dark:border-zinc-700 text-gray-700 dark:text-zinc-300 font-semibold hover:border-red-600 hover:text-red-600 dark:hover:border-red-500 dark:hover:text-red-500 transition-all"
        >
          Ver qué incluye
        </Link>
      </div>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto">
      {stats.map((s) => (
        <div key={s.label} className="text-center space-y-0.5">
          <div className="text-2xl font-extrabold text-red-600">{s.value}</div>
          <div className="text-xs text-gray-500 dark:text-zinc-500 uppercase tracking-wider">{s.label}</div>
        </div>
      ))}
    </div>


  </div>
);