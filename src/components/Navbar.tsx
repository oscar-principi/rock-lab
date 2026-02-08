import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("theme") === "dark" ||
        (!localStorage.getItem("theme") &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return false;
  });

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efecto para detectar el scroll y cerrar el menú
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      
      // NUEVO: Si el usuario scrollea y el menú está abierto, lo cerramos
      if (window.scrollY > 10) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Quitamos isOpen de las dependencias para evitar loops innecesarios

  // Efecto para el Dark Mode
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const ThemeToggle = () => (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="relative p-2 rounded-lg bg-gray-100 dark:bg-zinc-800 hover:ring-2 ring-red-500 transition-all duration-300 overflow-hidden"
      aria-label="Toggle Dark Mode"
    >
      <div className="relative w-6 h-6">
        <svg
          className={`absolute inset-0 transition-all duration-500 transform ${
            darkMode ? "translate-y-0 opacity-100 rotate-0" : "translate-y-10 opacity-0 rotate-45"
          } text-yellow-500`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707" />
          <circle cx="12" cy="12" r="4" />
        </svg>

        <svg
          className={`absolute inset-0 transition-all duration-500 transform ${
            !darkMode ? "translate-y-0 opacity-100 rotate-0" : "-translate-y-10 opacity-0 -rotate-45"
          } text-zinc-600`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      </div>
    </button>
  );

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b py-4 ${
        scrolled 
          ? "bg-white/70 dark:bg-zinc-950/70 backdrop-blur-md border-gray-200/50 dark:border-zinc-800/50 shadow-sm" 
          : "bg-white dark:bg-zinc-950 border-gray-200 dark:border-zinc-800"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6">
        
        <Link to="/" className="flex flex-col leading-none group items-center">
          <div className="text-3xl md:text-4xl font-black tracking-tighter">
            <span className="text-red-600">Rock</span>
            <span className="text-black dark:text-zinc-100">Lab</span>
          </div>
          <span className="text-[10px] md:text-s uppercase tracking-[0.2em] font-bold text-gray-500 dark:text-zinc-500 mt-1 transition-colors group-hover:text-red-600">
            desarrollo de Software
          </span>
        </Link>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg bg-gray-100 dark:bg-zinc-800 hover:ring-2 ring-red-500 transition-all"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6 text-gray-700 dark:text-zinc-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <nav className="flex gap-6 text-sm font-medium">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/contacto">Contacto</NavLink>
          </nav>
          <ThemeToggle />
        </div>
      </div>

      {/* Overlay mobile */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setIsOpen(false)}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </div>

      {/* Sidebar mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-zinc-950 shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-6 p-6 text-sm font-medium">
          <div className="border-b dark:border-zinc-800 pb-4 mb-2">
              <span className="text-xs uppercase text-zinc-500 tracking-widest font-bold">Navegación</span>
          </div>
          <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/contacto" onClick={() => setIsOpen(false)}>Contacto</NavLink>
        </nav>
      </div>
    </header>
  );
}

function NavLink({ children, to, onClick }: { children: React.ReactNode; to: string; onClick?: () => void }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="text-gray-700 dark:text-zinc-400 hover:text-red-600 dark:hover:text-red-500 transition text-lg md:text-sm font-semibold md:font-medium"
    >
      {children}
    </Link>
  );
}