import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
  <footer className="bg-foreground text-background">
    <div className="container-max section-padding">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-xl font-semibold mb-4">Apartmani Laković</h3>
          <p className="text-background/70 text-sm leading-relaxed">
            {t("footer_about")}
          </p>
        </div>
        <div>
          <h4 className="font-serif text-lg font-semibold mb-4">{t("footer_quick_links")}</h4>
          <div className="flex flex-col gap-2">
            {[
              { key: "nav_rooms", path: "/rooms" },
              { key: "nav_gallery", path: "/gallery" },
              { key: "nav_about", path: "/about" },
              { key: "nav_contact", path: "/contact" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-sm text-background/70 hover:text-primary transition-colors"
              >
                {t(item.key as any)}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-serif text-lg font-semibold mb-4">{t("footer_contact")}</h4>
          <div className="flex flex-col gap-3 text-sm text-background/70">
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-primary" />
              <a href="tel:+38267446479" className="hover:text-primary transition-colors">+382 67 446 479</a>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-primary" />
              <a href="mailto:apartmani.lakovic@gmail.com" className="hover:text-primary transition-colors">apartmani.lakovic@gmail.com</a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-primary" />
              <span>{t("address_value")}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-background/10 mt-12 pt-8 text-center text-sm text-background/50">
        © {new Date().getFullYear()} Apartmani Laković. {t("footer_copyright")}
      </div>
    </div>
  </footer>
  );
};

export default Footer;
