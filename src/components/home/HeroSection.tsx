import { HeroButton } from "./HeroButton";

export const HeroSection = () => (
  <div className="text-center space-y-8 py-10">
    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight dark:text-zinc-100">
      Software a medida para <br />
      <span className="text-red-600 dark:text-red-600 italic">entornos web y desktop.</span>
    </h1>

    <p className="text-gray-600 dark:text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
      Diseño, desarrollo y mantenimiento de sistemas que potencian la productividad de tu marca.
    </p>

    <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
      <HeroButton to="/contacto">Hablemos de tu idea</HeroButton>
    </div>
  </div>
);
