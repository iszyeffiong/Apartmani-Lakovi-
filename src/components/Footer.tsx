import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="container-max section-padding">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-xl font-semibold mb-4">Apartmani Laković</h3>
          <p className="text-background/70 text-sm leading-relaxed">
            Experience the beauty of the Adriatic coast in our carefully designed apartments.
            Your perfect seaside retreat awaits.
          </p>
        </div>
        <div>
          <h4 className="font-serif text-lg font-semibold mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {["Rooms", "Gallery", "About", "Contact"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="text-sm text-background/70 hover:text-primary transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-serif text-lg font-semibold mb-4">Contact</h4>
          <div className="flex flex-col gap-3 text-sm text-background/70">
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-primary" />
              <span>+382 67 123 456</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-primary" />
              <span>info@apartmani-lakovic.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-primary" />
              <span>Obala bb, Budva, Montenegro</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-background/10 mt-12 pt-8 text-center text-sm text-background/50">
        © {new Date().getFullYear()} Apartmani Laković. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
