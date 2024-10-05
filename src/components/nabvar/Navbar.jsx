import "./navbar.css";
import "/logo-hotel-girasol.png";
import PropTypes from "prop-types";

function Nabvar({ links = [] }) {
  return (
    /*<nav className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-item">
          <a href="#inicio">Inicio</a>
        </li>
        <li className="navbar-item">
          <a href="#sobre-nosotros">Sobre nosotros</a>
        </li>
        <li className="navbar-item">
          <img src="/public/logo-hotel-girasol.png" alt="Hotel El Girasol" />
        </li>
        <li className="navbar-item">
          <a href="#Habitaciones">Habitaciones</a>
        </li>
        <li className="navbar-item">
          <a href="#Servicios">Servicios</a>
        </li>
      </ul>
    </nav>*/
    <nav className="navbar">
      <ul className="navbar-menu">
        {links.slice(0, 2).map((link, index) => (
          <li key={index} className="navbar-item">
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
        <li className="navbar-item">
          <img src="/public/logo-hotel-girasol.png" alt="Hotel El Girasol" />
        </li>
        {links.slice(2).map((link, index) => (
          <li key={index + 2} className="navbar-item">
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// Definición de PropTypes
Nabvar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
};

export default Nabvar;
