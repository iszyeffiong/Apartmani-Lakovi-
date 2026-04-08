import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

const WhatsAppButton = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/38267446479?text=Hello%2C%20I%27d%20like%20to%20inquire%20about%20booking%20an%20apartment.",
      "_blank",
      "noopener,noreferrer"
    );
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform"
      >
        <MessageCircle size={28} fill="white" strokeWidth={0} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" style={{ backgroundColor: "hsl(var(--foreground) / 0.6)" }} onClick={() => setIsOpen(false)}>
          <div
            className="bg-card rounded-2xl p-6 md:p-8 w-full max-w-sm shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366]/10">
                  <MessageCircle size={24} className="text-[#25D366]" fill="#25D366" strokeWidth={0} />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{t("whatsapp_connect_title")}</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full hover:bg-muted transition-colors"
                aria-label="Close"
              >
                <X size={20} className="text-muted-foreground" />
              </button>
            </div>
            <p className="text-muted-foreground mb-6">
              {t("whatsapp_connect_text")}
            </p>
            <div className="flex gap-3">
              <Button variant="outline" onClick={() => setIsOpen(false)} className="flex-1">
                {t("whatsapp_cancel")}
              </Button>
              <Button onClick={handleWhatsAppClick} className="flex-1 bg-[#25D366] hover:bg-[#20BA5E]">
                {t("whatsapp_open")}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppButton;
