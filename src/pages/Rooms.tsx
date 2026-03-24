import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { rooms } from "@/data/rooms";
import AnimatedSection from "@/components/AnimatedSection";
import { Users, Maximize } from "lucide-react";
import { useBooking } from "@/context/BookingContext";

const Rooms = () => {
  const { openBooking } = useBooking();

  return (
    <div className="pt-16">
      <section className="section-padding bg-muted/50">
        <div className="container-max">
          <AnimatedSection className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Our Rooms & Apartments</h1>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              Choose from our selection of beautifully appointed apartments, each designed for comfort and relaxation.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rooms.map((room, i) => (
              <AnimatedSection key={room.id} delay={i * 0.1}>
                <div className="bg-card rounded-xl overflow-hidden shadow-md flex flex-col h-full hover:shadow-lg transition-all duration-300">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                    <div className="p-5 flex flex-col flex-1 h-full">
                      <div className="flex justify-between items-start mb-2">
                        <h2 className="text-lg font-semibold text-foreground line-clamp-1">{room.name}</h2>
                        <span className="text-primary font-bold">€{room.price}<span className="text-[10px] text-muted-foreground font-normal">/night</span></span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-4 line-clamp-2 h-8">{room.description}</p>
                      
                      <div className="flex flex-wrap gap-2 text-[10px] text-muted-foreground mb-4 mt-auto">
                        <span className="flex items-center gap-1"><Users size={12} /> {room.guests}</span>
                        <span className="flex items-center gap-1"><Maximize size={12} /> {room.size}m²</span>
                        <span className="px-1.5 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                          {room.available} left
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-4 h-10 overflow-hidden">
                        {room.features.slice(0, 3).map((f) => (
                          <span key={f} className="text-[9px] bg-muted px-2 py-0.5 rounded-full text-muted-foreground whitespace-nowrap">{f}</span>
                        ))}
                      </div>
                    <div className="flex gap-2 mt-auto">
                      <Button asChild variant="outline" size="sm" className="flex-1 text-[11px] h-8 px-0">
                        <Link to={`/rooms/${room.id}`}>Details</Link>
                      </Button>
                      <Button size="sm" className="flex-1 text-[11px] h-8 px-0" onClick={() => openBooking(room.id)}>
                        Book
                      </Button>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rooms;
