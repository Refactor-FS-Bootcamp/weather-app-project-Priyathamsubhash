import React, { useState } from 'react'
import CustomLay from './CustomLay';
import Button from './Button'
import Model from '../pages/model';


export default function Header(props) {

  return (
    
    <div className="header">
    <h3>{props.text}</h3>
        {props.item && <Button class="ctybtn" item={props.item} handleClick={props.handleClick}/>}
      

    </div>

   
    
  )
}
