import { FeatureGrid } from "../components/home/FeatureGrid";
import { PainPoints } from "../components/home/PainPoints";

export default function Servicios() {
  return (
    <main className="max-w-6xl mx-auto px-6 pt-32 py-20 transition-colors duration-300 space-y-20">

      <div className="space-y-4">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight dark:text-zinc-100">
          Nuestros <span className="text-red-600 italic">servicios.</span>
        </h1>
        <p className="text-gray-600 dark:text-zinc-400 max-w-xl text-lg leading-relaxed">
          Desarrollamos sitios web y sistemas a medida para que tu empresa crezca, trabaje mejor y se vea profesional.
        </p>
      </div>

      <PainPoints />

      <FeatureGrid />

    </main>
  );
}