import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "./components/Cards/Cards";
import Pagination from "./components/Pagination/Pagination";
import "./index.css";
import Filters from "./components/Filters/Filters";
import Search from "./components/Search/Search";


function App() {

  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState("");
  const [fetchedData, updateFetchedData] = useState([]);
  const { info, results } = fetchedData;

  console.log(results);

  const initialUrl = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(initialUrl).then((response) => response.json());
      updateFetchedData(data);
    })();
  }, [initialUrl]);

  return (
    <>
      <h1 className='text-center ubuntu my-4'>
        {"Rick & Morty"}
        <span className='text-info ubuntu'> Wiki</span>
      </h1>

      <Search setPageNumber={setPageNumber} setSearch={setSearch} />

      <div className='container'>
        <div className='row'>
          <Filters />
          <div className='col-8'>
            <div className='row'>
              <Cards results={results} />
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
