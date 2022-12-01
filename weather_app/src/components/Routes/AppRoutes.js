import React from 'react'
import { Route, Routes } from 'react-router-dom'
import City from '../pages/Cities'
import Home from '../pages/Home'

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
 