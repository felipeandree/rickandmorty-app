import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "./components/Cards/Cards";
import Pagination from "./components/Pagination/Pagination";
import "./index.css";
import Filters from "./components/Filters/Filters";
import Search from "./components/Search/Search";
import Navbar from "./components/Navbar/Navbar";
import CardDetails from "./components/Cards/CardDetails"

import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Episodes from './Pages/Episodes'
import Location from './Pages/Location'

function App(){
  return(
    <Router>
      <div className="App">
      <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:id" element={<CardDetails />}/>

        <Route path="/episodes" element={<Episodes/>}/>
        <Route path="/episodes/:id" element={<CardDetails />}/>
        <Route path="/location" element={<Location/>}/>
        <Route path="/location/:id" element={<CardDetails />}/>
        
      </Routes>
    </Router>
  )
}
const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");

  const [fetchedData, updateFetchedData] = useState([]);
  const { info, results } = fetchedData;

  const initialUrl = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(initialUrl).then((response) => response.json());
      updateFetchedData(data);
    })();
  }, [initialUrl]);

  return (
    <>
      <h1 className="text-center mb-4">Personagens</h1>
      <Search setPageNumber={setPageNumber} setSearch={setSearch} />

      <div className='container'>
        <div className='row'>
          <Filters
            setGender={setGender}
            setStatus={setStatus}
            setSpecies={setSpecies}
            setPageNumber={setPageNumber}
          />
          <div className='col-lg-8 col-12'>
            <div className='row'>
              <Cards page="/" results={results} />
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
