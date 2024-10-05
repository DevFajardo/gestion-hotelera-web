import { useContext } from "react";
import { HabitacionesContext } from "./HabitacionesContext";
import Card from "./card";

const Habitaciones = () => {
  const { Habitaciones, HandleOpenModal } = useContext(HabitacionesContext);
  return (
    <div id="habitaciones">
      {Habitaciones.map((habitacion, index) => (
        <Card
          onClick={() => HandleOpenModal(habitacion)}
          key={index}
          habitacion={habitacion}
        />
      ))}
    </div>
  );
};

export default Habitaciones;
