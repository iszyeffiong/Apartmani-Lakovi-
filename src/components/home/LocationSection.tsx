import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/context/LanguageContext";

const LocationSection = () => {
  const { t } = useLanguage();

  return (
  <section className="section-padding">
    <div className="container-max">
      <AnimatedSection className="text-center mb-12">
        <span className="text-primary font-medium text-sm uppercase tracking-widest">{t("location_title")}</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">{t("location_subtitle")}</h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          Located in the heart of Budva, just minutes from the Old Town and beautiful beaches.
          Restaurants, shops, and attractions are all within walking distance.
        </p>
      </AnimatedSection>

      <div className="rounded-xl overflow-hidden shadow-lg h-80 md:h-96">
        <iframe
          title="Apartmani Laković Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11832.94!2d18.84!3d42.29!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134dd0001c6e35e7%3A0xa940f38df2e57e0!2sBudva%2C%20Montenegro!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  </section>
  );
};

export default LocationSection;
