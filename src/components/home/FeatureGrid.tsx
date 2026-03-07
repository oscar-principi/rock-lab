const webIncludes = [
  "Diseño personalizado acorde a tu marca.",
  "Dominio + hosting el primer año.",
  "Versión mobile optimizada.",
  "Entrega hasta 10 días hábiles.",
];

const systemIncludes = [
  "Relevamiento y análisis de procesos.",
  "Desarrollo a medida según tus necesidades.",
  "Administración propia.",
  "Precio según complejidad del proyecto.",
];

const WebIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

const SystemIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
    <line x1="8" y1="21" x2="16" y2="21"/>
    <line x1="12" y1="17" x2="12" y2="21"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-red-600 shrink-0 mt-0.5">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const FeatureGrid = () => (
  <div className="grid md:grid-cols-2 gap-8">

    {/* Sitios Web */}
    <div className="group flex flex-col p-8 rounded-3xl border border-gray-200 bg-white/50 backdrop-blur-sm hover:shadow-2xl hover:border-red-600/20 transition-all duration-500 dark:bg-zinc-900/40 dark:border-zinc-800 space-y-6">
      
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="p-2.5 bg-red-600 text-white rounded-xl shadow-lg shadow-red-600/30 group-hover:rotate-6 transition-transform shrink-0">
          <WebIcon />
        </div>
        <div>
          <h3 className="font-bold text-2xl dark:text-zinc-100">Sitios Web</h3>
          <p className="text-sm text-gray-500 dark:text-zinc-500 font-medium">Presencia digital profesional</p>
        </div>
      </div>

      {/* Precio destacado */}
      <div className="flex items-end gap-2 px-4 py-3 rounded-2xl bg-red-600/5 dark:bg-red-600/10 border border-red-600/15">
        <span className="text-3xl font-extrabold text-red-600">$250.000</span>
        <span className="text-gray-500 dark:text-zinc-500 text-sm mb-1">pesos · final</span>
      </div>

      {/* Descripción */}
      <p className="text-gray-600 dark:text-zinc-400 leading-relaxed">
        Ideal para empresas, comercios o profesionales que necesitan una presencia digital sólida, rápida y sin complicaciones.
      </p>

      {/* Qué incluye */}
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-zinc-600">Qué incluye</p>
        <ul className="space-y-2.5">
          {webIncludes.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-zinc-300">
              <CheckIcon />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Sistemas a Medida */}
    <div className="group flex flex-col p-8 rounded-3xl border border-gray-200 bg-white/50 backdrop-blur-sm hover:shadow-2xl hover:border-red-600/20 transition-all duration-500 dark:bg-zinc-900/40 dark:border-zinc-800 space-y-6">

      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="p-2.5 bg-red-600 text-white rounded-xl shadow-lg shadow-red-600/30 group-hover:rotate-6 transition-transform shrink-0">
          <SystemIcon />
        </div>
        <div>
          <h3 className="font-bold text-2xl dark:text-zinc-100">Sistemas a Medida</h3>
          <p className="text-sm text-gray-500 dark:text-zinc-500 font-medium">Software para tu negocio</p>
        </div>
      </div>

      {/* Precio */}
      <div className="flex items-end gap-2 px-4 py-3 rounded-2xl bg-gray-100/80 dark:bg-zinc-800/60 border border-gray-200 dark:border-zinc-700">
        <span className="text-3xl font-extrabold text-gray-800 dark:text-zinc-100">A consultar</span>
        <span className="text-gray-500 dark:text-zinc-500 text-sm mb-1">según el proyecto</span>
      </div>

      {/* Descripción */}
      <p className="text-gray-600 dark:text-zinc-400 leading-relaxed">
        Software personalizado para gestionar stocks, turnos, facturación, clientes o lo que tu negocio necesite automatizar.
      </p>

      {/* Qué incluye */}
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-zinc-600">Qué incluye</p>
        <ul className="space-y-2.5">
          {systemIncludes.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-zinc-300">
              <CheckIcon />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>

  </div>
);