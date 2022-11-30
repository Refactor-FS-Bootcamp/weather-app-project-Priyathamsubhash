import React from 'react'
import Sider from './Sider';

export default function CustomLay() {
    const NavItems = [
        {
          ele: "Home"
        },
        {
          ele: "Cities"
        }
      ];
  return (
    <div className='custom-lay'>
   
    <Sider  NavItems={NavItems}/>
                     
    </div>

  )
}
