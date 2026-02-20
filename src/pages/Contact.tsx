import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({ nombre: "", email: "", mensaje: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error" | "cooldown">("idle");
  const [secondsLeft, setSecondsLeft] = useState(0);

  // 1. Definimos el límite máximo de caracteres
  const MAX_CHARS = 2000;

  useEffect(() => {
    const lastSend = localStorage.getItem("lastSendTime");
    if (lastSend) {
      const diff = Date.now() - parseInt(lastSend);
      const remaining = 120000 - diff;
      if (remaining > 0) {
        setStatus("cooldown");
        setSecondsLeft(Math.ceil(remaining / 1000));
      }
    }
  }, []);

  useEffect(() => {
    let timer: number;
    if (status === "cooldown" && secondsLeft > 0) {
      timer = window.setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            setStatus("idle");
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [status, secondsLeft]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    // 2. Si es el mensaje, validamos que no supere el máximo antes de actualizar el estado
    if (name === "mensaje" && value.length > MAX_CHARS) return;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "cooldown") return;

    setStatus("sending");

    const templateParams = {
      name: formData.nombre,
      email: formData.email,
      message: formData.mensaje,
      time: new Date().toLocaleString('es-AR', { dateStyle: 'medium', timeStyle: 'short' }),
    };

    const SERVICE_ID = "service_6uvpmms"; 
    const PUBLIC_KEY = "ZyQVJQ5lwF8wWPU92";
    const TEMPLATE_ADMIN = "template_7jlmo5d"; 
    const TEMPLATE_USER = "template_owis9oh";

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ADMIN, templateParams, PUBLIC_KEY);
      await emailjs.send(SERVICE_ID, TEMPLATE_USER, templateParams, PUBLIC_KEY);

      setStatus("success");
      localStorage.setItem("lastSendTime", Date.now().toString());
      setFormData({ nombre: "", email: "", mensaje: "" });
      
      setTimeout(() => {
        setStatus("cooldown");
        setSecondsLeft(120);
      }, 3000);

    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isFormValid = 
    formData.nombre.trim() !== "" && 
    emailRegex.test(formData.email) && 
    formData.mensaje.trim() !== "" &&
    status === "idle";

  return (
    <section className="max-w-3xl mx-auto px-6 py-40 transition-colors duration-300">
      <h2 className="text-4xl font-bold dark:text-zinc-100">
        Contacto Rock<span className="text-red-600">Lab</span>
      </h2>

      <p className="text-gray-600 dark:text-zinc-400 mt-4">
        {status === "success" 
          ? "¡Mensaje enviado! Revisá tu casilla de correo." 
          : "Contanos tu idea y armamos una solución juntos."}
      </p>

      <form onSubmit={handleSubmit} className="mt-10 space-y-4">
        <input
          type="text" name="nombre" value={formData.nombre} onChange={handleChange}
          placeholder="Nombre" disabled={status !== "idle"}
          className="w-full p-3 rounded-xl border border-gray-300 outline-none transition-colors bg-white dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-100 dark:focus:border-red-500 disabled:opacity-50"
        />

        <input
          type="email" name="email" value={formData.email} onChange={handleChange}
          placeholder="Email" disabled={status !== "idle"}
          className="w-full p-3 rounded-xl border border-gray-300 outline-none transition-colors bg-white dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-100 dark:focus:border-red-500 disabled:opacity-50"
        />

        {/* 3. Agrupamos el textarea con su contador */}
        <div className="relative">
          <textarea
            name="mensaje" value={formData.mensaje} onChange={handleChange}
            placeholder="Tu mensaje..." rows={4} disabled={status !== "idle"}
            className="w-full p-3 rounded-xl border border-gray-300 outline-none transition-colors bg-white dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-100 dark:focus:border-red-500 disabled:opacity-50"
          />
          {/* Contador visual */}
          <div className="text-right text-xs mt-1 text-gray-500 dark:text-zinc-500">
            {formData.mensaje.length} / {MAX_CHARS}
          </div>
        </div>

        <button
          type="submit"
          disabled={!isFormValid && status !== "success"} 
          className={`w-full font-semibold py-3 rounded-xl transition-all duration-500 shadow-lg 
            ${status === "success" 
              ? "bg-green-600 text-white shadow-green-600/20 scale-105" 
              : status === "cooldown"
              ? "bg-gray-200 text-gray-400 cursor-not-allowed dark:bg-zinc-800"
              : isFormValid 
              ? "bg-red-600 text-white hover:bg-red-700 shadow-red-600/20 cursor-pointer" 
              : "bg-gray-300 text-gray-500 cursor-not-allowed dark:bg-zinc-800"
            }`}
        >
          {status === "sending" ? "Enviando..." : 
           status === "success" ? "¡Recibido!" : 
           status === "cooldown" ? `Esperar ${secondsLeft}s` : 
           "Enviar mensaje"}
        </button>
        
        {status === "error" && (
          <p className="text-red-500 text-sm text-center">Hubo un error, intentá de nuevo.</p>
        )}
      </form>
    </section>
  );
}