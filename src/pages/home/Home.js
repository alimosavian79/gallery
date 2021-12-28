import React, { useState } from "react";
import { ImageWrapper, Modal, Header, Footer } from "../../components";
import images from "../../constants/images";

export default function Home() {
  const [state, setState] = useState({
    show: false,
    text: "",
    searchValue: "",
  });
  const showModal = (text, title) => {
    setState({ ...state, showModal: true, ModalText: text, ModalTitle: title });
  };
  const hideModal = () => {
    setState({ ...state, showModal: false });
  };
  const searchImages = (value) => {
    setState({ ...state, searchValue: value });
  };
  return (
    <>
      <Header searchImages={searchImages} />
      {images.filter((item) => item.title.includes(state.searchValue))
        .length ? (
        <article className="homepage">
          <Modal
            show={state.showModal}
            hideModal={hideModal}
            text={state.ModalText}
            title={state.ModalTitle}
          />
          {images
            .filter((item) => item.title.includes(state.searchValue))
            .map((item, index) => (
              <ImageWrapper
                key={index}
                src={item.url}
                alt={item.alt}
                title={item.title}
                text={item.text}
                showModal={showModal}
              />
            ))}
        </article>
      ) : (
        <div className="notFound">
          <i className="fa fa-search" aria-hidden="true"></i>
          <p>
            sorry, we couldn't find any pictures related to your search :(
            <br />
            try searching something else.
          </p>
        </div>
      )}
      <Footer />
    </>
  );
}
