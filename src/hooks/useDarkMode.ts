import { useState, useEffect } from "react";
import { getPreferredTheme } from "../utils/theme";

export function useDarkMode() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") return false;
    return getPreferredTheme() === "dark";
  });

  useEffect(() => {
    // apply the selected theme state and persist it
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return [darkMode, setDarkMode] as const;
}
