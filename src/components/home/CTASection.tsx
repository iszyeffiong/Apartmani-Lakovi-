import { Button } from "@/components/ui/button";
import { useBooking } from "@/context/BookingContext";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/context/LanguageContext";

const CTASection = () => {
  const { openBooking } = useBooking();
  const { t } = useLanguage();

  return (
    <section className="section-padding">
      <AnimatedSection>
        <div className="container-max text-center bg-primary rounded-2xl py-16 px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            {t("cta_heading")}
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
            {t("cta_text")}
          </p>
          <Button size="lg" variant="secondary" className="text-base" onClick={() => openBooking()}>
            {t("cta_button")}
          </Button>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default CTASection;
