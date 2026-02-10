import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export type Status = "idle" | "sending" | "success" | "error" | "cooldown";
export interface FormData {
  nombre: string;
  email: string;
  mensaje: string;
}

export const useContactForm = () => {
  const [formData, setFormData] = useState<FormData>({ nombre: "", email: "", mensaje: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [secondsLeft, setSecondsLeft] = useState(0);

  // Lógica cooldown inicial
  useEffect(() => {
    const lastSend = localStorage.getItem("lastSendTime");
    if (lastSend) {
      const diff = Date.now() - parseInt(lastSend);
      const remaining = 120000 - diff; // 2 min
      if (remaining > 0) {
        setStatus("cooldown");
        setSecondsLeft(Math.ceil(remaining / 1000));
      }
    }
  }, []);

  // Contador de cooldown
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
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

  return { formData, status, secondsLeft, handleChange, handleSubmit, isFormValid };
};
