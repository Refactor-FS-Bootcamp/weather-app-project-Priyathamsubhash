import React from "react";
import CustomLay from "../components/CustomLay";
import Header from "../components/Header";
import { useState } from "react";
import Model from "../pages/model";
//import App1 from './App1';

export default function Home() {
  const [showModel, setShowModel] = useState(false);
  const addcity = () => {
    setShowModel(!showModel);
    console.log("Add city");
  };
  return (
    <div className="home ">
      <div className={showModel ? "activeHeader" : ""}>
        {/* <CustomLay/> */}
        <Header
          text="My Favourite Cities"
          item="Add New City"
          handleClick={addcity}
        />
        <div className="homeContent">
          <p className="para">
            You have not selected any city as a favourite yet
          </p>
        </div>
      </div>
      {showModel ? <Model handleClick={addcity} /> : <></>}
      {/* {showModel?<App1 />:<></>} */}
    </div>
  );
}
