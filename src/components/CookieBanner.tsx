import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookie-consent")) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] border-t border-border bg-cream/95 px-6 py-4 backdrop-blur-md">
      <div className="container mx-auto flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
        <p className="font-sans text-xs leading-relaxed text-charcoal/80 md:text-sm">
          Мы используем cookies для улучшения работы сайта и аналитики. Продолжая
          пользоваться сайтом, вы соглашаетесь с{" "}
          <Link to="/privacy" className="text-primary underline-offset-2 hover:underline">
            Политикой конфиденциальности
          </Link>{" "}
          и обработкой данных согласно 152-ФЗ.
        </p>
        <button
          onClick={accept}
          className="shrink-0 border border-charcoal bg-charcoal px-6 py-2 font-sans text-[10px] uppercase tracking-[0.2em] text-primary-foreground transition-all duration-500 hover:bg-transparent hover:text-charcoal"
        >
          Принять
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
