import { useLocation } from 'react-router-dom'
import Button from './Button'

export default function Navbar() {
    let location =useLocation(); 
  return (<div className='Nav'>
  <nav >
        <Button class={` btn1 ${location.pathname==="/"? "active": ""}`} item="Home"/>
      <Button class={` btn1 ${location.pathname==="/cities"? "active": ""}`} item="Cities"/>        
        </nav>
 </div>
  )
}
       