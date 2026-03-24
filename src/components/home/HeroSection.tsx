import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero.jpg";

const HeroSection = () => (
  <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
    <img
      src={heroImg}
      alt="Apartmani Laković — luxury Mediterranean apartments"
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 bg-foreground/40" />
    <div className="relative z-10 text-center px-4 max-w-3xl">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-background mb-4 leading-tight">
        Apartmani Laković
      </h1>
      <p className="text-lg sm:text-xl text-background/85 mb-8 font-sans font-light">
        Your peaceful retreat on the Adriatic coast. Experience comfort, beauty, and unforgettable hospitality.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild size="lg" className="text-base">
          <Link to="/contact">Book Now</Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="text-base border-background/50 text-background hover:bg-background/10">
          <Link to="/rooms">View Rooms</Link>
        </Button>
      </div>
    </div>
  </section>
);

export default HeroSection;
