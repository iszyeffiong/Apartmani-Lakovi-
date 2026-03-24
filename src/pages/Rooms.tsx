import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { rooms } from "@/data/rooms";
import AnimatedSection from "@/components/AnimatedSection";
import { Users, Maximize } from "lucide-react";

const Rooms = () => (
  <div className="pt-16">
    <section className="section-padding bg-muted/50">
      <div className="container-max">
        <AnimatedSection className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">Our Rooms & Apartments</h1>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Choose from our selection of beautifully appointed apartments, each designed for comfort and relaxation.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {rooms.map((room, i) => (
            <AnimatedSection key={room.id} delay={i * 0.1}>
              <div className="bg-card rounded-xl overflow-hidden shadow-md">
                <img src={room.image} alt={room.name} className="w-full h-64 object-cover" loading="lazy" width={800} height={600} />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h2 className="text-xl font-semibold text-foreground">{room.name}</h2>
                    <span className="text-primary font-bold text-lg">€{room.price}<span className="text-xs text-muted-foreground font-normal">/night</span></span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{room.description}</p>
                  <div className="flex gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1"><Users size={14} /> {room.guests} guests</span>
                    <span className="flex items-center gap-1"><Maximize size={14} /> {room.size} m²</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {room.features.slice(0, 4).map((f) => (
                      <span key={f} className="text-xs bg-muted px-2.5 py-1 rounded-full text-muted-foreground">{f}</span>
                    ))}
                  </div>
                  <Button asChild>
                    <Link to={`/rooms/${room.id}`}>View Details</Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Rooms;
