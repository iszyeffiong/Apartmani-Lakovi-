import AnimatedSection from "@/components/AnimatedSection";
import heroImg from "@/assets/hero.jpg";
import gallery2 from "@/assets/gallery2.jpg";

const About = () => (
  <div className="pt-16">
    <section className="section-padding">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <span className="text-primary font-medium text-sm uppercase tracking-widest">Our Story</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-foreground">About Apartmani Laković</h1>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For over a decade, the Laković family has welcomed guests from around the world to our
              beautiful apartments on the Adriatic coast. What started as a small family guesthouse has
              grown into a collection of modern, stylish apartments — but our commitment to personal,
              warm hospitality remains unchanged.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We believe that a great holiday starts with a great place to stay. That's why we've
              carefully designed each apartment with comfort, style, and functionality in mind.
              From the premium linens to the fully equipped kitchens, every detail is chosen to make
              your stay exceptional.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Located in the heart of Budva, our apartments offer easy access to beaches, restaurants,
              historical sites, and the vibrant nightlife. Whether you're here to relax, explore, or
              celebrate — we're here to ensure you have an unforgettable experience.
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

export default About;
