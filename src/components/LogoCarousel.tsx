
const EMPRESAS = [
  // { nombre: "Muebles Finochio", url: "https://oscar-principi.github.io/Muebles-Finochio/" },
  { nombre: "Bohemio", url: "https://oscar-principi.github.io/bohemio-mates/#/" },
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
                className="group flex flex-col text-left transition-all duration-300 transform hover:scale-110"
              >
                {empresa.nombre.split(" ").map((palabra, i) => (
                  <span 
                    key={i}
                    className={`
                      text-2xl md:text-4xl font-extrabold tracking-tighter leading-[0.8]
                      text-zinc-300 dark:text-zinc-800 
                      group-hover:text-red-600 transition-colors duration-300
                    `}
                  >
                    {palabra}
                  </span>
                ))}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};