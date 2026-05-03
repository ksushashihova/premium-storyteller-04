import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";
import heroImg from "@/assets/hero-wedding.jpg";
import coupleImg from "@/assets/wedding-couple.jpg";
import tableImg from "@/assets/wedding-table.jpg";
import archImg from "@/assets/wedding-arch.jpg";
import cakeImg from "@/assets/wedding-cake.jpg";
import venueImg from "@/assets/wedding-venu.png";

const images = [
  { src: heroImg, alt: "Свадебная церемония", span: "col-span-2 row-span-2" },
  { src: coupleImg, alt: "Пара", span: "row-span-2" },
  { src: tableImg, alt: "Сервировка", span: "" },
  { src: archImg, alt: "Арка", span: "col-span-2" },
  { src: cakeImg, alt: "Торт", span: "" },
  { src: venueImg, alt: "Площадка", span: "col-span-2" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      <section id="gallery" className="bg-background py-24 md:py-32">
        <div ref={ref} className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center font-serif text-4xl italic text-charcoal md:text-5xl"
          >
            Галерея работ
          </motion.h2>

          <div className="grid auto-rows-[200px] grid-cols-2 gap-3 md:auto-rows-[250px] md:grid-cols-4 md:gap-4">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={`group cursor-pointer overflow-hidden ${img.span}`}
                onClick={() => setLightbox(img.src)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-dark/90 p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute right-6 top-6 text-primary-foreground/80 transition-colors hover:text-primary-foreground"
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={lightbox}
            alt="Просмотр"
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
        </motion.div>
      )}
    </>
  );
};

export default GallerySection;
