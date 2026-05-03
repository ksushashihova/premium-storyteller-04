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
    <section id="about" className="relative overflow-hidden bg-dark py-24 md:py-32">
      {/* Subtle radial accent */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.08),transparent_70%)]" />

      <div className="container relative mx-auto px-6">
        <div ref={ref} className="grid items-center gap-16 md:grid-cols-12">
          {/* Left: layered images */}
          <div className="relative md:col-span-5 h-[480px] md:h-[600px]">
            <motion.div
              initial={{ opacity: 0, x: -50, scale: 0.95 }}
              animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.02 }}
              className="absolute left-0 top-0 h-[70%] w-[60%] overflow-hidden"
            >
              <img
                src={coupleImg}
                alt="Пара"
                className="h-full w-full object-cover transition-transform duration-[2s] hover:scale-110"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.02 }}
              className="absolute bottom-0 right-0 h-[60%] w-[55%] overflow-hidden border-4 border-dark"
            >
              <img
                src={tableImg}
                alt="Декор"
                className="h-full w-full object-cover transition-transform duration-[2s] hover:scale-110"
              />
            </motion.div>
            {/* Decorative line */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.6 }}
              className="absolute left-[58%] top-[10%] h-[60%] w-px bg-primary/40 origin-top"
            />
          </div>

          {/* Right: text + stats */}
          <div className="md:col-span-7 md:pl-8">
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="mb-6 block font-sans text-[10px] uppercase tracking-[0.4em] text-primary"
            >
              — О нас —
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.1 }}
              className="mb-8 font-serif text-5xl font-light italic leading-[1.05] text-white md:text-6xl lg:text-7xl"
            >
              Кто <span className="text-primary">мы?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="mb-12 max-w-xl font-sans text-sm leading-loose text-white/70 md:text-base"
            >
              Amorette — это авторские концепции, неожиданные стилистические акценты
              и безупречный сервис. Мы превращаем самые личные истории в события,
              о которых говорят годами.
            </motion.p>

            <div className="grid grid-cols-2 gap-px bg-white/10">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
                  whileHover={{ backgroundColor: "hsl(var(--primary) / 0.1)" }}
                  className="group bg-dark px-6 py-8 transition-colors"
                >
                  <span className="block font-serif text-5xl font-light italic text-primary transition-transform duration-500 group-hover:scale-110 md:text-6xl">
                    {stat.number}
                  </span>
                  <span className="mt-2 block font-sans text-[10px] uppercase tracking-[0.2em] text-white/60">
                    {stat.label}
                  </span>
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
