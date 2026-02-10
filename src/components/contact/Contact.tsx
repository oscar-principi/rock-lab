import { ContactForm } from "./ContactForm";

export const Contact = () => (
  <section className="max-w-3xl mx-auto px-6 py-40 transition-colors duration-300">
    <h2 className="text-4xl font-bold dark:text-zinc-100">
      Contacto Rock<span className="text-red-600">Lab</span>
    </h2>

    <p className="text-gray-600 dark:text-zinc-400 mt-4">
      Contanos tu idea y armamos una solución juntos.
    </p>

    <ContactForm />
  </section>
);
