
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Routes/Home';
import Services from './Routes/Services';
import AstronomyPic from './Routes/AstronomyPic';
import MarsRover from './Routes/MarsRover';
import MarsWeather from './Routes/MarsWeather';
import Login from './Routes/Login';
import Signup from "./Routes/Signup";
import Satellite from './Routes/Satellite';

import { AuthProvider } from './Components/AuthContext/AuthContext';
import OTP from './Routes/OTP';
import PrivateRoute from './Routes/PrivateRoute';



function App() {
 
  return (
    <div className=' font-CAS overflow-scroll App  text-white flex flex-col background md:w-full overflow-x-hidden h-screen bg-blue-900 '>
  <AuthProvider>

  

  <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Services" element={<Services />}/>
        <Route path='/AstronomyPic' element={<AstronomyPic/>}/>
        <Route path='/MarsRover' element={<MarsRover/>}/>
        <Route path='/MarsWeather' element={<MarsWeather/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/verifyEmail' element={<OTP/>}/>
        
        <Route path='/Satellite' element={
          <PrivateRoute>
                <Satellite/>
          </PrivateRoute>
                }/>
  </Routes>
      
  </AuthProvider>

      
    </div>
  );
}


export default App;
