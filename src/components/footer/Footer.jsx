import "./footer.css";
import Navbar from "../nabvar/Navbar";

function Footer() {
  const navbarLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#sobre-nosotros", label: "Sobre nosotros" },
    { href: "#", label: "Terminos y condiciones" },
    { href: "#", label: "Politica" },
  ];

  return (
    <footer className="seccion-footer">
      <Navbar links={navbarLinks} />
      <p className="copyright-text">
        ℗ {new Date().getFullYear()} Real Solution. Todos los derechos
        reservados.
      </p>
    </footer>
  );
}

export default Footer;
