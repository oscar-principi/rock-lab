import { HeroSection } from "./HeroSection";
import { FeatureGrid } from "./FeatureGrid";

export const Home = () => (
  <section className="max-w-6xl mx-auto px-6 py-20 transition-colors duration-300">
    <HeroSection />
    <FeatureGrid />
    <div className="mt-32 border-t border-zinc-200 dark:border-zinc-800 pt-10 text-center">
      <p className="text-zinc-500 dark:text-zinc-500 font-mono text-sm uppercase tracking-widest">
        Stack principal: React • TypeScript • .NET Core • C# • SQL Server • Azure
      </p>
    </div>
  </section>
);
