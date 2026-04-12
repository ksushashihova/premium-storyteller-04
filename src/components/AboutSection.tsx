import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import coupleImg from "@/assets/wedding-couple.jpg";
import tableImg from "@/assets/wedding-table.jpg";

const stats = [
  { number: "06", label: "лет в индустрии" },
  { number: "137", label: "надёжных подрядчиков" },
  { number: "520", label: "реализованных мероприятий" },
  { number: "12", label: "профильных наград" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative overflow-hidden bg-blush py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div ref={ref} className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="mb-8 font-serif text-4xl italic text-charcoal md:text-5xl lg:text-6xl"
            >
              Кто мы?
            </motion.h2>

            <div className="flex gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="polaroid w-32 shrink-0 md:w-40"
                style={{ "--rotation": "-5deg" } as React.CSSProperties}
              >
                <img src={coupleImg} alt="Пара" className="aspect-[3/4] w-full object-cover" loading="lazy" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="polaroid mt-8 w-28 shrink-0 md:w-36"
                style={{ "--rotation": "3deg" } as React.CSSProperties}
              >
                <img src={tableImg} alt="Декор" className="aspect-[3/4] w-full object-cover" loading="lazy" />
              </motion.div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-10 font-sans text-sm leading-relaxed text-charcoal/80 md:text-base"
            >
              Amorette — это авторские концепции, неожиданные стилистические акценты и безупречный сервис.
            </motion.p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                  className="rounded-sm bg-background/60 px-4 py-3 backdrop-blur-sm"
                >
                  <span className="font-serif text-3xl font-bold italic text-primary md:text-4xl">{stat.number}</span>
                  <span className="ml-2 font-sans text-xs text-charcoal/60">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
