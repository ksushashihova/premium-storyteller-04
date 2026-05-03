import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const MissionSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative h-screen w-full overflow-hidden bg-dark">
      {/* Black & white video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover opacity-60"
        style={{ filter: "grayscale(100%) contrast(1.1)" }}
      >
        <source
          src="https://assets.mixkit.co/videos/5218/5218-1080.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/40 to-dark/80" />

      {/* Decorative borders */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute left-1/2 top-12 h-px w-32 -translate-x-1/2 bg-white/40 origin-center"
      />
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute bottom-12 left-1/2 h-px w-32 -translate-x-1/2 bg-white/40 origin-center"
      />

      {/* Text overlay */}
      <div ref={ref} className="relative z-10 flex h-full items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.4 }}
          className="max-w-3xl text-center"
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={inView ? { opacity: 1, letterSpacing: "0.4em" } : {}}
            transition={{ duration: 1.6, delay: 0.3 }}
            className="mb-8 block font-sans text-[10px] uppercase tracking-[0.4em] text-white/70 md:text-xs"
          >
            — Наша миссия —
          </motion.span>
          <p className="font-serif text-3xl italic leading-relaxed text-white md:text-5xl lg:text-6xl">
            Ваше событие — наша миссия. Мы создаём{" "}
            <span className="text-primary">чувственные торжества</span>, сочетая
            элегантность и смелые идеи
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;
