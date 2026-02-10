export const useWhatsAppUrl = (phoneNumber = "5492213043135", message = "¡Hola Rock Lab! Me interesa saber más sobre sus servicios.") => {
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  return url;
};
