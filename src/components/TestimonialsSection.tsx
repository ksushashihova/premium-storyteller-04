import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Анна и Дмитрий",
    text: "Это был лучший день в нашей жизни. Каждая деталь была продумана до мелочей — от утренних букетов до финального фейерверка. Спасибо за волшебство!",
    date: "Июнь 2025",
  },
  {
    name: "Елена и Михаил",
    text: "Мы мечтали о свадьбе в Италии — и Amorette воплотили это в реальность. Гости до сих пор вспоминают этот вечер как самый красивый в их жизни.",
    date: "Сентябрь 2024",
  },
  {
    name: "Мария и Александр",
    text: "Профессионализм, вкус и забота — вот три слова, которые описывают работу команды. Мы просто наслаждались каждой минутой нашего торжества.",
    date: "Август 2024",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="bg-blush py-24 md:py-32">
      <div ref={ref} className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center font-serif text-4xl italic text-charcoal md:text-5xl"
        >
          Отзывы
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto max-w-2xl text-center"
        >
          <Quote className="mx-auto mb-6 h-10 w-10 text-primary/40" strokeWidth={1} />
          <p className="mb-6 font-serif text-lg italic leading-relaxed text-charcoal/80 md:text-xl">
            {testimonials[current].text}
          </p>
          <p className="font-sans text-sm font-medium text-charcoal">{testimonials[current].name}</p>
          <p className="font-sans text-xs text-muted-foreground">{testimonials[current].date}</p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button onClick={prev} className="text-charcoal/50 transition-colors hover:text-primary">
              <ChevronLeft className="h-6 w-6" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 w-1.5 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-charcoal/20"}`}
                />
              ))}
            </div>
            <button onClick={next} className="text-charcoal/50 transition-colors hover:text-primary">
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
