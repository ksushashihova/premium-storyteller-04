const Footer = () => (
  <footer className="bg-dark py-12">
    <div className="container mx-auto px-6 text-center">
      <p className="font-serif text-2xl italic text-primary-foreground/80">Amorette</p>
      <p className="mt-2 font-sans text-xs text-primary-foreground/40">
        © {new Date().getFullYear()} Свадебное агентство Amorette. Все права защищены.
      </p>
    </div>
  </footer>
);

export default Footer;
