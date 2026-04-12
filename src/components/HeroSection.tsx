import { motion } from "framer-motion";
import heroLeft from "@/assets/hero-left.jpg";
import heroRight from "@/assets/hero-right.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-dark">
      <div className="flex h-full">
        {/* Left photo panel */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="hidden h-full w-[30%] overflow-hidden md:block"
        >
          <img
            src={heroLeft}
            alt="Невеста в розовом платье"
            className="h-full w-full object-cover"
            width={640}
            height={900}
          />
        </motion.div>

        {/* Center dark panel with text */}
        <div className="relative flex h-full flex-1 flex-col items-center justify-center bg-dark px-6 md:w-[40%] md:flex-none">
          {/* Subtle fabric texture overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_hsl(0_0%_15%)_0%,_hsl(0_0%_8%)_100%)]" />

          <div className="relative z-10 flex flex-col items-center text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="font-serif text-5xl font-light italic leading-[1.15] text-primary md:text-6xl lg:text-7xl"
            >
              Свадьбы
              <br />
              как искусство
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-10"
            >
              <p className="font-sans text-[10px] leading-relaxed tracking-[0.15em] text-primary-foreground/50 md:text-xs">
                Мы создаём праздники, где каждая
                <br />
                деталь шепчет о вашей любви
              </p>
            </motion.div>

            <motion.a
              href="#contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="mt-8 border border-primary/40 px-8 py-2.5 font-sans text-[10px] uppercase tracking-[0.25em] text-primary transition-all duration-500 hover:bg-primary hover:text-primary-foreground"
            >
              Заявка
            </motion.a>
          </div>
        </div>

        {/* Right photo panel */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="hidden h-full w-[30%] overflow-hidden md:block"
        >
          <img
            src={heroRight}
            alt="Невеста с жемчугом"
            className="h-full w-full object-cover"
            width={640}
            height={900}
          />
        </motion.div>
      </div>

      {/* Mobile: show one image as background */}
      <div className="absolute inset-0 md:hidden">
        <img
          src={heroLeft}
          alt="Невеста"
          className="h-full w-full object-cover opacity-30"
        />
      </div>

      {/* Navigation overlay - logo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute left-6 top-5 z-20 font-serif text-xl italic text-primary md:text-2xl"
      >
        Amorette
      </motion.div>
    </section>
  );
};

export default HeroSection;
