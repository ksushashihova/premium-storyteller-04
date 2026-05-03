import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import venueImg from "@/assets/wedding-venu.png";

// 👉 добавь свои картинки в assets
import ornamentTopRight from "@/assets/ornament-top-right.png";
import ornamentBottomLeft from "@/assets/ornament-bottom-left.png";

const MissionSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden bg-gray py-0">
      <div className="relative h-[60vh] md:h-[70vh] flex items-center justify-center">

        {/* 🎀 декор СПРАВА СВЕРХУ */}
        <img
          src={ornamentTopRight}
          alt=""
          className="absolute top-4 right-4 w-24 md:w-32 opacity-60 pointer-events-none"
        />

        {/* 🎀 декор СЛЕВА СНИЗУ */}
        <img
          src={ornamentBottomLeft}
          alt=""
          className="absolute bottom-4 left-4 w-24 md:w-32 opacity-60 pointer-events-none"
        />

        {/* Картинка */}
        <div className="relative w-[450px] md:w-[600px] lg:w-[650px]">
          <img
            src={venueImg}
            alt="Свадебная площадка"
            className="w-full h-auto object-contain opacity-70"
            loading="lazy"
          />
        </div>

        {/* текст поверх */}
        <div
          ref={ref}
          className="absolute inset-0 flex items-center justify-center px-6 z-10"
        >
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2 }}
            className="max-w-2xl text-center font-serif text-2xl italic leading-relaxed text-primary-foreground/90 md:text-4xl lg:text-5xl"
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