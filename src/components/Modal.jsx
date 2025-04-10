import { createPortal } from 'react-dom';

import CloseIcon from "../../icons/CloseIcon.jsx"

const Modal = ({ id, subtitle, description, tags, action }) => {
  return (
    <>
      {createPortal(
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center" data-blendy-to={id}>
          <div className="w-full max-w-[700px] bg-gray-800 border border-gray-600 rounded-[10px] p-4">
            <div className="flex justify-end pe-2">
              <button className="bg-transparent w-[14px] h-[14px] border-none cursor-pointer" onClick={() => action()}>
                <CloseIcon />
              </button>
            </div>
            <div className="flex justify-between mb-2">
              <h2 className="text-lg font-semibold text-blue-200 m-0">{subtitle}</h2>
            </div>
            <div className="text-base text-white/80 text-left">
              <p>{description}</p>
            </div>
            <ul className="flex flex-wrap gap-y-2 my-2 justify-center">
              {
                tags.map((tag, index) => (
                  <li key={index}>
                    <span className="flex gap-x-2 mx-2 rounded-full text-xs py-2 px-2 border border-white/10">
                      <img src={tag.icon} alt={tag.name} />
                      <p class="text-white/80">{tag.name}</p>
                    </span>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default Modal;