import { useState, useEffect } from "react";
import { X, Users, CreditCard, Lock, CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { rooms } from "@/data/rooms";
import { useBooking } from "@/context/BookingContext";
import { toast } from "sonner";

const BookingModal = () => {
  const { isOpen, preselectedRoom, closeBooking } = useBooking();
  const [selectedRoom, setSelectedRoom] = useState("");
  const [checkIn, setCheckIn] = useState<Date | undefined>();
  const [checkOut, setCheckOut] = useState<Date | undefined>();
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
    setCheckIn(undefined);
    setCheckOut(undefined);
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
                      {room.name} - €{room.price}/night
                    </option>
                  ))}
                </select>
                {selectedRoomData && (
                  <p className="text-xs text-muted-foreground mt-1.5">
                    Up to {selectedRoomData.guests} guests · {selectedRoomData.size} m² · {selectedRoomData.available} available
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Check-in</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !checkIn && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {checkIn ? format(checkIn, "PPP") : <span>Pick date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={checkIn}
                        onSelect={setCheckIn}
                        disabled={(date) => date < new Date()}
                        initialFocus
                        className={cn("p-3 pointer-events-auto")}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Check-out</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !checkOut && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {checkOut ? format(checkOut, "PPP") : <span>Pick date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={checkOut}
                        onSelect={setCheckOut}
                        disabled={(date) => date < (checkIn || new Date())}
                        initialFocus
                        className={cn("p-3 pointer-events-auto")}
                      />
                    </PopoverContent>
                  </Popover>
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all"
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
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all"
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
                      <p className="text-xs text-muted-foreground">Pay when you check in - no upfront charge</p>
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

              {/* Card Details (shown when Pay Now selected) */}
              {paymentMethod === "now" && (
                <div className="space-y-3 p-4 rounded-lg border border-primary/20 bg-primary/5">
                  <div className="flex items-center gap-2 mb-1">
                    <Lock size={14} className="text-primary" />
                    <span className="text-sm font-medium text-foreground">Secure Payment</span>
                    <div className="ml-auto flex items-center gap-1.5">
                      <span className="text-[10px] font-semibold bg-[#635BFF] text-white px-1.5 py-0.5 rounded">stripe</span>
                      <span className="text-[10px] font-semibold bg-[#EB001B] text-white px-1.5 py-0.5 rounded">mc</span>
                      <span className="text-[10px] font-semibold bg-[#1A1F71] text-white px-1.5 py-0.5 rounded">visa</span>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-foreground mb-1 block">Card Number</label>
                    <input
                      type="text"
                      placeholder="4242 4242 4242 4242"
                      maxLength={19}
                      className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring font-mono tracking-wider"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-medium text-foreground mb-1 block">Expiry</label>
                      <input
                        type="text"
                        placeholder="MM / YY"
                        maxLength={7}
                        className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring font-mono"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-foreground mb-1 block">CVC</label>
                      <input
                        type="text"
                        placeholder="123"
                        maxLength={4}
                        className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring font-mono"
                      />
                    </div>
                  </div>
                  <p className="text-[11px] text-muted-foreground flex items-center gap-1">
                    <Lock size={10} /> Your payment info is encrypted and secure
                  </p>
                </div>
              )}

              <Button type="submit" size="lg" className="w-full text-base">
                {paymentMethod === "now" ? "Pay & Confirm Booking" : "Confirm Booking"}
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
