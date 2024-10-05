import "./header.css";
import Navbar from "../nabvar/Navbar.jsx";

function Header() {
  const navbarLinks = [
    { href: "#inicio", label: "inicio" },
    { href: "#sobre-nosotros", label: "Sobre nosotros" },
    { href: "#habitaciones", label: "Habitaciones" },
    { href: "#servicios", label: "Servicios" },
  ];

  return (
    <>
      <div id="inicio">
        <Navbar links={navbarLinks} />
        <p className="text-titulo">
          Descubre la extraordinaria <br />
          Comodidad del Hotel Girasol
        </p>
      </div>
    </>
  );
}

export default Header;
