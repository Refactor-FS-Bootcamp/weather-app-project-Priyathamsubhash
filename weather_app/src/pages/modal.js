import React from "react";
import { useState } from "react";
import { Cities } from "../CityData/citieslist";
import Header from "../components/Header";
import Home from "./Home";
export default function Model() {
  const [search, setSearch] = useState("");
  const [cities, setCities] = useState(Cities);
  const [selectedCities, setSelectedCities] = useState([]);

  const searchChange = (e) => {
    setSearch(e.target.value);
    const filterCities = Cities.filter((city) => {
      if (!selectedCities.includes(city)) {
        return city.name.toLowerCase().includes(e.target.value.toLowerCase());
      }
    });
    setCities(filterCities);
  };
  const addCity = (city) => {
    const filterCities = cities.filter((c) => city.id !== c.id);
    setCities(filterCities);
    setSelectedCities([...selectedCities, city]);
    console.log(selectedCities);
  };

  return (
    <>
      <div className="model-wrapper">
        <Header />
        <div className="model-content">
          <div className="model-header">
            <h6>Add city Model </h6>
            <i class="fa-solid fa-xmark x-mark"></i>
            <hr />
          </div>
          <input
            className="search"
            onChange={searchChange}
            value={search}
            placeholder="search city"
          />
          <hr />
          <div className="city-content">
            {cities.map((city) => {
              //  if(!selectedCities.includes(city)){
              return (
                <div>
                  <div
                    onClick={() => addCity(city)}
                    className="cityNameContent"
                  >
                    <p style={{ marginTop: "10px" }}>{city.name}</p>
                    <svg
                      viewBox="64 64 896 896"
                      focusable="false"
                      data-icon="plus-circle"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"></path>
                      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                    </svg>
                  </div>
                </div>
              );
              // }
            })}
          </div>
        </div>
      </div>
    </>
  );
}
