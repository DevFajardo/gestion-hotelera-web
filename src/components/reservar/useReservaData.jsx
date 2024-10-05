import {useState} from 'react';

export const useReservaData = () => {
    const [reservaData, setReservaData] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        correo: '',
        tipoDocumento: '',
        numeroDocumento: '',
        fechaLlegada: '',
        fechaSalida: ''
    });

    const handleChange = (e) => {
        setReservaData({
            ...reservaData,
            [e.target.name]: e.target.value
        });
    };

    return {reservaData, handleChange};
}