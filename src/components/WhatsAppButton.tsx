import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/38267123456?text=Hello%2C%20I%27d%20like%20to%20inquire%20about%20booking%20an%20apartment."
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform"
  >
    <MessageCircle size={28} fill="white" strokeWidth={0} />
  </a>
);

export default WhatsAppButton;
