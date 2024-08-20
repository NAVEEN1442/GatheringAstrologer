import React from 'react'
import Information from '../Components/Information';
import Navbar from '../Components/Navbar';
import { GiCubes } from "react-icons/gi";
import APODimg from '../Components/Images/PictureDay.jpg'
import Leftimg from '../Components/Leftimg';
import Rightimg from '../Components/Rightimg';
import { NavLink } from 'react-router-dom';
import './Services.css'
import satellite from '../Components/Images/R_satellite.webp';

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
                            <NavLink to="/AstronomyPic">
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

            <div className='  border-gray-600 border-2 rounded-md h-[5px] mx-auto my-8 w-10/12'></div>

            <div className='flex gap-4 flex-col justify-center items-center'>

                <div className=' text-[40px]'>Ever Heard about <span className=' h1-font text-[50px] text-orange-500' >Satellite</span></div>

                <div className=' justify-center gap-8 items-center flex flex-col'>
                  <div className=' text-gray-600 text-[12px]'>
                  A satellite is an artificial or natural object that orbits a planet or celestial body, used for communication, navigation, observation, or research purposes.
                  </div>
                  <div className='w-9/12 hover:scale-105 transition-all back-satellite border-4 rounded-lg flex items-center justify-evenly '>
                    <div className=' p-6 flex flex-col items-center justify-center gap-20   w-[60%]' >
                          <div className='flex items-center justify-center align-middle' >
                          Tracking various satellites involves monitoring their real-time positions as they orbit the Earth or other celestial bodies. This process uses data from ground
                        stations and satellite networks to update their locations and trajectories continuously.
                          By tracking satellites, we can ensure accurate communication, navigation, and data 
                          collection.
                          </div>


                          <div className='flex gap-4' > <span className='h1-font text-blue-600 text-[25px]'>Let The Tracking </span>
                          <NavLink to="/Satellite">
                          <button className=' flex items-center gap-3 button-30'>Begin<GiCubes /></button>
                          </NavLink>
                            
                          </div>

                          
                      </div>
                      <div className=' border-dotted border-gray-600 border-2 ' ></div>
                    <div className='  w-[30%]'>
                      <img className=' w-[100%]  ' src={satellite} />
                    </div>
                   
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