import { useEffect, useRef, useState } from 'react';
import { createBlendy } from 'blendy';

import Modal from './Modal.jsx';

const Card = ({ id, title, subtitle, resume, description, date, tags }) => {
  const blendyRef = useRef(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    blendyRef.current = createBlendy({ animation: 'dynamic' });
  }, []);

  const openModal = () => {
    document.body.style.overflow = 'hidden';
    document.body.firstChild.style.pointerEvents = 'none';
    setShowModal(true);
    if (blendyRef.current) {
      blendyRef.current.toggle(id);
    }
  };

  const closeModal = () => {
    document.body.style.overflow = '';
    document.body.firstChild.style.pointerEvents = '';
    if (blendyRef.current) {
      blendyRef.current.untoggle(id, () => {
        setShowModal(false);
      });
    }
  };

  return (
    <div className={`rounded-lg p-4 bg-gray-800 border border-gray-600 border-t-2 border-t-blue-200 hover:scale-105 transition`}>
      {showModal && <Modal id={id} subtitle={subtitle} tags={tags} description={description} action={closeModal} />}
      <button data-blendy-from={id} onClick={openModal}>
        <div className="flex flex-col md:flex-row items-start md:items-center mb-3">
          <h3 className="text-lg font-semibold text-blue-200">
            {title}
          </h3>
          <time className="block text-sm font-semibold text-white/80 md:ml-auto">
            {date}
          </time>
        </div>
        <p className="text-base text-white/80 text-left">
          {resume}
        </p>
      </button>
    </div>
  );
};

export default Card;