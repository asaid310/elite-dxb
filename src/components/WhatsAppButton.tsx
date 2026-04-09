import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/971505052659?text=Hi!%20I%20have%20a%20question%20about%20your%20products"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full bg-[hsl(142,70%,45%)] text-[hsl(0,0%,100%)] shadow-lg hover:scale-105 transition-transform"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="text-sm font-semibold hidden sm:inline">Need help?</span>
    </a>
  );
};

export default WhatsAppButton;
