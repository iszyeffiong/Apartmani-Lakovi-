import { useParams, Link, Navigate } from "react-router-dom";
import { rooms } from "@/data/rooms";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { Users, Maximize, Check, ArrowLeft } from "lucide-react";

const RoomDetails = () => {
  const { id } = useParams();
  const room = rooms.find((r) => r.id === id);

  if (!room) return <Navigate to="/rooms" replace />;

  return (
    <div className="pt-16">
      <section className="section-padding">
        <div className="container-max">
          <Link to="/rooms" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
            <ArrowLeft size={16} /> Back to Rooms
          </Link>

          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {room.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${room.name} - ${i + 1}`}
                  className={`w-full rounded-xl object-cover ${i === 0 ? "h-80 md:h-96" : "h-80 md:h-96"}`}
                  loading={i === 0 ? undefined : "lazy"}
                  width={800}
                  height={600}
                />
              ))}
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <AnimatedSection className="lg:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{room.name}</h1>
              <div className="flex gap-6 text-sm text-muted-foreground mb-6">
                <span className="flex items-center gap-1"><Users size={16} /> Up to {room.guests} guests</span>
                <span className="flex items-center gap-1"><Maximize size={16} /> {room.size} m²</span>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8">{room.longDescription}</p>

              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">Amenities</h3>
              <div className="grid grid-cols-2 gap-3">
                {room.features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check size={16} className="text-primary" /> {f}
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="glass-card rounded-xl p-6 sticky top-24">
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold text-primary">€{room.price}</span>
                  <span className="text-muted-foreground text-sm"> / night</span>
                </div>
                <Button asChild className="w-full" size="lg">
                  <Link to="/contact">Book This Room</Link>
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-3">
                  Free cancellation up to 48 hours before check-in
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoomDetails;
