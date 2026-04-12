import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart } from "lucide-react";

const WhyUsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative bg-background py-24 md:py-32">
      <div ref={ref} className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-12 md:flex-row md:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="flex shrink-0 items-center justify-center"
          >
            <div className="relative flex h-48 w-44 items-center justify-center">
              <Heart className="h-44 w-44 fill-primary/20 text-primary" strokeWidth={0.5} />
              <p className="absolute max-w-[120px] text-center font-serif text-sm italic leading-snug text-charcoal">
                Ваша задача — любить, наша — позаботиться обо всём остальном
              </p>
            </div>
          </motion.div>

          <div>
            <motion.h2
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="mb-6 font-serif text-4xl italic text-charcoal md:text-5xl"
            >
              Для чего мы нужны?
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4 font-sans text-sm leading-relaxed text-muted-foreground md:text-base"
            >
              <p>
                Чтобы вы наслаждались праздником, а не организовывали его:
                от идеи и сценария до последнего тоста и клининга.
              </p>
              <p>
                Мы создаём эмоциональные сценарии, координируем подрядчиков,
                решаем форс-мажоры и добавляем самые{" "}
                <span className="font-medium text-foreground">неожиданные штрихи</span>,
                которые делают событие личным и по-настоящему волнующим.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
