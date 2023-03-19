import React from "react";
import Spinner from "./Spinner";
import WeatherData from "./WeatherData";

function CountryData({ countriesToShow }) {
  let city = [];

  return (
    <>
      <div>
        {countriesToShow.map((country) => {
          const languages = Object.values(country.languages);
          city = country.capital;

          return (
            <div className="flex flex-col items-center">
              <h1 className="text-zinc-50 text-4xl underline mb-2 font-bold">
                {country.name.common}
              </h1>

              <div className="flex">
                <div className=" text-zinc-50 text-xl mb-1 mr-3 font-bold">
                  Capital:
                </div>
                <div className="text-zinc-50 text-xl mb-1 pl-3">
                  {country.capital}
                </div>
              </div>

              <div className="flex">
                <div className="text-zinc-50 text-xl mb-2 font-bold">Area:</div>
                <div className="text-zinc-50 text-xl mb-1 pl-5">
                  {country.area} sq m
                </div>
              </div>

              <h2 className="text-zinc-50 text-xl mb-0.5 font-bold">
                Language(s):
              </h2>
              <ul className="text-zinc-50 text-xl list-disc">
                {languages.map((data) => (
                  <li key={data}> {data} </li>
                ))}
              </ul>
              <img
                src={country.flags.png}
                alt="flag"
                width="250px"
                height="250px"
                className="mt-2"
              ></img>
            </div>
          );
        })}
        <hr className="w-50 mt-3"></hr>
        <WeatherData city={city} />
      </div>
    </>
  );
}

export default CountryData;
