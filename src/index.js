import React from "react";
import "./Modal.css";

function Modal({ onClose, open , title, textContent }) {
  return open ? (
    <div className="custom-modal-overlay">
      <div className="custom-modal">
        <div className="custom-modal-header">
          <h5 className="custom-modal-title">{title} </h5>
          <button
            type="button"
            className="custom-close"
            aria-label="Close"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        <div className="custom-modal-body">
          <p>{textContent}</p>
        </div>
        <div className="custom-modal-footer">
          <button className="custom-btn custom-btn-secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  ) : null;
}

export default Modal;
