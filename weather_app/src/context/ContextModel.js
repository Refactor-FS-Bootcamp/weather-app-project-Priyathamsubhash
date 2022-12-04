import React, { useState } from 'react'
import { MyContext } from './appContext'
// import home from '../pages/Home'

export default function ContextModel(props) {
    const [selectedCities,setSelectedCities]=useState([])
    const [favCities,setFavCities]=useState([])

    
  return (
  <MyContext.Provider value={{selectedCities,setSelectedCities,favCities,setFavCities}}>
    {props.children}
  </MyContext.Provider>
  )
}
