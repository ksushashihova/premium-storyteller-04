import { motion } from "framer-motion";
import heroLeft from "@/assets/hero-left.jpg";
import heroRight from "@/assets/hero-right.jpg";
import heroCenter from "@/assets/hero-center.jpg";
import logo from "@/assets/logo.png";
import mob from "@/assets/mob.jpg";

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

        {/* Center image panel with text */}
<div
  className="relative flex h-full flex-1 flex-col items-center justify-center px-6 md:w-[40%] md:flex-none bg-cover bg-center"
  style={{ backgroundImage: `url(${heroCenter})` }}
>
  <div className="relative z-10 flex flex-col items-center text-center">
    <img
  src={logo}
  alt="Логотип"
  className="hidden md:block h-40 w-auto lg:h-60"
/>
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.4 }}
      className="font-serif text-5xl font-light italic leading-[1.15] text-white md:text-6xl lg:text-7xl"
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
      <p className="font-sans text-[10px] leading-relaxed tracking-[0.15em] text-white md:text-xs">
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
      className="mt-8 border border-white/40 px-8 py-2.5 font-sans text-[13px] uppercase tracking-[0.25em] text-white transition-all duration-500 hover:bg-primary hover:text-primary-foreground"
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
          src={mob}
          alt="Невеста"
          className="h-full w-full object-cover "
        />
      </div>

      {/* Navigation overlay - logo */}
      <motion.div
  className="absolute left-1 top-1 z-20 md:left-4 md:top-1"
>
  <img
    src={logo}
    alt="Логотип"
    className="block md:hidden h-20 md:h-20 lg:h-30"
  />
</motion.div>
    </section>
  );
};

export default HeroSection;
