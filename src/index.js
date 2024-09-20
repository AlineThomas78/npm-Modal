import React from "react";
import './Modal.css';

function Modal({ onClose, open }) {
  return open ? (
    <>
      <h1>Modale</h1>

      <div class="modal show">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Modal title</h5>
              <button
                type="button"
                class="close"
                aria-label="Close"
                onClick={onClose}
              >
                &times;
              </button>
            </div>
            <div class="modal-body">
              <p>Employee Created!</p>
            </div>
            <div class="modal-footer">
              <button class="btn btn-secondary" onClick={onClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : null;
}
export default Modal;
