import { Wifi, Car, Wind, Eye, Waves, UtensilsCrossed } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/context/LanguageContext";

const AmenitiesSection = () => {
  const { t } = useLanguage();

  const amenities = [
    { icon: Wifi, label: t("amenities_free_wifi"), desc: t("amenities_free_wifi_desc") },
    { icon: Car, label: t("amenities_free_parking"), desc: t("amenities_free_parking_desc") },
    { icon: Wind, label: t("amenities_air_conditioning"), desc: t("amenities_air_conditioning_desc") },
    { icon: Eye, label: t("amenities_sea_view"), desc: t("amenities_sea_view_desc") },
    { icon: Waves, label: t("amenities_near_beach"), desc: t("amenities_near_beach_desc") },
    { icon: UtensilsCrossed, label: t("amenities_kitchen"), desc: t("amenities_kitchen_desc") },
  ];

  return (
    <section className="section-padding">
      <div className="container-max">
        <AnimatedSection className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-widest">{t("amenities_title")}</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">{t("amenities_heading")}</h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {amenities.map((a, i) => (
            <AnimatedSection key={a.label} delay={i * 0.08}>
              <div className="text-center p-6 rounded-xl bg-card shadow-sm hover:shadow-md transition-shadow">
                <a.icon size={32} className="mx-auto mb-3 text-primary" />
                <h3 className="font-semibold text-foreground mb-1">{a.label}</h3>
                <p className="text-sm text-muted-foreground">{a.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
