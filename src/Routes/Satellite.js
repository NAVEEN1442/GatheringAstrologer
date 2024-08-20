import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { satelliteData } from '../Services/operations/satelliteAPI';
import Spinner from '../Components/Spinner';
import SatelliteMap from '../Components/SatelliteMap';
import { IoReturnUpBackOutline } from "react-icons/io5";

function Satellite() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const[loading,setLoading] = useState(false);
    const[currentTime,setCurrentTime] = useState(null)

    const [finalData,setFinalData] = useState(
        {
            name:[],
            satID:[],
            date:[],


        }
    );

    const [specificData,setSpecificData] = useState(
        {
            name:"",
            satelliteId:"",
            line1:"",
            line2:"",

        }
    );


    useEffect(()=>{
        const interval = setInterval(()=>{
            const time = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(new Date());
            setCurrentTime(time);
        },1000)

        return () => clearInterval(interval)
        
    },[])

  
    let fetchDataByID = async(satID) =>{
        setLoading(true);
        console.log("satid",satID);
         const response = await dispatch(satelliteData(satID,navigate));

         setSpecificData({
            name:response.data.name,
            satelliteId:response.data.satelliteId,
            line1:response.data.line1,
            line2:response.data.line2,
         })

        console.log("res",response);
        console.log("sdata",specificData);
        setLoading(false);
    }

    const fetchData = async()=>{
        setLoading(true);
        const response = await dispatch(satelliteData(null,navigate));   
        console.log(response);

        if(response && response.data && response.data.member ){
           const names = response.data.member.map((item)=> item.name)
           const satIDs = response.data.member.map((item)=> item.satelliteId)
           const dates = response.data.member.map((item)=> item.date)

           
        setFinalData({
            name:names,
            satID:satIDs,
            date:dates,
        })
        
      
        }

        setLoading(false);
    }

    useEffect(()=>{
        fetchData();
    },[])




  return (
    <div className='w-full my-12 px-6 flex flex-col gap-10 h-screen'>

    <NavLink to="/Services">
        <button className='button-67'>
        <IoReturnUpBackOutline />
        </button>
    </NavLink>

        {/* DATA FROM THE API - BUTTONS(NAME OF THE SATELLITE) */}

        <div className=' mx-auto  justify-center items-center w-10/12 h-[50%]  flex flex-wrap  gap-6' > 
         
            {
                loading ? <Spinner/> : 

                
                        finalData.name.map((item,index)=>(
                        <div key={index} className=' max-h-14'>
                            <button onClick={()=>{fetchDataByID(finalData.satID[index])}} className='button-30 ' >
                            
                                    {item}
                            </button>
                    </div>
                    ))
                
            }
            
        </div>

        {/* DATA FROM THE SPECIFIC API */}


            {
                specificData.name.length === 0 ? (
                    <></>
                ) : (
                    <div>          

                         
                                <div className=' border-4 p-2 mt-8 '>
                                <SatelliteMap line1={specificData.line1} line2={specificData.line2} />
                                </div>

                                <div>
                                    Satellite Position on {currentTime}
                                </div>
                    </div>
                    
                )


                
            }



    </div>
  )
}

export default Satellite