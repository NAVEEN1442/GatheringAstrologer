import React, { useEffect, useState } from 'react'
import Spinner from '../Components/Spinner';
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft } from "react-icons/fa";
import rover from '../Components/Images/curiosity.jpg'
import arrow from "../Components/Images/arrow.gif"
function MarsRover() {

    const [marsData,setMarsData] = useState([]);
    const API_URL = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=THOvcchYYgutNIJ3Ja4Q8GHcsK5RdPX5VschjtzD";
    const[loading,setLoading] = useState(false);
    const navigation = useNavigate();
    const [currentIndex,setCurrentIndex] = useState(1);
    const ImagePerPage = 8;

    async function fetchMarsData(){
        setLoading(true);

        try{
            const rev = await fetch(API_URL);
            const data = await rev.json();
            setMarsData(data.photos);
            
        }
        catch(error){
           
            setMarsData([]);
        }
       
        setLoading(false);
    }
    useEffect(()=>{
        fetchMarsData();
    },[])
    useEffect(() => {
      
    }, [marsData]);

    let uniqueCameras = "";
    if (marsData.length > 0) {
        const cameras = marsData[0].rover.cameras;
        uniqueCameras = cameras.reduce((acc, camera, index) => {
            return acc + (index === 0 ? "" : ", ") + camera.full_name;
        }, "");
    }

    let landingdate = "";
    if(marsData.length>0){
         landingdate = marsData[0].rover.landing_date;
       
    }
    let launchdate = "";
    if(marsData.length>0){
        launchdate = marsData[0].rover.launch_date;
      
   }
   let status = "";
   if(marsData.length>0){
       status = marsData[0].rover.status;
     
  }

  function GoBack(){
    navigation(-1);
 }



 const GetImages = marsData.slice(0, currentIndex * ImagePerPage);

 function loadImages(){
    setCurrentIndex((prev)=>prev+1);
 }

  return (
    <div className=' flex flex-col gap-5 ' >
        <div className=' flex items-center   h-[100px] '>
                <button onClick={GoBack} className='flex gap-2 text-[20px] items-center ml-5 mt-5 w-[90px] button-30 ' ><FaChevronLeft />Back</button>
                </div>
        <div className='w-full flex justify-center items-center text-[40px] md:text-[50px] ' >
            Mars Rover
        </div>
        
        <div className='w-full flex justify-center items-center'>
        
            <img className='md:h-[450px] md:w-[750px] md:border-0 border-2 h-[200px] w-[300px] ' src={rover} />
        
        </div>
        <div className='w-full flex ml-3 gap-4 justify-center items-center text-[50px] '>
        <img className='md:h-[150px] md:w-[150px] h-[100px] w-[100px] '  src={arrow} />
        <p className='md:text-[50px] text-[30px]'>
        Curiosity
        </p>
            
            
            <img className='md:h-[150px] md:w-[150px] h-[100px] w-[100px] flip '  src={arrow} />
        </div>
        <div className='w-full flex items-centre flex-col gap-2    text-[22px] md:text-[30px]  '>
        <p>Launch Date : <span className=' text-[16px] md:text-[25px]'>{launchdate}</span> </p>
            <p>Landing Date : <span className='text-[16px] md:text-[25px]'>{landingdate}</span>   </p>
       
            <p>Status : <span className='text-[16px] text-green-500 md:text-[25px]'>{status.toUpperCase()}</span>  </p>
            <p className='border-2 font-extrabold bg-slate-600/30'>Cameras Used : <span className='text-[16px] font-normal md:text-[25px]'>{uniqueCameras}</span>  </p>
        </div>
        
        
        <div className='mx-auto rounded-xl pb-3 flex  flex-wrap gap-8' > 
        
            {
                loading ? <Spinner/> :
                GetImages.map((img)=>(
                    <img className=' border-2 border-white p-2 mx-auto w-[280px] h-[280px]' src={img.img_src} alt={`Mars Rover ${img.rover.name}`} />
                ))
                
            }

            
        
        </div>
    { currentIndex*ImagePerPage < marsData.length &&
    (<div className='w-full flex justify-center items-center' >
       <button className='button-30' onClick={loadImages} >
                View More
            </button>
       </div>)
    }
       

    </div>
  )
}

export default MarsRover