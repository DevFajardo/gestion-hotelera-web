import "./header.css";
import Navbar from "../nabvar/Navbar.jsx";

function Header() {
  return (
    <>
      <div className="hero-contenedor">
        <Navbar />
        <p className="text-titulo">
          Descubre la extraordinaria <br />
          Comodidad del Hotel Girasol
        </p>
      </div>
    </>
  );
}

export default Header;
