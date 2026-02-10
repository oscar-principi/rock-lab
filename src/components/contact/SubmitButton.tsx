interface SubmitButtonProps {
  status: "idle" | "sending" | "success" | "error" | "cooldown";
  secondsLeft: number;
  isFormValid: boolean;
}

export const SubmitButton = ({ status, secondsLeft, isFormValid }: SubmitButtonProps) => {
  const getText = () => {
    switch(status) {
      case "sending": return "Enviando...";
      case "success": return "¡Recibido!";
      case "cooldown": return `Esperar ${secondsLeft}s`;
      default: return "Enviar mensaje";
    }
  };

  const getClassName = () => {
    if(status === "success") return "bg-green-600 text-white shadow-green-600/20 scale-105";
    if(status === "cooldown") return "bg-gray-200 text-gray-400 cursor-not-allowed dark:bg-zinc-800";
    if(isFormValid) return "bg-red-600 text-white hover:bg-red-700 shadow-red-600/20 cursor-pointer";
    return "bg-gray-300 text-gray-500 cursor-not-allowed dark:bg-zinc-800";
  };

  return (
    <button
      type="submit"
      disabled={!isFormValid && status !== "success"}
      className={`w-full font-semibold py-3 rounded-xl transition-all duration-500 shadow-lg ${getClassName()}`}
    >
      {getText()}
    </button>
  );
};
