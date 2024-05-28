import React from 'react';
import './GenericModale.css';

const GenericModale = ({ show, handleClose, children }) => {
  return (
    <div className={`generic-modal ${show ? 'show' : ''}`} onClick={handleClose}>
      <div className="generic-modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={handleClose}>&times;</span>
        {children}
      </div>
    </div>
  );
};

export default GenericModale;
