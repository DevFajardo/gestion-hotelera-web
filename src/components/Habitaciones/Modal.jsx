import Modal from 'react-modal';
import { useContext } from 'react';
import { HabitacionesContext } from './HabitacionesContext';
import './styles/Modal.css';

Modal.setAppElement('#root');

const ModalHabitacion = () => {
    const { isOpen, setIsOpen, habitacion } = useContext(HabitacionesContext);
    const { numero, nombre, precio, descripcion, imagen } = habitacion || {};

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={() => setIsOpen(false)}
            className="modal-content"
            overlayClassName="modal-overlay"
        >
            <div className="modal-container">
                <div className="modal-image">
                    <img src={imagen} alt={nombre} />
                </div>
                <div className="modal-main">
                    <div className="modal-body">
                        <h3>{nombre}</h3>
                        <h1>Habitación #{numero}</h1>
                        <p id="texto-description">{descripcion}</p>
                        <div className="price-container">
                            <p className='price-text'>Precio: ${precio}</p>
                            <span className='price-text'>/noche</span>
                        </div>
                    </div>
                    <div className="button-container">
                        <button className="cerrar-btn" onClick={() => setIsOpen(false)}>Cerrar</button>
                        <button className="reservar-btn" onClick={() => console.log('reserva')}>Reservar</button>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default ModalHabitacion;
