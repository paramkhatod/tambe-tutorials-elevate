import { MessageCircle } from "lucide-react";

const WhatsAppCTA = () => {
  return (
    <a
      href="https://wa.me/918149500068?text=Hello%2C%20I%20want%20to%20enquire%20about%20admissions%20at%20Tambe%20Tutorials"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-success flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-float"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-primary-foreground" />
    </a>
  );
};

export default WhatsAppCTA;
