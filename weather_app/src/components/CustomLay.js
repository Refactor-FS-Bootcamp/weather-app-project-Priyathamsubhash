import React from 'react'
import Header from './Header';
import Home from '../pages/Home';
import Sider from './Sider';

export default function CustomLay() {
    const NavItems = [
        {
          ele: "Home",
          id:1
        },
        {
          ele: "City",
          id:2
        }
      ];
  return (
    <div className='custom-lay'>
   
    <Sider  NavItems={NavItems}/>
    
    </div>

  )
}
