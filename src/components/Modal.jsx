import { createPortal } from 'react-dom';

import { BG_COLOR, BORDER_COLOR, TITLE_COLOR } from '../../utils/colors.js';
import CloseIcon from "../../icons/CloseIcon.jsx"

const Modal = ({ id, subtitle, description, action }) => {
  return (
    <>
      {createPortal(
        <div className={`fixed top-1/2 left-1/3 transform-translate-x-1/2 w-[700px] ${BG_COLOR} border ${BORDER_COLOR} rounded-[10px] p-4 overflow-hidden`} data-blendy-to={id}>
          <div className="flex justify-end pe-2">
            <button className="bg-transparent w-[14px] h-[14px] border-none cursor-pointer" onClick={() => action()}>
              <CloseIcon />
            </button>
          </div>
          <div className="flex justify-between mb-2">
            <h2 className={`text-lg font-semibold ${TITLE_COLOR} m-0`}>{subtitle}</h2>
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