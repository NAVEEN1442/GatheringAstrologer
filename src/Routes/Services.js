import React from 'react'
import Information from '../Components/Information';
import Navbar from '../Components/Navbar';
import { GiCubes } from "react-icons/gi";
import APODimg from '../Components/Images/PictureDay.jpg'
import Leftimg from '../Components/Leftimg';
import Rightimg from '../Components/Rightimg';
import { NavLink } from 'react-router-dom';
import './Services.css'

function Services() {

  return (
    <div className='h-screen flex flex-col  w-full'>
            <div>
                    <Navbar/>
            </div>

            <div className='flex p-3 md:gap-3 flex-col  '>
                
                    <div className=' md:h-[238px] h-[180px] flex  w-full '>
                    <div className=' h-full w-[30%]'>
                    <img alt='Not Available Due to some error' className=' rounded-lg w-full  h-full' src={APODimg} />
                    </div>
                        
                        <div className=' backgroundS rounded-md w-[70%] h-full mx-4 flex flex-col md:gap-4 gap-1 my-auto '>
                            <h2 className=' md:text-3xl text-[14px] Big-Font mt-5   '>Astronomy Picture of the Day</h2>
                            <div className='md:text-[16px] text-[9px] mt-3 mb-3 '>
                                The Astronomy Picture of the Day " APOD " features daily images or photographs of our universe,
                                 accompanied by a brief explanation written by a professional astronomer.
                                This platform aims to highlight the beauty and diversity of the cosmos, 
                                fostering public interest in astronomy.
                                
                                
                            </div>
                            <div className='w-full flex items-center text-[12px]  justify-center '>
                            <NavLink to="/GatheringAstrologer/AstronomyPic">
                                <button className='  flex md:w-[150px] md:h-[50px] w-[120px]  button-view  gap-2 items-center justify-center '>View More<GiCubes /> </button>
                            </NavLink>
                            
                            </div>
                            
                        </div>
                    </div>

                    <div className=' flex h-full flex-col justify-center items-center mb-5 gap-3 w-full md:h-[550px]'>
                        <div className='w-9/12  mx-auto mt-2'>
                          <h2 className="flex items-center text-[20px] justify-center Big-Font "  >Be A Martian</h2>
                        </div>
                        
                        <div className='md:w-9/12 w-12/12 flex flex-col  gap-4 md:h-full  mx-auto '>

                        <Leftimg id={1}  />

                        <Rightimg id={2}/>

                       

                        </div>
                    </div>


            </div>


            <div>
                <Information/>
            </div>
    </div>
  );
}

export default Services