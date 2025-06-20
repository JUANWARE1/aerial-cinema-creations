
export interface ValidationResult {
  isValid: boolean;
  message?: string;
}

export const validateStep1 = (formData: any): ValidationResult => {
  if (!formData.service) {
    return { isValid: false, message: "Por favor selecciona un servicio para continuar." };
  }
  
  if (formData.service === 'other' && (!formData.otherService || formData.otherService.trim() === '')) {
    return { isValid: false, message: "Por favor especifica el servicio personalizado." };
  }
  
  return { isValid: true };
};

export const validateStep2 = (formData: any): ValidationResult => {
  // Validate date
  if (!formData.date) {
    return { isValid: false, message: "Por favor selecciona una fecha para el evento." };
  }
  
  const selectedDate = new Date(formData.date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  if (selectedDate < today) {
    return { isValid: false, message: "La fecha del evento no puede ser anterior a hoy." };
  }
  
  // Validate location
  if (!formData.location || formData.location.trim() === '') {
    return { isValid: false, message: "Por favor ingresa la ubicación del evento." };
  }
  
  const invalidLocationPatterns = /^[-\s]*$|^abc+$|^test+$/i;
  if (invalidLocationPatterns.test(formData.location.trim())) {
    return { isValid: false, message: "Por favor ingresa una ubicación válida." };
  }
  
  // Validate event type
  if (!formData.eventType) {
    return { isValid: false, message: "Por favor selecciona el tipo de evento." };
  }
  
  return { isValid: true };
};

export const validateStep3 = (formData: any): ValidationResult => {
  if (!formData.duration) {
    return { isValid: false, message: "Por favor selecciona la duración del servicio." };
  }
  
  if (!formData.editedVideo) {
    return { isValid: false, message: "Por favor indica si deseas video final editado." };
  }
  
  if (!formData.music) {
    return { isValid: false, message: "Por favor selecciona una opción para la música." };
  }
  
  return { isValid: true };
};

export const validateStep4 = (formData: any): ValidationResult => {
  // Optional validation for "other extras" field
  if (formData.otherExtras && formData.otherExtras.trim() !== '') {
    const invalidPattern = /^[-\s!@#$%^&*()_+={}[\]|\\:";'<>?,./]*$/;
    if (invalidPattern.test(formData.otherExtras.trim())) {
      return { isValid: false, message: "Por favor ingresa texto válido en otros requerimientos." };
    }
  }
  
  return { isValid: true };
};

export const validateStep5 = (formData: any): ValidationResult => {
  // Validate full name
  if (!formData.fullName || formData.fullName.trim() === '') {
    return { isValid: false, message: "Por favor ingresa tu nombre completo." };
  }
  
  const nameParts = formData.fullName.trim().split(' ').filter((part: string) => part.length > 0);
  if (nameParts.length < 2) {
    return { isValid: false, message: "Por favor ingresa al menos nombre y apellido." };
  }
  
  const namePattern = /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/;
  if (!namePattern.test(formData.fullName)) {
    return { isValid: false, message: "El nombre solo debe contener letras y espacios." };
  }
  
  // Validate email
  if (!formData.email || formData.email.trim() === '') {
    return { isValid: false, message: "Por favor ingresa tu correo electrónico." };
  }
  
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(formData.email)) {
    return { isValid: false, message: "Por favor ingresa un correo electrónico válido." };
  }
  
  // Validate phone
  if (!formData.phone || formData.phone.trim() === '') {
    return { isValid: false, message: "Por favor ingresa tu teléfono o WhatsApp." };
  }
  
  const phonePattern = /^[\+]?[\d\s\-\(\)]{10,}$/;
  const digitCount = formData.phone.replace(/\D/g, '').length;
  
  if (!phonePattern.test(formData.phone) || digitCount < 10) {
    return { isValid: false, message: "Por favor ingresa un teléfono válido (mínimo 10 dígitos)." };
  }
  
  // Validate comments if provided
  if (formData.comments && formData.comments.trim() !== '') {
    const invalidPattern = /^[-\s!@#$%^&*()_+={}[\]|\\:";'<>?,./]*$/;
    if (invalidPattern.test(formData.comments.trim())) {
      return { isValid: false, message: "Por favor ingresa comentarios válidos." };
    }
  }
  
  return { isValid: true };
};
