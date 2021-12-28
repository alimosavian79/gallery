import React from "react";

export default function Modal({ show, hideModal, text, title }) {
  return (
    <div className={`modal ${show ? "show" : ""}`}>
      <div className="black-outline" onClick={() => hideModal()}></div>
      <div className="modal-body">
        <h3>
          {title}
          <i onClick={() => hideModal()} className="fa fa-times"></i>
        </h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
