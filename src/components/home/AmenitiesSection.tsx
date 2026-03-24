import { Wifi, Car, Wind, Eye, Waves, UtensilsCrossed } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const amenities = [
  { icon: Wifi, label: "Free WiFi", desc: "High-speed internet throughout" },
  { icon: Car, label: "Free Parking", desc: "Secure private parking" },
  { icon: Wind, label: "Air Conditioning", desc: "Climate control in every room" },
  { icon: Eye, label: "Sea View", desc: "Stunning Adriatic panoramas" },
  { icon: Waves, label: "Near Beach", desc: "Steps from crystal waters" },
  { icon: UtensilsCrossed, label: "Kitchen", desc: "Fully equipped kitchenettes" },
];

const AmenitiesSection = () => (
  <section className="section-padding">
    <div className="container-max">
      <AnimatedSection className="text-center mb-12">
        <span className="text-primary font-medium text-sm uppercase tracking-widest">Amenities</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">Everything You Need</h2>
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

export default AmenitiesSection;
