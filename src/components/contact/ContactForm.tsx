import { useContactForm } from "../../hooks/useContactForm";

const inputClasses = "w-full p-3 rounded-xl border border-gray-300 outline-none transition-colors bg-white dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-100 dark:focus:border-red-500 disabled:opacity-50";

export const ContactForm = () => {
  const { formData, status, secondsLeft, handleChange, handleSubmit, isFormValid } = useContactForm();

  const buttonText = status === "sending" ? "Enviando..."
    : status === "success" ? "¡Recibido!"
    : status === "cooldown" ? `Esperar ${secondsLeft}s`
    : "Enviar mensaje";

  const buttonClass = status === "success" ? "bg-green-600 text-white shadow-green-600/20 scale-105"
    : status === "cooldown" ? "bg-gray-200 text-gray-400 cursor-not-allowed dark:bg-zinc-800"
    : isFormValid ? "bg-red-600 text-white hover:bg-red-700 shadow-red-600/20 cursor-pointer"
    : "bg-gray-300 text-gray-500 cursor-not-allowed dark:bg-zinc-800";

  return (
    <form onSubmit={handleSubmit} className="mt-10 space-y-4">
      <input
        type="text" name="nombre" value={formData.nombre} onChange={handleChange}
        placeholder="Nombre" disabled={status !== "idle"} className={inputClasses}
      />
      <input
        type="email" name="email" value={formData.email} onChange={handleChange}
        placeholder="Email" disabled={status !== "idle"} className={inputClasses}
      />
      <textarea
        name="mensaje" value={formData.mensaje} onChange={handleChange}
        placeholder="Tu mensaje..." rows={4} disabled={status !== "idle"} className={inputClasses}
      />
      <button
        type="submit"
        disabled={!isFormValid && status !== "success"}
        className={`w-full font-semibold py-3 rounded-xl transition-all duration-500 shadow-lg ${buttonClass}`}
      >
        {buttonText}
      </button>
      {status === "error" && (
        <p className="text-red-500 text-sm text-center">Hubo un error, intentá de nuevo.</p>
      )}
    </form>
  );
};