import React from "react";

export default function Modal({ show, hideModal, text, title }) {
  return (
    <div className={`modal ${show ? "show" : ""}`}>
      <div className="black-outline" onClick={() => hideModal()}></div>
      <div className="modal-body">
        <h3>{title}</h3>
        <p>{text}</p>
        <button onClick={() => hideModal()}>Done!</button>
      </div>
    </div>
  );
}
