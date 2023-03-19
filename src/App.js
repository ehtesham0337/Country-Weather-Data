import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import Countries from "./Components/Countries";
import CountryData from "./Components/CountryData";
import "./index.css";
import background from "./assets/images/background.jpg";
import Spinner from "./Components/Spinner";
// function ApiData() {
//   return (
//     <div>App</div>
//   )
// }

function App() {
  const [country, setCountry] = useState([]);
  const [countriesToShow, setCountriesToShow] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountry(response.data);
    });
  }, []);

  const searchCountry = (event) => {
    const searching = event.target.value;
    // console.log("Searcing now: ")
    setSearch(searching);
    setCountriesToShow(
      country.filter((countries) =>
        countries.name.common.toLowerCase().includes(searching.toLowerCase())
      )
    );
  };

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        minHeight: "100vh",
        maxWidth: "100%",
        padding: "20px",
      }}
    >
      {/* <div className="flex justify-center pt-3 border-4 border-yellow-500 pb-2 ">
        <p className="pr-2 text-zinc-100 ">Find Countries:</p>
        <input
          className="border-2 border-indigo-800 rounded-md"
          type="text"
          value={search}
          onChange={searchCountry}
        />
      </div> */}
      <div
        class="max-w-sm mx-auto "
        style={{ animationName: "transition", animationDuration: "4s" }}
      >
        <div class="relative flex items-center w-full h-12 rounded-lg shadow-lg bg-white overflow-hidden">
          <div class="grid place-items-center h-full w-12 text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
            type="text"
            id="search"
            placeholder="Search a country..."
            value={search}
            onChange={searchCountry}
          />
        </div>
      </div>

      <div className="flex flex-col items-center mt-4 ">
        <div
          className=" bg-gray-800 px-9 py-5 rounded-xl"
          style={{ animationName: "transition", animationDuration: "4s" }}
        >
          {countriesToShow.length === 0 ? (
            <h1 className="text-white font-bold">
              Please search for a country
            </h1>
          ) : null}

          {countriesToShow.length === 1 ? (
            <CountryData countriesToShow={countriesToShow} />
          ) : null}

          {countriesToShow.length > 10 ? (
            <h1 className="text-white font-bold">
              Too many matches, specify another filter
            </h1>
          ) : countriesToShow.length !== 1 ? (
            <Countries
              countriesToShow={countriesToShow}
              setCountriesToShow={setCountriesToShow}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
