import React from "react";

export default function ImageWrapper({ showModal, src, title, alt, text }) {
  return (
    <div className="image-wrapper">
      <div className="pic">
        <img src={src} alt={alt} onClick={() => showModal(text, title)} onError={(e) =>e.currentTarget.src = "https://via.placeholder.com/150x200"}></img>
      </div>
      <h5>{title}</h5>
    </div>
  );
}
