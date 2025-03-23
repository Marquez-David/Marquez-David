import { useEffect, useRef, useState } from 'react';
import { createBlendy } from 'blendy';

import Modal from './Modal.jsx';

const Card = ({ id, title, subtitle, resume, description, date }) => {
  const blendyRef = useRef(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    blendyRef.current = createBlendy({ animation: 'dynamic' });
  }, []);

  const openModal = () => {
    setShowModal(true);
    if (blendyRef.current) {
      blendyRef.current.toggle(id);
    }
  };

  const closeModal = () => {
    if (blendyRef.current) {
      blendyRef.current.untoggle(id, () => {
        setShowModal(false);
      });
    }
  };

  return (
    <>
      {showModal && <Modal id={id} subtitle={subtitle} description={description} action={closeModal} />}
      <button data-blendy-from={id} onClick={openModal}>
        <div className="flex flex-row mb-1 w-[450px] items-center">
          <h3 className="text-lg font-semibold text-yellow-600">
            {title}
          </h3>
          <time className="block text-sm leading-none text-white/80 ml-auto">
            {date}
          </time>
        </div>
        <p className="text-base text-white/80 text-left">
          {resume}
        </p>
      </button>
    </>
  );
};

export default Card;