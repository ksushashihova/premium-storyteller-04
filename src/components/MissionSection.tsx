import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import venueImg from "@/assets/wedding-venue.jpg";

const MissionSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden bg-dark py-0">
      <div className="relative h-[60vh] w-full md:h-[70vh]">
        <img
          src={venueImg}
          alt="Свадебная площадка"
          className="h-full w-full object-cover opacity-60"
          loading="lazy"
          width={800}
          height={600}
        />
        <div className="absolute inset-0 bg-dark/40" />
        <div ref={ref} className="absolute inset-0 flex items-center justify-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2 }}
            className="max-w-3xl text-center font-serif text-2xl italic leading-relaxed text-primary-foreground/90 md:text-4xl lg:text-5xl"
          >
            Ваше событие — наша миссия. Мы создаём{" "}
            <span className="text-primary">чувственные торжества</span>,
            сочетая элегантность и смелые идеи
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
