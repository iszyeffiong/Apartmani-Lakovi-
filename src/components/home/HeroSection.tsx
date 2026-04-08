import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useBooking } from "@/context/BookingContext";
import { useLanguage } from "@/context/LanguageContext";
import heroImg from "@/assets/hero.jpg";

const HeroSection = () => {
  const { openBooking } = useBooking();
  const { t } = useLanguage();

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Apartmani Laković - luxury Mediterranean apartments"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
          Apartmani Laković
        </h1>
        <p className="text-lg sm:text-xl text-white/90 mb-8 font-sans font-light">
          {t("hero_subtitle")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-base font-medium" onClick={() => openBooking()}>
            {t("hero_book_now")}
          </Button>
          <Button asChild size="lg" className="text-base font-medium bg-black text-white hover:bg-black/80 transition-all duration-300">
            <Link to="/rooms">{t("hero_view_rooms")}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
