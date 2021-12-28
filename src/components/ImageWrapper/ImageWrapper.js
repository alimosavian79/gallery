import React from "react";

export default function ImageWrapper({ showModal, src, title, alt, text }) {
  return (
    <div className="image-wrapper">
      <img src={src} alt={alt} onClick={() => showModal(text, title)}></img>
      <h5>{title}</h5>
    </div>
  );
}
