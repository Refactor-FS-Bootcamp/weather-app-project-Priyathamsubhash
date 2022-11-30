import React from 'react'
import { Route, Routes } from 'react-router-dom'
import City from '../Cities'
import Home from '../Home'

export default function AppRoutes() {
   //sy
  return (<>
   
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/Cities" element={<City/>}/>
  </Routes>
  </>
  )
}
 