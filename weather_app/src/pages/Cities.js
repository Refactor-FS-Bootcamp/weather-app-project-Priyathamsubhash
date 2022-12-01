import React from "react";
import Header from "../components/Header";
// import citylist from "../City Data/citieslist"
export default function City() {
  return (
    <div className="city">
      <Header />
      <div className="cityContent">
        <div className="cityContentHead">
          <h4 className="cityHead">Cities </h4>
          <i class="fa-regular fa-plus plus_symbol"></i>
        </div>
        <hr />
        <div className="cityMain">
          <p>No Cities To Select</p>
        </div>
      </div>
    </div>
  );
}
