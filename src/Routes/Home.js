import React from 'react'
import Main from '../Components/Main';
import Navbar from '../Components/Navbar';
import Information from '../Components/Information';

function Home() {
  return (
    <div className=' '>
        <Navbar/>
        <Main/>       
        <Information/>  
    </div>
  );
}

export default Home