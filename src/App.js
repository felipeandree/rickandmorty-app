import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import Characters from "./components/Characters/Characters";
import Pagination from './components/Pagination/Pagination';
import "./index.css"
import Filters from "./components/Filters/Filters";

function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const initialUrl = `https://rickandmortyapi.com/api/character/?page=${info}`;

  const fetchCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((error) => console.log(error));
  };

  const onPrevious = () => {
    fetchCharacters(info.prev);
  }

  const onNext = () => {
    fetchCharacters(info.next);
  }

  useEffect(() => {
    fetchCharacters(initialUrl);
  }, []);

  return (
    <>
      <h1 className="text-center ubuntu my-4"> Rick and Morty
      <span className="text-primary ubuntu"> Wiki</span>
      </h1>

      <div className="container">
      <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
        <div className="row">
          <div className="col-3">
            <Filters/>
          </div>
          <div className="col-8">
          <div className="row">
          <Characters characters={characters} />
          <Characters characters={characters} />
          <Characters characters={characters} />
         
          </div>
          </div>
        </div>
       
       
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      </div>
    </>
  );
}

export default App;
