import emailjs from "@emailjs/browser";

const EMAILJS_CONFIG = {
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  bookingTemplateId: import.meta.env.VITE_EMAILJS_BOOKING_TEMPLATE_ID,
  contactTemplateId: import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
};

emailjs.init(EMAILJS_CONFIG.publicKey);

export default EMAILJS_CONFIG;
