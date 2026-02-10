// src/components/Navbar/Navbar.tsx
import { useState } from "react";
import { useDarkMode } from "../../hooks/useDarkMode";
import { useScroll } from "../../hooks/useScroll";
import Header from "../Navbar/Header";

export default function Navbar() {
  const [darkMode, setDarkMode] = useDarkMode();
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScroll(isOpen, () => setIsOpen(false));

  return (
    <Header
      darkMode={darkMode}
      setDarkMode={setDarkMode}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      scrolled={scrolled}
    />
  );
}
