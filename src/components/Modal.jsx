import { createPortal } from 'react-dom';

import CloseIcon from "../../icons/CloseIcon.jsx"

const Modal = ({ id, subtitle, description, action }) => {
  return (
    <>
      {createPortal(
        <div className="fixed top-1/2 left-1/3 transform-translate-x-1/2 w-[600px] bg-gray-800 rounded-[10px] p-4 overflow-hidden" data-blendy-to={id}>
          <div className="flex justify-end pe-2">
            <button className="bg-transparent w-[14px] h-[14px] border-none cursor-pointer" onClick={() => action()}>
              <CloseIcon />
            </button>
          </div>
          <div className="flex justify-between">
            <h2 className="text-lg font-semibold text-yellow-600 m-0">{subtitle}</h2>
          </div>
          <div className="text-base text-white/80 text-left">
            <p>{description}</p>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default Modal;