import React from 'react'

import { AiFillHome } from "react-icons/ai";

import { motion } from "framer-motion"
import { NavLink } from 'react-router-dom';
import { SlLogin } from "react-icons/sl";
import { useAuth } from '../Components/AuthContext/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";



function Welcome() {

  const { setIsLoggedIn,username,password,setUsername,setPassword ,confirmPassword,setConfirmPassword} = useAuth();

  const navigate = useNavigate();



  const loginHandler = () => {

    if(username.trim() === '' || password.trim() === '' || confirmPassword.trim() ===''){
      
      console.log("in the if")
      toast.error("All the fields are required to be filled");


      console.log("in the toast")
    }
    else if(password === confirmPassword){
      console.log("in the if wala else")
      setIsLoggedIn(true);
     setUsername("");
      navigate("/");
      
    }
    else{
      console.log("in the  else")
      toast.error("Password and Confirm Password doesn't match");
    }

    
    
  };

  return (
    
    <div className=' w-full flex justify-center items-center   gap-4 mx-auto h-screen ' >

    <div className='login flex  border-4 h-[700px]  md:w-10/12 md:h-[600px] bg-slate-900'>
    <div className=' pl-6  md:pl-12'>

<div className=' flex items-center   h-[100px] '>
<NavLink to="/">
<button className=' flex gap-2 text-[20px] items-center ml-5 mt-5 w-[50px] button-30 ' ><AiFillHome /></button>
</NavLink>
          
            </div>
    <div className=' font-extrabold flex flex-col text-[20px] md:text-[40px]'>
        Welcome New User! <span className=' font-extrabold welcome-name text-[30px] md:text-[60px]'>Gathering Astrologers</span> 
    </div>

    <div className=' mt-5  items-center gap-5 flex'>
      <div className=' font-bold text-[15px]  md:text-[30px]  '>
          Username :
      </div>
      <div >
        <input  onChange={(event)=>{
          setUsername(event.target.value);
        }} className='text-black md:ml-28 ml-14 p-2 h-[20px] w-[150px]  md:h-[40px] md:w-[300px] text-[10px]  md:text-[15px] rounded-xl' />
      </div>

    </div>

    <div className='gap-6 items-center mt-3  flex'>
    <div className=' font-bold text-[15px]  md:text-[30px]  ' >
          Password :
      </div>
      <div>
        <input type="password" onChange={(event)=>{
          setPassword(event.target.value);
        }} className='text-black md:ml-28 ml-14 p-2 h-[20px] w-[150px]  md:h-[40px] md:w-[300px] text-[10px]  md:text-[15px] rounded-xl' />
      </div>
    </div>
    <div className='gap-6 items-center mt-3  flex'>
    <div className=' font-bold text-[15px]  md:text-[30px]  ' >
          Confirm Password :
      </div>
      <div>
        <input type="password" onChange={(event)=>{
          setConfirmPassword(event.target.value);
        }} className='text-black p-2 h-[20px] w-[150px]  md:h-[40px] md:w-[300px] text-[10px]  md:text-[15px] rounded-xl' />
      </div>
    </div>
 
    <div className='flex flex-col gap-4 w-10/12 mt-5 justify-center items-center'>
 
    <div><button onClick={loginHandler}  className='button-30 gap-2 flex  ' >SignUp <span><SlLogin /></span></button></div>
  
       
        <NavLink to="/login">
        <div className=' underline cursor-pointer'>
          Already have an account ( LogIn )
        </div>
        </NavLink>
    </div>
  

    
</div>
    </div>
    
        

             
    </div>
  )
}

export default Welcome