import { Star } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/context/LanguageContext";

const testimonials = [
  { name: "Maria K.", country: "Germany", textKey: "testimonial_1", rating: 5 },
  { name: "James W.", country: "UK", textKey: "testimonial_2", rating: 5 },
  { name: "Ana P.", country: "Serbia", textKey: "testimonial_3", rating: 5 },
];

const TestimonialsSection = () => {
  const { t } = useLanguage();

  return (
  <section className="section-padding bg-muted/50">
    <div className="container-max">
      <AnimatedSection className="text-center mb-12">
        <span className="text-primary font-medium text-sm uppercase tracking-widest">{t("testimonials_title")}</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">{t("testimonials_title")}</h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((item, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div className="bg-card rounded-xl p-6 shadow-sm">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: item.rating }).map((_, j) => (
                  <Star key={j} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">"{t(item.textKey as any)}"</p>
              <p className="font-semibold text-foreground text-sm">{item.name}</p>
              <p className="text-xs text-muted-foreground">{item.country}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
  );
};

export default TestimonialsSection;
