
const EMPRESAS = [
  {
    nombre: "Bohemio",
    url: "https://oscar-principi.github.io/bohemio-mates/#/",
    logo: "/images/empresas/bohemio_logo_transparent.png",
  },
  {
    nombre: "Nexos",
    url: "https://oscar-principi.github.io/nexos-espacio-terapeutico/#/",
    logo: "/images/empresas/logo-completo.jpg",
  },
];

export const LogoCarousel = () => {
  return (
    <div className="py-20 w-full bg-transparent overflow-hidden transition-colors duration-300">
      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-infinite {
          display: flex;
          width: max-content;
          animation: marquee-scroll 40s linear infinite;
        }
        .animate-marquee-infinite:hover {
          animation-play-state: paused;
        }
      `}</style>

      <p className="text-center text-zinc-500 dark:text-zinc-500 text-xs font-bold mb-12 uppercase tracking-[0.3em] select-none">
        Empresas que confían en nosotros
      </p>
      
      <div className="relative flex items-center">
        {/* EXTREMOS CON DEGRADADO: Ajustados para transiciones suaves
        <div className="absolute left-0 z-10 w-24 md:w-48 h-full bg-linear-to-r from-white via-white/80 dark:from-zinc-950 dark:via-zinc-950/80 to-transparent pointer-events-none transition-colors duration-300" />
        <div className="absolute right-0 z-10 w-24 md:w-48 h-full bg-linear-to-l from-white via-white/80 dark:from-zinc-950 dark:via-zinc-950/80 to-transparent pointer-events-none transition-colors duration-300" /> */}

        <div className="animate-marquee-infinite">
          {[...EMPRESAS, ...EMPRESAS, ...EMPRESAS, ...EMPRESAS, ...EMPRESAS, ...EMPRESAS].map((empresa, index) => (
            <div 
              key={index} 
              className="mx-10 md:mx-20 shrink-0 flex items-center justify-center"
            >
              <a
                href={empresa.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <img
                  src={empresa.logo}
                  alt={empresa.nombre}
                  className="
                    h-12 md:h-18 w-auto object-contain
                    grayscale opacity-80 brightness-90
                    dark:opacity-70 dark:brightness-125 dark:contrast-110
                    transition-all duration-300
                    group-hover:grayscale-0 group-hover:opacity-100 group-hover:brightness-100 group-hover:contrast-100
                  "
                  loading="lazy"
                  decoding="async"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
