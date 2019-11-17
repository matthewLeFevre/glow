import React from 'react';
import FormField from '../form/FormField';

function Modal({children}) {
  return (
    <div className="ln-modal__shadow">
      <div className="ln-modal">
        {children}
      </div>
    </div>
  );
}

export default Modal;

export function ModalHeader({title, closeModal}) {
  return (
    <header className="ln-modal-header">
      <h2 className="ln-modal-header__title">{title}</h2>
      <button type="button" className="ln-modal-header__close">
        <i className="far fa-times ln-modal-header__icon"/> 
      </button>
    </header>
  );
}

export function ModalFooter({children}) {
  return (
    <footer className="ln-modal-footer">
      {children}
    </footer>
  )
}

export function ModalBody({children}) {
  return(
    <div className="ln-modal-body">
      {children}
    </div>
  );
}

export function ModalUpload() {
  return(
    <div className="ln-modal-upload">
      <form onSubmit={() => {}} className="ln-modal-upload__form" >
        <label className="ln-modal-upload__button" htmlFor="file">
          <p>Upload images here.</p>
          <i class="fal fa-image ln-modal-upload__icon" />
        </label>
        <input type="file" id="file" className="ln-input--file"/>
      </form>
    </div>
  );
}