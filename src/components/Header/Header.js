import React from "react";

export default function Header({ searchImages }) {
  return (
    <header>
      <h1>Image gallery </h1>
      <input
        type="text"
        placeholder="search something..."
        maxLength={40}
        onChange={(e) => searchImages(e.currentTarget.value)}
      ></input>
    </header>
  );
}
