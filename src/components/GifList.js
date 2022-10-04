
import React from "react";

function GifList({ gif }) {
  return (
    <li>
      <img src={gif.images.original.url} alt="gif" />
    </li>
  );
}

export default GifList;