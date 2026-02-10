// src/components/Navbar/Header.tsx
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import NavLink from "./NavLink";
import ThemeToggle from "./ThemeToggle";

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  scrolled: boolean;
}

export default function Header({ darkMode, setDarkMode, isOpen, setIsOpen, scrolled }: HeaderProps) {
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

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 z-60 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </div>

      {/* SIDEBAR MOBILE */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-zinc-950 shadow-2xl z-70 transform transition-transform duration-300 ease-in-out md:hidden ${
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
