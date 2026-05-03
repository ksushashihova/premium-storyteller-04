import { Instagram, Send, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-dark py-16">
    <div className="container mx-auto grid gap-12 px-6 md:grid-cols-3">
      {/* Brand */}
      <div>
        <p className="font-serif text-3xl italic text-primary-foreground">Amorette</p>
        <p className="mt-3 max-w-xs font-sans text-xs leading-relaxed text-primary-foreground/50">
          Свадебное агентство полного цикла. Создаём события, которыми вы будете жить
          годами.
        </p>
      </div>

      {/* Contacts */}
      <div>
        <span className="mb-4 block font-sans text-[10px] uppercase tracking-[0.3em] text-primary">
          Контакты
        </span>
        <ul className="space-y-3 font-sans text-sm text-primary-foreground/70">
          <li className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.5} />
            <span>г. Москва, ул. Большая Никитская, 24/1, БЦ «Никитский», офис 305</span>
          </li>
          <li className="flex items-center gap-3">
            <Phone className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.5} />
            <a href="tel:+74951234567" className="transition hover:text-primary">
              +7 (495) 123-45-67
            </a>
          </li>
          <li className="flex items-center gap-3">
            <Mail className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.5} />
            <a href="mailto:hello@amorette.ru" className="transition hover:text-primary">
              hello@amorette.ru
            </a>
          </li>
        </ul>
      </div>

      {/* Social + legal */}
      <div>
        <span className="mb-4 block font-sans text-[10px] uppercase tracking-[0.3em] text-primary">
          Мы в соцсетях
        </span>
        <div className="mb-8 flex gap-3">
          <a
            href="https://t.me/amorette"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="flex h-10 w-10 items-center justify-center border border-primary-foreground/20 text-primary-foreground/70 transition hover:border-primary hover:text-primary"
          >
            <Send className="h-4 w-4" strokeWidth={1.5} />
          </a>
          <a
            href="https://instagram.com/amorette"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-10 w-10 items-center justify-center border border-primary-foreground/20 text-primary-foreground/70 transition hover:border-primary hover:text-primary"
          >
            <Instagram className="h-4 w-4" strokeWidth={1.5} />
          </a>
          <a
            href="https://vk.com/amorette"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ВКонтакте"
            className="flex h-10 w-10 items-center justify-center border border-primary-foreground/20 font-sans text-xs font-semibold text-primary-foreground/70 transition hover:border-primary hover:text-primary"
          >
            VK
          </a>
        </div>

        <ul className="space-y-2 font-sans text-xs text-primary-foreground/50">
          <li>
            <Link to="/privacy" className="transition hover:text-primary">
              Политика конфиденциальности
            </Link>
          </li>
          <li>
            <Link to="/consent" className="transition hover:text-primary">
              Согласие на обработку персональных данных
            </Link>
          </li>
        </ul>
      </div>
    </div>

    <div className="container mx-auto mt-12 border-t border-primary-foreground/10 px-6 pt-6 text-center">
      <p className="font-sans text-[10px] text-primary-foreground/30">
        © {new Date().getFullYear()} Свадебное агентство Amorette. ИНН 7700000000. Все
        права защищены.
      </p>
    </div>
  </footer>
);

export default Footer;
