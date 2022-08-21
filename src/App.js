import React, { useEffect, useState } from "react";
import Characters from "./components/Characters";

function App() {
  const [characters, setCharacters] = useState([]);

  const initialUrl = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchCharacters(initialUrl);
  }, []);

  return (
    <>
      <h1> Rick and Morty</h1>

      <div className="container">
        <Characters characters={characters} />
      </div>
    </>
  );
}

export default App;
