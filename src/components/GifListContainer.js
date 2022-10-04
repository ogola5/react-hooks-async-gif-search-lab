import React, { useEffect, useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";
function GifListContainer() {
  const [gifs, setGifs] = useState([]);
  const [search, setSearch] = useState("dolphin");


  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=LKEZm2hgx03Yzevhn3imeZFbldgG1yH5&rating=g`
    )
      .then((r) => r.json())
      .then((data) => {
        const firsthree = data.data.slice(0, 3);
        setGifs(firsthree);
      });
  }, [search]);

  return (
    <div>
      <GifSearch search={search} setSearch={setSearch} />
      {gifs.map((gif) => (
        <ul>
          <GifList key={gif.id} gif={gif} />
        </ul>
      ))}
    </div>
  );
}

export default GifListContainer;