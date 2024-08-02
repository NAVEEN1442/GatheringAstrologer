import React, { useEffect, useState } from 'react'

import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Spinner from '../Components/Spinner';
import '../Routes/Services.css'
import './Routes.css';



function AstronomyPic(){

  const navigation = useNavigate();
  const[loading,setLoading] = useState(false);
  const API_URL = "https://api.nasa.gov/planetary/apod?api_key=zNPp9fq0aROCFt8pxaQJ3pbI5K2vH5zdGKOpmXQ4"
  const [sdata,setSdata] = useState([]);
 function GoBack(){
    navigation(-1);
 }

  async function fetchAstronomyPicData(){
        setLoading(true);



        const rev = await fetch(API_URL);
        const data = await rev.json();
        console.log("data is")
        console.log(data);
        setSdata(data);
       
        setLoading(false);
  }

  useEffect(()=>{
     fetchAstronomyPicData();
  },[])

  return (

    


    <div className='flex flex-col absolute scroll bg1 overflow-scroll  w-full h-screen gap-8   md:gap-12'>

    <div className=' flex items-center   h-[100px] '>
                <button onClick={GoBack} className=' flex gap-2 text-[20px] items-center ml-5 mt-5 w-[90px] button-30 ' ><FaChevronLeft />Back</button>
                </div>
                
    
              <div className=' flex text-[27px] md:text-[60px] justify-center items-center h-[100px]'>
                Astronomy Picture of The Day
                
              </div>
              <div className=' my-auto mt-[50px] mb-[50px] w-[full] h-[640px]  flex items-center justify-center '>
              {
                loading ? <Spinner/> :   <img className='w-8/12 border-2 p-2 h-full' src={sdata.hdurl} />
              }
              
              </div>
              <div className=' flex text-[20px] md:text-[40px] underline justify-center items-center h-[100px]'>
                {sdata.title}
              </div>
              <div className=' flex flex-col text-[20px] md:text-[30px] justify-center items-center  h-[250px]'>
                <p className='md:w-6/12 w-12/12 flex justify-end items-center   '>Dated : {sdata.date} </p>
                
              </div>
              <div className=' ml-16 flex flex-col mb-10 mt-12 mr-16 md:border-0  text-[15px] md:text-[20px] h-[100px]'><span className='text-[35px]'>Description : </span> {sdata.explanation}
                
               </div>

        
      
    </div>
  );
}

export default AstronomyPic