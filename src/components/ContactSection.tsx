import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { z } from "zod";
import { Check, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().trim().min(2, "Введите имя").max(100),
  phone: z.string().trim().min(5, "Введите телефон").max(30),
  email: z.string().trim().email("Некорректный email").max(255),
  date: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().trim().max(1000).optional(),
  consent: z.literal("on", { errorMap: () => ({ message: "Необходимо согласие на обработку данных" }) }),
  honeypot: z.string().max(0),
});

type FormData = z.infer<typeof formSchema>;

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries()) as Record<string, string>;

    const result = formSchema.safeParse(data);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as string;
        fieldErrors[key] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    if (result.data.honeypot) return;

    setErrors({});
    setStatus("loading");

    try {
      console.log("Form submission:", result.data);
      await new Promise((r) => setTimeout(r, 1500));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full border-b border-border bg-transparent px-0 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors";

  if (status === "success") {
    return (
      <section id="contact" className="bg-cream py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="container mx-auto flex flex-col items-center px-6 text-center"
        >
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
            <Check className="h-8 w-8 text-primary" />
          </div>
          <h2 className="mb-4 font-serif text-3xl italic text-charcoal md:text-4xl">Спасибо!</h2>
          <p className="font-sans text-sm text-muted-foreground">
            Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="contact" className="bg-cream py-24 md:py-32">
      <div ref={ref} className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-4 text-center font-serif text-4xl italic text-charcoal md:text-5xl"
        >
          Оставить заявку
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 text-center font-sans text-sm text-muted-foreground"
        >
          Расскажите о вашей мечте — мы воплотим её в реальность
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          onSubmit={handleSubmit}
          className="mx-auto max-w-lg space-y-6"
        >
          <input type="text" name="honeypot" className="hidden" tabIndex={-1} autoComplete="off" />

          <div>
            <input name="name" placeholder="Ваше имя *" className={inputClass} />
            {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
          </div>
          <div>
            <input name="phone" type="tel" placeholder="Телефон *" className={inputClass} />
            {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
          </div>
          <div>
            <input name="email" type="email" placeholder="Email *" className={inputClass} />
            {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
          </div>
          <div>
            <input name="date" type="date" placeholder="Дата свадьбы" className={inputClass} />
          </div>
          <div>
            <select name="budget" className={inputClass}>
              <option value="">Бюджет (опционально)</option>
              <option value="500k-1m">500 000 – 1 000 000 ₽</option>
              <option value="1m-3m">1 000 000 – 3 000 000 ₽</option>
              <option value="3m-5m">3 000 000 – 5 000 000 ₽</option>
              <option value="5m+">Более 5 000 000 ₽</option>
            </select>
          </div>
          <div>
            <textarea name="message" rows={3} placeholder="Сообщение" className={`${inputClass} resize-none`} />
          </div>

          <div className="flex items-start gap-3 pt-2">
            <input
              id="consent"
              type="checkbox"
              name="consent"
              className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-primary"
            />
            <label htmlFor="consent" className="font-sans text-xs leading-relaxed text-muted-foreground">
              Я даю согласие на обработку моих персональных данных в соответствии с{" "}
              <a href="/privacy" target="_blank" className="text-primary underline-offset-2 hover:underline">
                Политикой конфиденциальности
              </a>{" "}
              и Федеральным законом № 152-ФЗ.
            </label>
          </div>
          {errors.consent && <p className="text-xs text-destructive">{errors.consent}</p>}

          {status === "error" && (
            <p className="text-center text-xs text-destructive">Произошла ошибка. Попробуйте позже.</p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="mx-auto flex items-center gap-2 border border-charcoal bg-charcoal px-10 py-3 font-sans text-xs uppercase tracking-[0.2em] text-primary-foreground transition-all duration-500 hover:bg-transparent hover:text-charcoal disabled:opacity-50"
          >
            {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
            Отправить
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
