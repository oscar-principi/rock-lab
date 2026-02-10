import { FormInput } from "./FormInput";
import { FormTextarea } from "./FormTextarea";
import { SubmitButton } from "./SubmitButton";
import { useContactForm } from "../../hooks/useContactForm";

export const ContactForm = () => {
  const { formData, status, secondsLeft, handleChange, handleSubmit, isFormValid } = useContactForm();

  return (
    <form onSubmit={handleSubmit} className="mt-10 space-y-4">
      <FormInput name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Nombre" disabled={status !== "idle"} />
      <FormInput name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email" disabled={status !== "idle"} />
      <FormTextarea name="mensaje" value={formData.mensaje} onChange={handleChange} placeholder="Tu mensaje..." disabled={status !== "idle"} />
      <SubmitButton status={status} secondsLeft={secondsLeft} isFormValid={isFormValid} />
      {status === "error" && <p className="text-red-500 text-sm text-center">Hubo un error, intentá de nuevo.</p>}
    </form>
  );
};
