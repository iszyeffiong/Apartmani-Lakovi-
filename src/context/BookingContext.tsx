import { createContext, useContext, useState, ReactNode } from "react";

interface BookingContextType {
  isOpen: boolean;
  preselectedRoom: string;
  openBooking: (roomId?: string) => void;
  closeBooking: () => void;
}

const BookingContext = createContext<BookingContextType | null>(null);

export const useBooking = () => {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used within BookingProvider");
  return ctx;
};

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [preselectedRoom, setPreselectedRoom] = useState("");

  const openBooking = (roomId?: string) => {
    setPreselectedRoom(roomId || "");
    setIsOpen(true);
  };

  const closeBooking = () => setIsOpen(false);

  return (
    <BookingContext.Provider value={{ isOpen, preselectedRoom, openBooking, closeBooking }}>
      {children}
    </BookingContext.Provider>
  );
};
