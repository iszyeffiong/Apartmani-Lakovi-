import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/context/LanguageContext";
import heroImg from "@/assets/hero.jpg";
import gallery2 from "@/assets/gallery2.jpg";

const About = () => {
  const { t } = useLanguage();

  return (
  <div className="pt-16">
    <section className="section-padding">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <span className="text-primary font-medium text-sm uppercase tracking-widest">{t("about_heading")}</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-foreground">{t("about_title")}</h1>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t("about_paragraph_1")}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t("about_paragraph_2")}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t("about_paragraph_3")}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="space-y-4">
              <img src={heroImg} alt="Apartmani Laković exterior" className="rounded-xl shadow-lg w-full h-60 object-cover" loading="lazy" width={1920} height={1080} />
              <img src={gallery2} alt="Adriatic coastline" className="rounded-xl shadow-lg w-full h-60 object-cover" loading="lazy" width={800} height={600} />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  </div>
  );
};

export default About;
