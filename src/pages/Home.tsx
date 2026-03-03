import { HeroSection } from "../components/home/HeroSection";
import { FeatureGrid } from "../components/home/FeatureGrid";
import { LogoCarousel } from "../components/LogoCarousel";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20 transition-colors duration-300 space-y-20">
      
      <HeroSection />

      <LogoCarousel />

      <FeatureGrid />

      <div className="border-t border-zinc-200 dark:border-zinc-800 pt-10 text-center">
        <p className="text-zinc-500 dark:text-zinc-500 font-mono text-sm uppercase tracking-widest">
          React • TypeScript • .NET Core • C# • SQL Server • GitHub • Azure
        </p>
      </div>

    </main>
  );
}