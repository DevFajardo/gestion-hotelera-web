import { useState, createContext } from "react";
const HabitacionesContext = createContext();

const habitaciones = [
    {numero: 1, nombre: "Doble", precio: 100, descripcion: "Habitacion con vista al mar", imagen: "https://via.placeholder.com/150"},
    {numero: 2, nombre: "Estandar", precio: 200, descripcion: "Habitacion con vista al mar", imagen: "https://via.placeholder.com/150"},
    {numero: 3, nombre: "Suite", precio: 300, descripcion: "Habitacion con vista al mar", imagen: "https://via.placeholder.com/150"},
    {numero: 4, nombre: "Doble", precio: 400, descripcion: "Habitacion con vista al mar", imagen: "https://via.placeholder.com/150"},
    {numero: 5, nombre: "Estandar", precio: 500, descripcion: "Habitacion con vista al mar", imagen: "https://via.placeholder.com/150"},
]

const HabitacionesContextProvider = ({ children }) => {
    const [Habitaciones, setHabitaciones] = useState(habitaciones);
    const [isOpen, setIsOpen] = useState(false);
    const [habitacion, setHabitacion] = useState({});

    const HandleOpenModal = (habitacion) => {
        setIsOpen(true);
        setHabitacion(habitacion);
    }

    return (
        <HabitacionesContext.Provider value={{ Habitaciones, setHabitaciones, isOpen, setIsOpen, HandleOpenModal, habitacion }}>
            {children}
        </HabitacionesContext.Provider>
    )
}

export { HabitacionesContext, HabitacionesContextProvider };