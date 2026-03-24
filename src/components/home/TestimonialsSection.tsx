import { Star } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const testimonials = [
  { name: "Maria K.", country: "Germany", text: "Absolutely stunning apartments with the most beautiful sea views. The hosts were incredibly welcoming. We'll definitely be back!", rating: 5 },
  { name: "James W.", country: "UK", text: "Perfect location, spotlessly clean, and the balcony view at sunset is unforgettable. Highly recommend for couples.", rating: 5 },
  { name: "Ana P.", country: "Serbia", text: "Felt like home from the moment we arrived. The kids loved the beach nearby. Great value for a family holiday.", rating: 5 },
];

const TestimonialsSection = () => (
  <section className="section-padding bg-muted/50">
    <div className="container-max">
      <AnimatedSection className="text-center mb-12">
        <span className="text-primary font-medium text-sm uppercase tracking-widest">Testimonials</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">What Our Guests Say</h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div className="bg-card rounded-xl p-6 shadow-sm">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">"{t.text}"</p>
              <p className="font-semibold text-foreground text-sm">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.country}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
