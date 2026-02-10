    import { useState, useEffect, useRef } from "react";

export function useScroll(isOpen?: boolean, onClose?: () => void) {
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 10);

      if (isOpen && onClose) {
        if (Math.abs(currentScrollY - lastScrollY.current) > 2) {
          onClose();
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen, onClose]);

  return scrolled;
}
