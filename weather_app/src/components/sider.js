import Button from "./button";
import {useState} from "react"
const Sider = () => {
  const [initial,setstyle]=useState('home')
    const style={
      styleHome:{
        backgroundColor:initial==='home'?'orange':'',
        color:initial==='home'?'blue':''
      },
      styleCity:{
        backgroundColor:initial==='cities'?'orange':'',
        color:initial==='cities'?'blue':''
      }
    }
    const homeClk=(e)=>{

      e.preventDefault();

      return setstyle('home')
    }
    const CityClk=(e)=>{

      e.preventDefault();

      return setstyle('cities')
    }
    return (
      <div className="sider">
      
      <a href="/"><Button buttonname="Home" class="Home" style={style.styleHome}  handleClick={homeClk}/></a>
      <a href="/"><Button buttonname="Cities" class="cities" style={style.styleCity} handleClick={CityClk}/></a>
 
      </div>
    );
  };
  
  export default Sider;
