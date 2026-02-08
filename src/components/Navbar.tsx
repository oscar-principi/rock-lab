import { Link } from "react-router-dom";
import { useState, useEffect, useRef, type ReactNode } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
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
  const lastScrollY = useRef(0);

  // Manejo de scroll para transparencia y auto-cierre
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 10);

      if (isOpen) {
        if (Math.abs(currentScrollY - lastScrollY.current) > 2) {
          setIsOpen(false);
        }
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  // Lógica de Dark Mode
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

  return (
    <>
      {/* HEADER PRINCIPAL */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b py-4 ${
          scrolled
            ? "bg-white/70 dark:bg-zinc-950/70 backdrop-blur-md border-gray-200/50 dark:border-zinc-800/50 shadow-sm"
            : "bg-white dark:bg-zinc-950 border-gray-200 dark:border-zinc-800"
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6">
          <Logo />

          {/* Navegación Desktop */}
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex gap-6 text-sm font-medium">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/contacto">Contacto</NavLink>
            </nav>
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>

          {/* Botones Mobile */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-zinc-800 hover:ring-2 ring-red-500 transition-all"
              aria-label="Abrir menú"
            >
              {isOpen ? <X className="w-6 h-6 dark:text-zinc-400" /> : <Menu className="w-6 h-6 dark:text-zinc-400" />}
            </button>
          </div>
        </div>
      </header>

      {/* OVERLAY (Fuera del header para evitar bugs de stacking context) */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </div>

      {/* SIDEBAR MOBILE */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-zinc-950 shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-6 p-6 pt-24 text-sm font-medium">
          <div className="border-b dark:border-zinc-800 pb-4 mb-2">
            <span className="text-xs uppercase text-zinc-500 tracking-widest font-bold">Navegación</span>
          </div>
          <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/contacto" onClick={() => setIsOpen(false)}>Contacto</NavLink>
        </nav>
      </div>
    </>
  );
}

// --- SUB-COMPONENTES ---

function Logo() {
  return (
    <Link to="/" className="flex flex-col leading-none group items-center">
      <div className="text-3xl md:text-4xl font-black tracking-tighter">
        <span className="text-red-600">Rock</span>
        <span className="text-black dark:text-zinc-100">Lab</span>
      </div>
      <span className="text-[10px] md:text-s uppercase tracking-[0.2em] font-bold text-gray-500 dark:text-zinc-500 mt-1 transition-colors group-hover:text-red-600">
        desarrollo de Software
      </span>
    </Link>
  );
}

function NavLink({ children, to, onClick }: { children: ReactNode; to: string; onClick?: () => void }) {
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

interface ThemeToggleProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

function ThemeToggle({ darkMode, setDarkMode }: ThemeToggleProps) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="relative p-2 rounded-lg bg-gray-100 dark:bg-zinc-800 hover:ring-2 ring-red-500 transition-all duration-300 overflow-hidden"
      aria-label="Cambiar tema"
    >
      <div className="relative w-6 h-6">
        <Sun
          className={`absolute inset-0 transition-all duration-500 transform ${
            darkMode ? "translate-y-0 opacity-100 rotate-0" : "translate-y-10 opacity-0 rotate-45"
          } text-amber-500`}
        />
        <Moon
          className={`absolute inset-0 transition-all duration-500 transform ${
            !darkMode ? "translate-y-0 opacity-100 rotate-0" : "-translate-y-10 opacity-0 -rotate-12"
          } text-zinc-600 dark:text-zinc-400`}
        />
      </div>
    </button>
  );
}