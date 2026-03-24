import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";

const CTASection = () => (
  <section className="section-padding">
    <AnimatedSection>
      <div className="container-max text-center bg-primary rounded-2xl py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Ready to Book Your Stay?
        </h2>
        <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
          Don't miss out on the perfect Adriatic getaway. Check availability and reserve your apartment today.
        </p>
        <Button asChild size="lg" variant="secondary" className="text-base">
          <Link to="/contact">Book Your Stay Now</Link>
        </Button>
      </div>
    </AnimatedSection>
  </section>
);

export default CTASection;
