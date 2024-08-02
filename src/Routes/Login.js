import React from 'react'

import { AiFillHome } from "react-icons/ai";

import { NavLink, useNavigate } from 'react-router-dom';

import { SlLogin } from "react-icons/sl";

import { useAuth } from '../Components/AuthContext/AuthContext';
import { toast } from "react-toastify";

function Login() {

  const { setIsLoggedIn,username,password,setUsername,setPassword } = useAuth();

  const navigate = useNavigate();

  const loginHandler = () => {
    console.log(username);

    if(username.trim() === '' || password.trim() === ''){
      
      console.log("in the if")
      toast.error("Both the fields are required to be filled");


      console.log("in the toast")
    }
    else{
      console.log("in the else")
      setIsLoggedIn(true);
      setUsername("");
      navigate("/");
     
      
    }
   

   
  };

  return (
    <div className=' w-full flex justify-center items-center   gap-4 mx-auto h-screen  ' >
    <div className='login flex  border-4 h-[700px]  md:w-10/12 md:h-[600px] bg-slate-900 '>


    <div className=' pl-6  md:pl-12'>

<div className=' flex items-center   h-[100px] '>
<NavLink to="/">
<button className=' flex gap-2 text-[20px] items-center ml-5 mt-5 w-[50px] button-30 ' ><AiFillHome /></button>
</NavLink>
            </div>
    <div className=' font-extrabold flex flex-col text-[20px] md:text-[40px]'>
        Welcome Back! <span className=' font-extrabold welcome-name text-[30px] md:text-[60px]'>Gathering Astrologers</span> 
    </div>

    <div className=' mt-5  items-center gap-5 flex'>
      <div className=' font-bold text-[15px]  md:text-[30px] '>
          Username :
      </div>
      <div >
        <input onChange={(event)=>{
          setUsername(event.target.value);
        }} name='user' className='text-black p-2 h-[20px] w-[150px]  md:h-[40px] md:w-[300px] text-[10px]  md:text-[15px] rounded-xl' />
      </div>

      

    </div>

    <div className='gap-6 items-center mt-3  flex'>
    <div className=' font-bold  text-[15px]  md:text-[30px] ' >
          Password :
      </div>
      <div>
        <input type="password" onChange={(event)=>{
          setPassword(event.target.value);
        }} name='Pass'  className='text-black p-2 h-[20px] w-[150px]  md:h-[40px] md:w-[300px]  text-[10px]  md:text-[15px] rounded-xl' />
      </div>
    </div>

    
    
    <div className='flex flex-col gap-4 w-10/12 mt-5 justify-center items-center'>

   
    <div><button onClick={loginHandler} className='button-30 gap-2 flex  ' >LogIn <span><SlLogin /></span></button></div>
  
   
  
    
        
        <NavLink to="/signup">
        <div className=' underline cursor-pointer'>
          I don't have an account (Sign Up)!
        </div>
        </NavLink>
       
    </div>
    

    
</div>


    </div>
    
    
        

             
    </div>
  )
}

export default Login