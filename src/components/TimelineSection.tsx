import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  { num: "01", title: "Знакомство", desc: "Встреча, обсуждение вашей истории, пожеланий и бюджета" },
  { num: "02", title: "Концепция", desc: "Разработка уникальной авторской идеи вашего торжества" },
  { num: "03", title: "Подготовка", desc: "Подбор команды, площадки, декора и всех подрядчиков" },
  { num: "04", title: "Репетиция", desc: "Финальная координация, тайминг и проверка каждой детали" },
  { num: "05", title: "Ваш день", desc: "Полное сопровождение: вы наслаждаетесь — мы работаем" },
];

const TimelineSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-dark py-24 md:py-32">
      <div ref={ref} className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center font-serif text-4xl italic text-primary-foreground md:text-5xl"
        >
          Этапы работы
        </motion.h2>

        <div className="relative mx-auto max-w-2xl">
          <div className="absolute left-4 top-0 h-full w-px bg-primary/30 md:left-1/2" />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative mb-12 pl-12 md:w-1/2 md:pl-0 ${
                i % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
              }`}
            >
              <div
                className={`absolute left-2 top-1 h-5 w-5 rounded-full border-2 border-primary bg-dark md:top-1 ${
                  i % 2 === 0 ? "md:left-auto md:-right-2.5" : "md:-left-2.5"
                }`}
              />
              <span className="font-serif text-3xl font-bold italic text-primary">{step.num}</span>
              <h3 className="mt-1 font-serif text-xl text-primary-foreground">{step.title}</h3>
              <p className="mt-1 font-sans text-xs leading-relaxed text-primary-foreground/60">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
