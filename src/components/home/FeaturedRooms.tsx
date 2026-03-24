import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { rooms } from "@/data/rooms";
import AnimatedSection from "@/components/AnimatedSection";

const FeaturedRooms = () => (
  <section className="section-padding bg-muted/50">
    <div className="container-max">
      <AnimatedSection className="text-center mb-12">
        <span className="text-primary font-medium text-sm uppercase tracking-widest">Accommodation</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">Our Rooms & Apartments</h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {rooms.slice(0, 8).map((room, i) => (
          <AnimatedSection key={room.id} delay={i * 0.1}>
            <Link to={`/rooms/${room.id}`} className="group block">
              <div className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative overflow-hidden h-56">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                  <div className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/90 text-white text-xs font-medium">
                    <span className="h-2 w-2 rounded-full bg-white"></span>
                    {room.available} available
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-foreground">{room.name}</h3>
                    <span className="text-primary font-bold">€{room.price}<span className="text-xs text-muted-foreground font-normal">/night</span></span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{room.description}</p>
                  <Button variant="outline" size="sm">View Details</Button>
                </div>
              </div>
            </Link>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="text-center mt-12" delay={0.3}>
        <Button asChild size="lg" variant="outline" className="px-8 shadow-sm hover:shadow-md transition-all">
          <Link to="/rooms">View All Rooms & Apartments</Link>
        </Button>
      </AnimatedSection>
    </div>
  </section>
);

export default FeaturedRooms;
