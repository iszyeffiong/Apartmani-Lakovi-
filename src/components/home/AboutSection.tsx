import AnimatedSection from "@/components/AnimatedSection";
import gallery2 from "@/assets/gallery2.jpg";

const AboutSection = () => (
  <section className="section-padding">
    <div className="container-max grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <AnimatedSection>
        <span className="text-primary font-medium text-sm uppercase tracking-widest">Welcome</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-foreground">
          Your Home Away From Home
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Nestled along the stunning Adriatic coastline, Apartmani Laković offers a collection of
          beautifully appointed apartments designed for comfort and relaxation. Whether you're
          seeking a romantic escape or a family adventure, our apartments provide the perfect base
          to explore the region.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          With personalized service, modern amenities, and breathtaking sea views, we ensure every
          guest feels at home from the moment they arrive.
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

export default AboutSection;
