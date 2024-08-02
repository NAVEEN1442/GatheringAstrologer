import React from 'react'
import { FaRegCompass } from "react-icons/fa";
import img1 from './Images/LogoA.jpg'
import img2 from './Images/LogoT.jpg'
import './Main.css'

import { NavLink } from 'react-router-dom';
function Main() {
  return (
    <div className='flex  md:h-[715px] h-[580px] w-full  flex-col md:justify-center justify-start items-center  '>

      <div className=' md:flex flex justify-center items-center   w-11/12 '>
      <div className='flex md:w-[20%] md:h-full w-[220px] h-[220px] justify-center items-center '>
      <img src={img1}  alt='Not Available Due to some error' className='md:w-full md:h-full w-[220px] h-[220px]   ' />
      </div>
        
        <div className=' w-[80%] flex justify-evenly  flex-col '>
          <h2 className=' font-bold text-3xl Big-Font   ml-4'  >Gathering Astrologers</h2>
          <p className=' md:text-[20px] text-[12px]  mt-5 ml-4' >
          Gathering Astrologers is dedicated to bringing you the latest and most accurate information about space.
           Our experts provide insights into celestial events, astronomical discoveries, and cosmic phenomena.
           <span className='md:inline hidden'>
           Stay informed with our in-depth articles and real-time updates from the universe.
           Explore the wonders of space with Gathering Astrologers.
           </span>

            
          </p>
        </div>
      </div>

      <div className='  flex-col mt-5 w-11/12'>
      <div className='flex md:text-[20px] text-[12px] justify-between items-center '>
      <div className='w-[80%]'>
  <p className='inline'>
    At Gathering Astrologers, we offer a range of exciting services for space enthusiasts.
    Enjoy our Astronomy Picture of the Day, where you can discover stunning images of the cosmos.
    <span className='md:inline hidden'>
      Stay updated with the latest Mars weather reports and explore high-resolution pictures from the Mars rover.
      Our platform offers many more features and resources to satisfy your curiosity about the universe.
    </span>
  </p>
</div>

      
        <div className='md:w-[20%]'>
        <img className='md:w-full md:h-full w-[220px] h-[220px] ' alt='Not Available Due to some error' src={img2}/>
        </div>
        

      </div>
        <div className='w-full flex justify-center'>
        <NavLink to="/Services">
      <button className=' h-[80px] button-30 text-xl  mt-5 items-center  gap-2 flex justify-center ' >
              Explore <span className='flex '><FaRegCompass /></span>
        </button>
      </NavLink>
        </div>
      
        
      </div>
    

    </div>
  )
}

export default Main