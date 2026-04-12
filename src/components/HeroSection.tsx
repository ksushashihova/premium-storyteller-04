import { motion } from "framer-motion";
import heroImg from "@/assets/hero-wedding.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Роскошная свадебная церемония"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-dark/50" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-4 font-sans text-sm uppercase tracking-[0.3em] text-primary-foreground/80"
        >
          Свадебное агентство
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="font-serif text-5xl font-light italic leading-tight text-primary-foreground md:text-7xl lg:text-8xl"
        >
          Свадьбы
          <br />
          как искусство
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-6 max-w-md font-sans text-xs leading-relaxed tracking-wide text-primary-foreground/70 md:text-sm"
        >
          Мы создаём праздники, где каждая деталь
          <br />
          шепчет о вашей любви
        </motion.p>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-10 border border-primary-foreground/40 px-8 py-3 font-sans text-xs uppercase tracking-[0.2em] text-primary-foreground transition-all duration-500 hover:bg-primary-foreground hover:text-dark"
        >
          Оставить заявку
        </motion.a>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="h-12 w-px animate-pulse bg-primary-foreground/40" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
