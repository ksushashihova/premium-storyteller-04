import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Sparkles, Camera, Music, Palette, UtensilsCrossed, MapPin, X, Check } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Полная организация",
    desc: "От концепции до реализации «под ключ»",
    full: "Берём на себя весь цикл подготовки: концепция, тайминг, бюджетирование, координация подрядчиков и сопровождение в день торжества. Вы наслаждаетесь, мы делаем так, чтобы всё работало безупречно.",
    includes: ["Авторская концепция", "Тайминг и логистика", "Подбор и контроль подрядчиков", "Координация в день", "Бюджетирование"],
    price: "от 450 000 ₽",
  },
  {
    icon: Palette,
    title: "Декор и стилистика",
    desc: "Авторский дизайн и флористика",
    full: "Создаём визуальную вселенную вашей свадьбы: палитра, фактуры, флористика, арт-объекты и сценография пространства.",
    includes: ["Мудборд и 3D-визуализация", "Флористика и инсталляции", "Текстиль и сервировка", "Световые сценарии"],
    price: "от 280 000 ₽",
  },
  {
    icon: Camera,
    title: "Фото и видео",
    desc: "Команда лучших операторов и фотографов",
    full: "Подбираем команду под ваш стиль — от документального репортажа до cinematic-видео. Бэкстейдж, love-story и финальный фильм.",
    includes: ["Фотограф полный день", "Видеограф (2 камеры)", "Cinematic-фильм 5–10 мин", "Highlight-ролик для соцсетей"],
    price: "от 180 000 ₽",
  },
  {
    icon: Music,
    title: "Развлекательная программа",
    desc: "Музыка, шоу, ведущие мероприятий",
    full: "Подбираем артистов, ведущих и DJ под формат события. От струнного квартета на церемонии до закрытого афтепати.",
    includes: ["Ведущий / MC", "DJ + звук и свет", "Live-музыка на церемонии", "Шоу-номера"],
    price: "от 220 000 ₽",
  },
  {
    icon: UtensilsCrossed,
    title: "Кейтеринг",
    desc: "Изысканное меню от топовых шефов",
    full: "Авторские меню от шефов, безупречный сервис и винное сопровождение. Дегустация — обязательный этап.",
    includes: ["Авторское меню", "Дегустация", "Барная карта и сомелье", "Сервировка и официанты"],
    price: "от 6 500 ₽ / гость",
  },
  {
    icon: MapPin,
    title: "Подбор площадки",
    desc: "Эксклюзивные локации по всему миру",
    full: "Доступ к закрытой базе площадок: усадьбы, виноградники, виллы, лофты и destination-локации. Полное сопровождение переговоров.",
    includes: ["Шорт-лист 3–5 локаций", "Выезд на просмотры", "Переговоры и контракты", "Logistics и трансфер"],
    price: "от 90 000 ₽",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const active = openIdx !== null ? services[openIdx] : null;

  return (
    <section id="services" className="bg-cream py-24 md:py-32">
      <div ref={ref} className="container mx-auto px-6">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-4 block text-center font-sans text-[10px] uppercase tracking-[0.4em] text-primary"
        >
          — Что мы делаем —
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-16 text-center font-serif text-4xl italic text-charcoal md:text-6xl"
        >
          Наши услуги
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.button
              key={s.title}
              type="button"
              onClick={() => setOpenIdx(i)}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative cursor-pointer overflow-hidden border border-border bg-background p-8 text-left transition-all duration-500 hover:border-primary/40 hover:shadow-xl"
            >
              <div className="absolute inset-0 -translate-y-full bg-gradient-to-b from-primary/5 to-transparent transition-transform duration-700 group-hover:translate-y-0" />
              <div className="relative">
                <s.icon className="mb-6 h-10 w-10 text-primary transition-all duration-500 group-hover:scale-110 group-hover:rotate-6" strokeWidth={1} />
                <h3 className="mb-2 font-serif text-2xl italic text-charcoal">{s.title}</h3>
                <p className="mb-6 font-sans text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
                <span className="inline-flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.25em] text-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  Подробнее →
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenIdx(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-dark/80 px-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto bg-cream p-8 md:p-12"
            >
              <button
                onClick={() => setOpenIdx(null)}
                aria-label="Закрыть"
                className="absolute right-4 top-4 p-2 text-charcoal/60 transition hover:text-primary"
              >
                <X className="h-5 w-5" />
              </button>

              <active.icon className="mb-6 h-12 w-12 text-primary" strokeWidth={1} />
              <h3 className="mb-4 font-serif text-3xl italic text-charcoal md:text-5xl">{active.title}</h3>
              <p className="mb-8 font-sans text-sm leading-relaxed text-charcoal/80 md:text-base">
                {active.full}
              </p>

              <div className="mb-8 border-t border-charcoal/10 pt-6">
                <span className="mb-4 block font-sans text-[10px] uppercase tracking-[0.3em] text-primary">
                  Что входит
                </span>
                <ul className="space-y-3">
                  {active.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 font-sans text-sm text-charcoal/80">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.5} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col items-start justify-between gap-4 border-t border-charcoal/10 pt-6 sm:flex-row sm:items-center">
                <div>
                  <span className="block font-sans text-[10px] uppercase tracking-[0.3em] text-charcoal/50">
                    Стоимость
                  </span>
                  <span className="font-serif text-3xl italic text-primary">{active.price}</span>
                </div>
                <a
                  href="#contact"
                  onClick={() => setOpenIdx(null)}
                  className="border border-primary bg-primary px-8 py-3 font-sans text-[11px] uppercase tracking-[0.25em] text-primary-foreground transition hover:bg-transparent hover:text-primary"
                >
                  Оставить заявку
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServicesSection;
