import { Link } from "react-router-dom";

const Consent = () => (
  <main className="min-h-screen bg-cream py-24 md:py-32">
    <div className="container mx-auto max-w-3xl px-6">
      <Link to="/" className="mb-8 inline-block font-sans text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-primary">
        ← На главную
      </Link>
      <h1 className="mb-8 font-serif text-4xl italic text-charcoal md:text-5xl">
        Согласие на обработку персональных данных
      </h1>
      <div className="space-y-6 font-sans text-sm leading-relaxed text-charcoal/80">
        <p>
          Отправляя форму на сайте, я свободно, своей волей и в своём интересе даю
          согласие оператору — свадебному агентству (далее — «Оператор») — на
          обработку моих персональных данных в соответствии с Федеральным законом
          от 27.07.2006 № 152-ФЗ «О персональных данных».
        </p>

        <h2 className="mt-8 font-serif text-2xl italic text-charcoal">Состав данных</h2>
        <p>Фамилия, имя; адрес электронной почты; номер телефона; дата мероприятия; бюджет; текст сообщения; cookies, IP-адрес и иные технические данные.</p>

        <h2 className="mt-8 font-serif text-2xl italic text-charcoal">Цели обработки</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>обработка заявки и обратная связь с пользователем;</li>
          <li>заключение и исполнение договора об оказании услуг;</li>
          <li>информирование об услугах Оператора;</li>
          <li>статистика и улучшение работы сайта.</li>
        </ul>

        <h2 className="mt-8 font-serif text-2xl italic text-charcoal">Действия с данными</h2>
        <p>
          Сбор, запись, систематизация, накопление, хранение, уточнение, извлечение,
          использование, передача (предоставление, доступ), обезличивание,
          блокирование, удаление, уничтожение — как с использованием средств
          автоматизации, так и без них.
        </p>

        <h2 className="mt-8 font-serif text-2xl italic text-charcoal">Срок действия</h2>
        <p>
          Согласие действует с момента отправки формы и до момента его отзыва.
          Согласие может быть отозвано в любой момент путём направления
          письменного уведомления на e-mail Оператора.
        </p>

        <h2 className="mt-8 font-serif text-2xl italic text-charcoal">Подтверждение</h2>
        <p>
          Я подтверждаю, что ознакомлен(а) с{" "}
          <Link to="/privacy" className="text-primary underline-offset-2 hover:underline">
            Политикой конфиденциальности
          </Link>{" "}
          и условиями обработки персональных данных.
        </p>
      </div>
    </div>
  </main>
);

export default Consent;
