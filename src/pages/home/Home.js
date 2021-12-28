import React, { useState } from "react";
import { ImageWrapper, Modal } from "../../components";
import images from "../../constants/images";

export default function Home() {
  const [state, setState] = useState({
    show: false,
    text: "",
  });
  const showModal = (text, title) => {
    setState({ ...state, showModal: true, ModalText: text, ModalTitle: title });
  };
  const hideModal = () => {
    setState({ ...state, showModal: false });
  };
  return (
    <div className="homepage d-flex flex-wrap">
      <Modal
        show={state.showModal}
        hideModal={hideModal}
        text={state.ModalText}
        title={state.ModalTitle}
      />
      {images.map((item) => (
        <ImageWrapper
          key={item.title}
          src={item.url}
          alt={item.alt}
          title={item.title}
          text={item.text}
          showModal={showModal}
        />
      ))}
    </div>
  );
}
