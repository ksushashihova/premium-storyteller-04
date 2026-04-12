import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Camera, Music, Palette, UtensilsCrossed, MapPin } from "lucide-react";

const services = [
  { icon: Sparkles, title: "Полная организация", desc: "От концепции до реализации «под ключ»" },
  { icon: Palette, title: "Декор и стилистика", desc: "Авторский дизайн и флористика" },
  { icon: Camera, title: "Фото и видео", desc: "Команда лучших операторов и фотографов" },
  { icon: Music, title: "Развлекательная программа", desc: "Музыка, шоу, ведущие мероприятий" },
  { icon: UtensilsCrossed, title: "Кейтеринг", desc: "Изысканное меню от топовых шефов" },
  { icon: MapPin, title: "Подбор площадки", desc: "Эксклюзивные локации по всему миру" },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="bg-cream py-24 md:py-32">
      <div ref={ref} className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center font-serif text-4xl italic text-charcoal md:text-5xl"
        >
          Наши услуги
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group cursor-pointer border border-border bg-background p-8 transition-all duration-500 hover:border-primary/30 hover:shadow-lg"
            >
              <s.icon className="mb-4 h-8 w-8 text-primary transition-transform duration-500 group-hover:scale-110" strokeWidth={1} />
              <h3 className="mb-2 font-serif text-xl text-charcoal">{s.title}</h3>
              <p className="font-sans text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
