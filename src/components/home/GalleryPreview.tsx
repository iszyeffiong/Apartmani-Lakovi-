import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/context/LanguageContext";
import gallery1 from "@/assets/gallery1.jpg";
import gallery2 from "@/assets/gallery2.jpg";
import gallery3 from "@/assets/gallery3.jpg";
import room1 from "@/assets/room1.jpg";
import room3 from "@/assets/room3.jpg";
import hero from "@/assets/hero.jpg";

const images = [gallery1, gallery2, gallery3, room1, room3, hero];

const GalleryPreview = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-muted/50">
      <div className="container-max">
        <AnimatedSection className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-widest">{t("gallery_title")}</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">{t("gallery_subtitle")}</h2>
        </AnimatedSection>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <AnimatedSection key={i} delay={i * 0.05}>
            <div className="overflow-hidden rounded-lg aspect-[4/3]">
              <img
                src={img}
                alt={`Gallery image ${i + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
          </AnimatedSection>
        ))}
      </div>

      <div className="text-center mt-8">
        <Button asChild variant="outline">
          <Link to="/gallery">{t("gallery_view_full")}</Link>
        </Button>
      </div>
    </div>
  </section>
  );
};

export default GalleryPreview;
