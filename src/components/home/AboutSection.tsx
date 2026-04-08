import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/context/LanguageContext";
import gallery2 from "@/assets/gallery2.jpg";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
  <section className="section-padding">
    <div className="container-max grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <AnimatedSection>
        <span className="text-primary font-medium text-sm uppercase tracking-widest">{t("home_welcome")}</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-foreground">
          {t("home_title")}
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          {t("home_paragraph_1")}
        </p>
        <p className="text-muted-foreground leading-relaxed">
          {t("home_paragraph_2")}
        </p>
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <img
          src={gallery2}
          alt="Adriatic coastline view"
          className="rounded-xl shadow-xl w-full h-80 lg:h-96 object-cover"
          loading="lazy"
          width={800}
          height={600}
        />
      </AnimatedSection>
    </div>
  </section>
  );
};

export default AboutSection;
