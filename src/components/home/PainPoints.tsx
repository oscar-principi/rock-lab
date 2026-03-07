const problems = [
  { problem: "Mis clientes no me encuentran en internet", solution: "Sitio Web", web: true },
  { problem: "Solo tengo WhatsApp y un perfil de Instagram", solution: "Sitio Web", web: true },
  { problem: "Mi negocio no se ve profesional frente a la competencia", solution: "Sitio Web", web: true },
  { problem: "Anoto todo en papel o en una planilla de Excel", solution: "Sistema a Medida", web: false },
  { problem: "Pierdo horas haciendo tareas repetitivas a mano", solution: "Sistema a Medida", web: false },
  { problem: "No sé cuánto stock tengo sin revisar físicamente", solution: "Sistema a Medida", web: false },
];

export const PainPoints = () => (
  <div className="space-y-6">

    <div className="space-y-1">
      <h2 className="text-3xl md:text-4xl font-extrabold dark:text-zinc-100">
        ¿Cuál es tu problema?
      </h2>
      <p className="text-gray-500 dark:text-zinc-500 text-base">
        Identificate y descubrí qué necesitás.
      </p>
    </div>

    <div className="divide-y divide-gray-100 dark:divide-zinc-800">
      {problems.map((p) => (
        <div
          key={p.problem}
          className="flex items-center justify-between gap-6 py-4 group"
        >
          <p className="text-gray-700 dark:text-zinc-300 text-sm md:text-base leading-snug group-hover:text-gray-900 dark:group-hover:text-zinc-100 transition-colors">
            "{p.problem}"
          </p>
          <span className={`shrink-0 text-xs font-semibold ${
            p.web ? "text-red-600" : "text-gray-400 dark:text-zinc-500"
          }`}>
            {p.solution}
          </span>
        </div>
      ))}
    </div>

  </div>
);