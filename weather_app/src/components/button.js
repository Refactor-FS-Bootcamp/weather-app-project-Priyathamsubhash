import React from 'react'
export default function Button(props) {
   // let location=useLocation()
  return (
    <>
       
       <button className={props.class} style={props.style} onClick={props.handleClick}>{props.item}</button>   
  
    </>
  )
}
 