import {HabitacionesContextProvider} from "./HabitacionesContext";
import Habitaciones from "./Habitaciones";
import ModalHabitacion from "./Modal";
export default function HabitacionesMain() {
return(
<>
<HabitacionesContextProvider>
<Habitaciones />
<ModalHabitacion />
</HabitacionesContextProvider>
</>
) 

}