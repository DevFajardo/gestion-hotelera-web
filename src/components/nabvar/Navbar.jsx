import "./navbar.css";
import "/logo-hotel-girasol.png";

function Nabvar() {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-item">
          <a href="#inicio">Inicio</a>
        </li>
        <li className="navbar-item">
          <a href="#sobre-nosotros">Sobre nosotros</a>
        </li>
        <li className="navbar-item">
          <img src="/logo-hotel-girasol.png" alt="Hotel El Girasol" />
        </li>
        <li className="navbar-item">
          <a href="#Habitaciones">Habitaciones</a>
        </li>
        <li className="navbar-item">
          <a href="#Servicios">Servicios</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nabvar;
