// import React from 'react'
// import Button from './Button'
import Modal from "../pages/modal";
import React, { useState } from 'react'
//import Button from './Button'
// import Model from './Model';


export default function Header(props) {
  const [showModel,setShowModel]=useState(false);
  const addCity=()=>{
    setShowModel(!showModel);
// console.log("Add city")
  }
  return (
    <>
    <div className="header">
        <h3>{props.text}</h3>
        {/* {props.item && <Button class="ctybtn" item={props.item} handleClick={addCity}/>} */}
      {props.item&& <button className='ctybtn' onClick={addCity}>Add new City</button> }
      
    </div>
    {showModel?<Modal/>:<></>}
        </>
  )
}
           