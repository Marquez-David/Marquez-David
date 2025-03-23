import { useState } from 'react';
import Card from './Card.jsx';

const Modal = ({ title, date, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <Card title={title} date={date} description={description} action={openModal} />

      {isOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Este es el Modal</h2>
            <p>Contenido del modal...</p>
            <button onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

