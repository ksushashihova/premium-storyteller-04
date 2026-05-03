import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#hero", label: "Главная" },
  { href: "#about", label: "О нас" },
  { href: "#services", label: "Услуги" },
  { href: "#gallery", label: "Галерея" },
  { href: "#contact", label: "Контакты" },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <nav
        className={`fixed left-0 right-0 top-0 z-40 transition-all duration-500 ${
          scrolled ? "bg-dark/90 py-3 backdrop-blur-md" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-6">
          <a href="#hero" className="font-serif text-2xl italic text-primary-foreground">
            
          </a>

          <div className="hidden gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-sans text-xs uppercase tracking-[0.15em] text-primary-foreground/70 transition-colors hover:text-primary-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>

          <button className="text-primary-foreground md:hidden" onClick={() => setOpen(true)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-dark/95"
          >
            <button onClick={() => setOpen(false)} className="absolute right-6 top-6 text-primary-foreground">
              <X className="h-6 w-6" />
            </button>
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="py-3 font-serif text-2xl italic text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                {l.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
