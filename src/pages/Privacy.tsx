import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Privacy = () => (
  <main className="min-h-screen bg-cream py-20">
    <div className="container mx-auto max-w-3xl px-6">
      <Link
        to="/"
        className="mb-10 inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.25em] text-charcoal/60 transition hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" /> На главную
      </Link>

      <h1 className="mb-8 font-serif text-4xl italic text-charcoal md:text-5xl">
        Политика конфиденциальности
      </h1>

      <div className="space-y-6 font-sans text-sm leading-relaxed text-charcoal/80">
        <p className="text-xs text-charcoal/50">Действует с {new Date().toLocaleDateString("ru-RU")}</p>

        <section>
          <h2 className="mb-3 font-serif text-2xl italic text-charcoal">1. Общие положения</h2>
          <p>
            Настоящая Политика разработана в соответствии с Федеральным законом от 27.07.2006
            № 152-ФЗ «О персональных данных» (с учётом изменений, вступивших в силу
            30.05.2025) и определяет порядок обработки персональных данных и меры по
            обеспечению их безопасности, предпринимаемые свадебным агентством Amorette
            (далее — «Оператор»).
          </p>
          <p className="mt-3">
            <strong>Оператор:</strong> ИП / ООО «Аморетт», ИНН 7700000000, адрес: г. Москва,
            ул. Большая Никитская, 24/1, офис 305. Контакт: hello@amorette.ru.
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-serif text-2xl italic text-charcoal">2. Какие данные мы собираем</h2>
          <ul className="ml-5 list-disc space-y-1">
            <li>Имя</li>
            <li>Номер телефона</li>
            <li>Адрес электронной почты</li>
            <li>Желаемая дата мероприятия и бюджет (по желанию)</li>
            <li>Текст сообщения, оставленного через форму обратной связи</li>
            <li>Технические данные: IP-адрес, cookies, тип устройства и браузера</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 font-serif text-2xl italic text-charcoal">3. Цели обработки</h2>
          <ul className="ml-5 list-disc space-y-1">
            <li>Связь с пользователем по оставленной заявке</li>
            <li>Подготовка коммерческого предложения</li>
            <li>Заключение и исполнение договора об оказании услуг</li>
            <li>Информирование о новостях и специальных предложениях (при наличии согласия)</li>
            <li>Соблюдение требований законодательства РФ</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 font-serif text-2xl italic text-charcoal">4. Правовые основания</h2>
          <p>
            Обработка ведётся на основании согласия субъекта персональных данных (ст. 6
            ч. 1 п. 1 152-ФЗ), а также для исполнения договора, стороной которого является
            субъект.
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-serif text-2xl italic text-charcoal">5. Хранение и защита</h2>
          <p>
            Персональные данные граждан РФ обрабатываются и хранятся на серверах,
            расположенных на территории Российской Федерации, в соответствии со ст. 18 ч. 5
            152-ФЗ. Срок хранения — не более 5 лет с момента последнего взаимодействия,
            если иное не установлено законом. По истечении срока данные уничтожаются.
          </p>
          <p className="mt-3">
            Применяются организационные и технические меры защиты: разграничение доступа,
            шифрование каналов связи (TLS), регулярный аудит.
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-serif text-2xl italic text-charcoal">6. Передача третьим лицам</h2>
          <p>
            Оператор не передаёт персональные данные третьим лицам, за исключением случаев,
            предусмотренных законодательством РФ, и привлечённых подрядчиков (фотографы,
            декораторы, площадки) — только с отдельного согласия субъекта и в объёме,
            необходимом для исполнения услуг.
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-serif text-2xl italic text-charcoal">7. Права субъекта</h2>
          <p>
            Вы имеете право: получать сведения об обработке ваших данных, требовать их
            уточнения, блокирования или уничтожения, отозвать согласие на обработку. Для
            этого направьте письменный запрос на hello@amorette.ru. Срок рассмотрения — 10
            рабочих дней.
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-serif text-2xl italic text-charcoal">8. Уведомление об инцидентах</h2>
          <p>
            В соответствии с поправками 2025 года к 152-ФЗ Оператор уведомляет
            Роскомнадзор об инцидентах с персональными данными в течение 24 часов с момента
            обнаружения и предоставляет результаты внутреннего расследования в течение 72
            часов.
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-serif text-2xl italic text-charcoal">9. Cookies</h2>
          <p>
            Сайт использует cookies для аналитики и улучшения работы сервиса. Продолжая
            использовать сайт, вы соглашаетесь с их применением. Вы можете отключить
            cookies в настройках браузера.
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-serif text-2xl italic text-charcoal">10. Изменения</h2>
          <p>
            Оператор вправе вносить изменения в настоящую Политику. Актуальная редакция
            всегда доступна на этой странице.
          </p>
        </section>
      </div>
    </div>
  </main>
);

export default Privacy;
