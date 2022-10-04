
import React, { useState } from "react";

function GifSearch({ setSearch }) {
  const [input, setInput] = useState("");

  return (
    <div>
      <label htmlFor="search">Enter a Search Term:</label>
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        type="text"
        name="search"
        placeholder="Search for a gif"
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          setSearch(input);
          setInput("");
        }}
        type="submit"
      >
        Find Gifs
      </button>
    </div>
  );
}

export default GifSearch;