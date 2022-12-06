import React, { useContext } from 'react'
import Header from '../components/Header'
import Model from './model'
import { useState } from 'react';
import { MyContext } from '../context/appContext';
import toast, { Toaster } from 'react-hot-toast';

export default function City() {
   const context=useContext(MyContext);
   //console.log(context);
   const [sideShow,setSideShow]=useState(false)
   const [sideCity,setSideCity]=useState(null)
   const [showModelCity,setShowModelCity]=useState(false)
   const [selFav,setSelFav]=useState(false)
   const notify = () => toast.success('City Added to favourites ');

   
   const showSideCity=(city)=>{
    setSideShow(true)
    setSideCity(city)
  
   }
   const shwModelCity=()=>{
    setShowModelCity(!showModelCity)
    //setSideCity(city)
  
   }
  //  show Fav Cities start
  //  const showFavouriteCity=(city)=>{
  //   setSelFav(!selFav)
  //   if(!context.favCities.includes(city)){
  //     notify()
  //     context.setFavCities([...context.favCities,city])
    
  //   }
  //   else{
  //    let filterCities= context.favCities.map((c)=>city.id!==c.id)
  //    context.setFavCities(filterCities)
    
  //   }
     
    
  //  }
  //  console.log(context.favCities);
  // //  show Fav Cities end
   
   console.log(context.favCities)
  return ( 
    <div className="cityContainer">
    <div className='city' >
        <Header/>
       <div className='cityContent'>
       <div  className='cityContentHead' >
       <h4 className="cityHead">Cities </h4> 
       <svg className='close-mark' onClick={shwModelCity} viewBox="64 64 896 896" focusable="false" data-icon="plus-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"></path><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path></svg>
      </div> <hr/> 
       
        <div className="cityMain" >
          {context.selectedCities.length>0?<>{context.selectedCities.map((city)=>{
            return <div className="cityNameContentContainer" onClick={()=>showSideCity(city)}><p>{city.name}</p><p>{city.temp}</p></div>
          })}</>
          
          :<p className='citypara' >No city selected</p>}
      
        </div>

        </div>
       </div>
       {sideShow && <div className='citySide'>
        <div className="citySideHead">
        <div  className="citySideName">{sideCity.name}</div>
        <div   >  {/*onClick={()=>showFavouriteCity(sideCity)} */}
        {selFav?<i class="fa-solid fa-star"></i>:<i class="fa-regular fa-star"></i>}
               </div>
        <Toaster/>
        </div>
        <hr/>
        
       <div className='citySideMainContent'>
        <p>Clear with Periodic Clouds</p>
        <div ><b>Temperature</b> : {sideCity.temp}</div>
        <div ><b>Humidity</b> : {sideCity.humidity}</div>
        
       </div>
        </div>
       
       
       
       
       }
       {showModelCity?<Model  handleClick={shwModelCity}/>:<></>}
    </div>
  )
}
