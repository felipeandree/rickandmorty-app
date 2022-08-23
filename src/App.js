import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "./components/Cards/Cards";
import Pagination from "./components/Pagination/Pagination";
import "./index.css";
import Filters from "./components/Filters/Filters";
import Search from "./components/Search/Search";
// import { info } from "sass";

function App() {
  // const [characters, setCharacters] = useState([]);
  // const [info, setInfo] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState("");
  const [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;

  console.log(results);

  const initialUrl = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(initialUrl).then((response) => response.json());
      updateFetchedData(data)
        //  .then( (data) => {
        //    setCharacters(data.results);
        //   //  setInfo(data.info);
        //    setPageNumber(data.info);
        //   })
        // .catch((error) => console.log(error));
    })();
  }, [initialUrl]);

  return (
    <>
      <h1 className='text-center ubuntu my-4'>
        {" "}
        Rick and Morty
        <span className='text-info ubuntu'> Wiki</span>
      </h1>

      <Search setPageNumber={setPageNumber} setSearch={setSearch} />

      <div className='container'>
        <div className='row'>
          <div className='col-3'>
            <Filters />
          </div>
          <div className='col-8'>
            <div className='row'>
              <Cards results={results} />
              {/* <Characters characters={characters} /> */}
            </div>
          </div>
        </div>

        <Pagination
          info={info}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      </div>
    </>
  );
}

export default App;
