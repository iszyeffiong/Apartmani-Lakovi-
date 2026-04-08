import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import Lightbox from "@/components/Lightbox";
import { useLanguage } from "@/context/LanguageContext";
import gallery1 from "@/assets/gallery1.jpg";
import gallery2 from "@/assets/gallery2.jpg";
import gallery3 from "@/assets/gallery3.jpg";
import room1 from "@/assets/room1.jpg";
import room2 from "@/assets/room2.jpg";
import room3 from "@/assets/room3.jpg";
import room4 from "@/assets/room4.jpg";
import hero from "@/assets/hero.jpg";

const images = [
  { src: hero, label: "Exterior" },
  { src: room1, label: "Deluxe Suite" },
  { src: room2, label: "Premium Apartment" },
  { src: gallery1, label: "Pool Area" },
  { src: gallery2, label: "Coastal View" },
  { src: room3, label: "Cozy Studio" },
  { src: gallery3, label: "Bathroom" },
  { src: room4, label: "Superior Apartment" },
];

const Gallery = () => {
  const { t } = useLanguage();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div className="pt-16">
      <section className="section-padding">
        <div className="container-max">
          <AnimatedSection className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">{t("gallery_title")}</h1>
            <p className="text-muted-foreground mt-3">{t("gallery_subtitle")}</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((img, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <button
                  onClick={() => setLightboxIndex(i)}
                  className="group overflow-hidden rounded-xl aspect-[4/3] relative w-full cursor-pointer"
                >
                  <img
                    src={img.src}
                    alt={img.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300 flex items-end">
                    <span className="text-background font-medium p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {img.label}
                    </span>
                  </div>
                </button>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  );
};

export default Gallery;
