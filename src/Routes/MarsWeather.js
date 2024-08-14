import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft } from "react-icons/fa";
import Spinner from '../Components/Spinner';
import { PiNotepadBold } from "react-icons/pi";


function MarsWeather() {

    const API_URL = "https://mars.nasa.gov/rss/api/?feed=weather&category=insight_temperature&feedtype=json&ver=1.0";
    const[loading,setLoading] = useState(false);
    const [weatherData,setWeatherData] = useState([]);
    const navigation = useNavigate();
    async function fetchWeather(){
      setLoading(true);
      try{
        const rev = await fetch(API_URL);
        const data = await rev.json();
      
       
        const solData = Object.keys(data).slice(0,7).map(key => ({
          sol: key,
          ...data[key]
          
      }));
        setWeatherData(solData);

    
      
       
      }
      catch(error){
        
        setWeatherData([]);
      }
       
        
        setLoading(false);
  }

  useEffect(()=>{
     fetchWeather();
  },[])


  //Date in the Human read format

  function FormatDate(DateString){

    const date = new Date(DateString);
    const options = {
      day : 'numeric',
      month : 'long'
     
    };
  return date.toLocaleDateString('en-US', options);
  }


  useEffect(()=>{
    FormatDate(DateString);
  })
  const DateString ="";
  function GoBack(){
    navigation(-1);
 }

  return (
    <div className=''>
                <div className=' flex items-center justify-between   h-[100px] '>
                <button onClick={GoBack} className='flex gap-2 text-[20px] items-center ml-5 mt-5 w-[90px] button-30  ' ><FaChevronLeft />Back</button>
                <div className=' flex md:text-[16px] text-[8px] font-extrabold text-red-700 items-center gap-1'>
                  <PiNotepadBold />This mission had ended successfully on Dec. 15, 2022
                </div>
                </div>
                <div className='Wet rounded-xl px-3 py-3 flex flex-col gap-6'>
                <div className='flex flex-col gap-8'>
          <h2 className='md:text-[50px] text-black text-[35px] h1-font '>Latest weather at<br/> <span className='h2-font text-[30px] md:text-[40px]'>Elysium Planitia</span> </h2>
          <p className=' text-[15px] md:text-[25px]'>Insight is taking daily weather measurements(temperature,wind,pressure) on the surface of the Mars at Elysium Planitia ,a flat smooth plain near Mars equator</p>
        </div>
        <div className=' gap-6 temp  ' >

        {
          loading ? <Spinner/> : (
              weatherData.map((data,index)=>(
              <div className=' hover:scale-105 flex flex-wrap gap-0 md:gap-5 border-2 border-white p-3 rounded-xl h-[120px] md:h-[200px] w-[170px] wd:w-full bg-gray-500/20 flex-col' key={index}>
              <p className='text-[20px]'>  {" "}
                {data ? FormatDate(data.First_UTC ): "N/A"}
              </p>
              <p className='text-[20px]'> Min  :  {" "}  
                {
                  data.AT ? data.AT.mn : "N/A"
                }
              </p>
              <p className='text-[20px]'>  Max  : {" "} 
                {
                  data.AT ? data.AT.mx : "N/A"
                }
              </p>
            
              </div>)))}
            
        </div>
                </div>
        
        
    </div>
  )
}

export default MarsWeather