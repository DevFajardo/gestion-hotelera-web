import "./styles/card.css";

const Card = ({ habitacion, onClick }) => {
  const { numero, nombre, precio, descripcion, imagen } = habitacion;
  return (
    <div className="card" onClick={onClick}>
      <img src={imagen} alt={nombre} />
      <div className="card-body">
        <h4>{nombre}</h4>
        <h3>Habitación #{numero}</h3>
        <p className="p-desc">{descripcion}</p>
        <div className="precio-container">
          <p className="p-precio">Precio: ${precio}</p>
          <span>/noche</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
