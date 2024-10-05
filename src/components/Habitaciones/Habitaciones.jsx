import { useContext } from "react";
import { HabitacionesContext } from "./HabitacionesContext";
import Card from "./card";

const Habitaciones = () => {
  const { Habitaciones, HandleOpenModal } = useContext(HabitacionesContext);
  return (
    <>
      <h2 className="titulo">Habitaciones</h2>
      <div className="habitaciones">
        {Habitaciones.map((habitacion, index) => (
          <Card
            onClick={() => HandleOpenModal(habitacion)}
            key={index}
            habitacion={habitacion}
          />
        ))}
      </div>
    </>
  );
};

export default Habitaciones;
