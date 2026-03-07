import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export default function ThemeToggle({ darkMode, setDarkMode }: ThemeToggleProps) {
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
