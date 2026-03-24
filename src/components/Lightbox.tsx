import { useState, useCallback, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface LightboxProps {
  images: { src: string; label: string }[];
  currentIndex: number;
  onClose: () => void;
}

const Lightbox = ({ images, currentIndex, onClose }: LightboxProps) => {
  const [index, setIndex] = useState(currentIndex);

  const goNext = useCallback(() => {
    setIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, goNext, goPrev]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center"
        style={{ backgroundColor: "hsl(var(--foreground) / 0.9)" }}
        onClick={onClose}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full text-background/80 hover:text-background transition-colors"
          aria-label="Close lightbox"
        >
          <X size={28} />
        </button>

        {/* Prev */}
        <button
          onClick={(e) => { e.stopPropagation(); goPrev(); }}
          className="absolute left-4 z-10 p-2 rounded-full text-background/80 hover:text-background transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft size={32} />
        </button>

        {/* Image */}
        <motion.img
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          src={images[index].src}
          alt={images[index].label}
          className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
          onClick={(e) => e.stopPropagation()}
        />

        {/* Next */}
        <button
          onClick={(e) => { e.stopPropagation(); goNext(); }}
          className="absolute right-4 z-10 p-2 rounded-full text-background/80 hover:text-background transition-colors"
          aria-label="Next image"
        >
          <ChevronRight size={32} />
        </button>

        {/* Label + counter */}
        <div className="absolute bottom-6 text-center text-background/80 text-sm">
          <span className="font-medium">{images[index].label}</span>
          <span className="ml-2 text-background/50">{index + 1} / {images.length}</span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Lightbox;
