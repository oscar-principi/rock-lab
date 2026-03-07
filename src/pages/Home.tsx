import { HeroSection } from "../components/home/HeroSection";
import { LogoCarousel } from "../components/layout/LogoCarousel";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20 transition-colors duration-300 space-y-20">
      
      <HeroSection />

      <LogoCarousel />

    </main>
  );
}