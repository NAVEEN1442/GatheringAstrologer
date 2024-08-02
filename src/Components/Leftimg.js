import React from 'react'
import data from './ServiceData/data'
import { NavLink } from 'react-router-dom';
import '../Routes/Services.css';
import { GiCubes } from "react-icons/gi";



function Leftimg({id}) {

    const item = data.find(item => item.id === id);
    

  return (
    <div className='w-full h-[180px] md:h-[250px] rounded-xl   flex'>
        <div className=' w-[40%] md:w-[30%] background_Mars_Left_Rover rounded-[12px] flex items-end justify-center'>
        <NavLink to="/MarsRover">
        <button className='button-30    md:mb-4 gap-2  w-[150px] h-[50px]' >View More<GiCubes /> </button>
        </NavLink>
            
            
        </div>
        <div className='p-3 background_Mars_Left rounded-xl gap-5 w-[60%] md:w-[70%] flex flex-col'>
        
        <h2 className='Big-Font text-[14px] md:text-3xl '>
        {item ? item.title : 'Title not found'}
        </h2>

        <p className='md:text-[16px] text-[9px]'>
        {item ? item.description : 'description not found'}
        </p>    

               
           
        </div>
    </div>
  )
}

export default Leftimg