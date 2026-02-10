import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 transition-colors duration-300">
      
      {/* Hero Section */}
      <div className="text-center space-y-8 py-10">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight dark:text-zinc-100">
          Software a medida para <br />
          <span className="text-red-600 dark:text-red-600 italic">entornos web y desktop.</span>
        </h1>

        <p className="text-gray-600 dark:text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Diseño, desarrollo y mantenimiento de sistemas que potencian la productividad de tu marca.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
        <Link
          to="/contacto"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-red-600 text-white font-bold hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-500 transition-all shadow-xl shadow-red-600/20"
        >
          Hablemos de tu idea
          <ArrowRight size={16} />
        </Link>
        </div>
      </div>

      {/* Grid de Servicios enfocados en Web/Desktop */}
      <div className="grid md:grid-cols-2 gap-8 mt-0">
        <Feature 
          title="Software Web" 
          desc="Sitios y aplicaciones web para mostrar tu marca y automatizar procesos."
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          }
        />
        <Feature 
          title="Software Desktop" 
          desc="Aplicaciones de escritorios para gestión y automatización de procesos."
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
          }
        />
      </div>

      <div className="mt-32 border-t border-zinc-200 dark:border-zinc-800 pt-10 text-center">
        <p className="text-zinc-500 dark:text-zinc-500 font-mono text-sm uppercase tracking-widest">
          Stack principal: React • TypeScript • .NET Core • C# • SQL Server • Azure
        </p>
      </div>

    </section>
  );
}

function Feature({ title, desc, icon }: { title: string; desc: string; icon: React.ReactNode }) {
  return (
    <div className="group p-8 rounded-3xl border border-gray-200 bg-white/50 backdrop-blur-sm hover:shadow-2xl hover:border-red-600/20 transition-all duration-500 dark:bg-zinc-900/40 dark:border-zinc-800">
      {/* Contenedor Flex para Icono + Título */}
      <div className="flex items-center gap-4 mb-4">
        <div className="p-2.5 bg-red-600 text-white rounded-xl shadow-lg shadow-red-600/30 group-hover:rotate-6 transition-transform shrink-0">
          {icon}
        </div>
        <h3 className="font-bold text-2xl dark:text-zinc-100">{title}</h3>
      </div>
      
      <p className="text-gray-600 dark:text-zinc-400 text-md leading-relaxed">
        {desc}
      </p>
    </div>
  );
}