import { useState, useEffect } from "react";
import { X, CalendarIcon, Users, CreditCard, Lock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { rooms } from "@/data/rooms";
import { useBooking } from "@/context/BookingContext";
import { toast } from "sonner";

const BookingModal = () => {
  const { isOpen, preselectedRoom, closeBooking } = useBooking();
  const [selectedRoom, setSelectedRoom] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [paymentMethod, setPaymentMethod] = useState("arrival");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (isOpen) {
      setSelectedRoom(preselectedRoom);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, preselectedRoom]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeBooking();
    };
    if (isOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, closeBooking]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Booking request submitted! We'll confirm your reservation shortly.");
    closeBooking();
    setSelectedRoom("");
    setCheckIn("");
    setCheckOut("");
    setGuests("2");
    setPaymentMethod("arrival");
    setName("");
    setEmail("");
  };

  const selectedRoomData = rooms.find((r) => r.id === selectedRoom);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ backgroundColor: "hsl(var(--foreground) / 0.6)" }}
          onClick={closeBooking}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            className="glass-card rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-6 md:p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-2xl font-bold text-foreground">Book Your Stay</h2>
              <button
                onClick={closeBooking}
                className="p-1.5 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Room Selection */}
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Select Room</label>
                <select
                  required
                  value={selectedRoom}
                  onChange={(e) => setSelectedRoom(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring appearance-none"
                >
                  <option value="">Choose a room...</option>
                  {rooms.map((room) => (
                    <option key={room.id} value={room.id}>
                      {room.name} — €{room.price}/night
                    </option>
                  ))}
                </select>
                {selectedRoomData && (
                  <p className="text-xs text-muted-foreground mt-1.5">
                    Up to {selectedRoomData.guests} guests · {selectedRoomData.size} m²
                  </p>
                )}
              </div>

              {/* Dates */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Check-in</label>
                  <div className="relative">
                    <CalendarIcon size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="date"
                      required
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Check-out</label>
                  <div className="relative">
                    <CalendarIcon size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="date"
                      required
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>
              </div>

              {/* Guests */}
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Guests</label>
                <div className="relative">
                  <Users size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring appearance-none"
                  >
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <option key={n} value={n}>{n} Guest{n > 1 ? "s" : ""}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Guest Info */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>

              {/* Payment Option */}
              <div>
                <label className="text-sm font-medium text-foreground mb-3 block flex items-center gap-1.5">
                  <CreditCard size={15} /> Payment Method
                </label>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-2.5">
                  <label className="flex items-center gap-3 p-3 rounded-lg border border-input hover:border-primary/40 transition-colors cursor-pointer">
                    <RadioGroupItem value="arrival" id="pay-arrival" />
                    <div>
                      <span className="text-sm font-medium text-foreground">Pay on Arrival</span>
                      <p className="text-xs text-muted-foreground">Pay when you check in — no upfront charge</p>
                    </div>
                  </label>
                  <label className="flex items-center gap-3 p-3 rounded-lg border border-input hover:border-primary/40 transition-colors cursor-pointer">
                    <RadioGroupItem value="now" id="pay-now" />
                    <div>
                      <span className="text-sm font-medium text-foreground">Pay Now</span>
                      <p className="text-xs text-muted-foreground">Secure your booking with immediate payment</p>
                    </div>
                  </label>
                </RadioGroup>
              </div>

              <Button type="submit" size="lg" className="w-full text-base">
                Confirm Booking
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Free cancellation up to 48 hours before check-in
              </p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
