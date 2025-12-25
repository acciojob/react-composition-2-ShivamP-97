import React from "react";
import './../styles/App.css';

const Modal = ({show, onClose, children}) => {
  if(!show)return null;
    return (
        <div className="model-overlay" onClick={onClose}>
            <div className="model" onClick={(e)=>e.stopPropagation()}>
                <button className="model-close" onClick={onClose}>Close</button>
                    {children}
            </div>
        </div>
  )
}

export default Modal