import { useState, useEffect } from "react";
import { getPreferredTheme, toggleTheme } from "../utils/theme";

export function useDarkMode() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") return false;
    return getPreferredTheme() === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      toggleTheme();
    } else {
      // ensure light is stored; toggleTheme would flip it
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return [darkMode, setDarkMode] as const;
}
