import { Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-8 transition-colors duration-300 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-4 text-center text-sm text-gray-500 dark:text-zinc-400">
        
        {/* Redes Sociales */}
        <div className="flex gap-4">
          {/* Instagram */}
          <a
            href="https://instagram.com/rocklab.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600 transition-colors"
          >
            <Instagram size={20} />
          </a>

          {/* LinkedIn (futuro) */}
          {/*
          <a
            href="https://linkedin.com/company/rocklab"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600 transition-colors"
          >
            <Linkedin size={20} />
          </a>
          */}
        </div>

        {/* Texto */}
        <div>
          © {new Date().getFullYear()}{" "}
          <span className="text-red-600 font-semibold dark:text-red-500">
            Rock Lab
          </span>{" "}
          — Desarrollo de Software
        </div>
      </div>
    </footer>
  );
}
