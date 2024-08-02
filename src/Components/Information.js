import React from 'react'
import img1 from './Images/LogoT.jpg'
import { LuMails } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa6";
import './Information.css'
function Information() {
  return (
        <div id='info' className='w-full md:h-[240px]  px-2 md:flex gap-8 md:gap-0 items-center justify-between'>
        <div className='flex md:items-center justify-between md:w-7/12 '>
                
            <div  className='flex   gap-5 flex-col'>
                <h2 className=' md:text-[35px] text-[25px] Big-Font font-bold '>About Us</h2>
                <p className='md:text-[20px] text-[14px]' >Our mission is to inspire curiosity about the universe<br></br>
                 and foster a vibrant community of amateur and<br/> professional
                  astronomers.
                </p>

            </div>
            <div className='flex    md:gap-5 gap-3 flex-col'>

                <h2 className=' font-bold Big-Font text-[25px] md:text-[35px] mb-3'>Contact</h2>
                <div className=' flex-col md:flex'>
                <a target="_blank" href='https://www.linkedin.com/in/naveen-kumar-2aa920221/'><p className='flex  md:text-[20px] text-[14px]  gap-1 items-center'><span><FaLinkedin /></span>Naveen Kumar</p></a>
     
                <p className='flex md:text-[20px] text-[14px] gap-1 items-center'><span><LuMails />  </span>Skumarnaveen1442@gmail.com</p>
     
                </div>
             
              
                
            </div>
        </div>

            <div>
                <img className='md:block hidden' src={img1} alt='Not Available Due to some error'/>
            </div>
            
        </div>
  );
}

export default Information