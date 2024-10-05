import { useState, createContext } from "react";
const HabitacionesContext = createContext();

const imagenes = [
    '/Habitacion1.jpeg',
    '/Habitacion2.jpeg',
    '/Habitacion3.jpeg',
]

const habitacionesSinImagen = [
    {numero: 1, nombre: "Doble", precio: 100, descripcion: "Habitacion con vista al mar"},
    {numero: 2, nombre: "Estandar", precio: 200, descripcion: "Habitacion con vista al mar"},
    {numero: 3, nombre: "Suite", precio: 300, descripcion: "Habitacion con vista al mar"},
    {numero: 4, nombre: "Doble", precio: 400, descripcion: "Habitacion con vista al mar"},
    {numero: 5, nombre: "Estandar", precio: 500, descripcion: "Habitacion con vista al mar"},
    {numero: 6, nombre: "Suite", precio: 600, descripcion: "Habitacion con vista al mar"},
    {numero: 7, nombre: "Doble", precio: 700, descripcion: "Habitacion con vista al mar"},
]

const habitaciones = habitacionesSinImagen.map((habitacion, index) => {
    return {...habitacion, imagen: imagenes[index%imagenes.length]}
})

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