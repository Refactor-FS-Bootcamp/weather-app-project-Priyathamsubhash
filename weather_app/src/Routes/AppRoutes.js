import React from 'react'
import { Route, Routes } from 'react-router-dom'
//import City from '../components/City'
// import CustomLay from '../components/CustomLay'
//import Home from '../components/Home'
import Model from '../components/Model'
import City from '../pages/City'
import Home from '../pages/Home'

export default function AppRoutes() {
  return (<>
   {/* <CustomLay/> */}
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/city" element={<City/>}/>
   
  </Routes>
  </>
  )
}
