
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Routes/Home';
import Services from './Routes/Services';
import AstronomyPic from './Routes/AstronomyPic';
import MarsRover from './Routes/MarsRover';
import MarsWeather from './Routes/MarsWeather';
import Login from './Routes/Login';
import Signup from "./Routes/Signup";


import { AuthProvider } from './Components/AuthContext/AuthContext';



function App() {
  console.log("HI");
  return (
    <div className=' font-CAS overflow-scroll App  text-white flex flex-col background md:w-full overflow-x-hidden h-screen bg-blue-900 '>
  <AuthProvider>

  

  <Routes>
        <Route path="/GatheringAstrologer" element={<Home />}/>
        <Route path="/GatheringAstrologer/Services" element={<Services />}/>
        <Route path='/GatheringAstrologer/AstronomyPic' element={<AstronomyPic/>}/>
        <Route path='/GatheringAstrologer/MarsRover' element={<MarsRover/>}/>
        <Route path='/GatheringAstrologer/MarsWeather' element={<MarsWeather/>}/>
        <Route path='/GatheringAstrologer/login' element={<Login/>}/>
        <Route path='/GatheringAstrologer/signup' element={<Signup/>}/>
      </Routes>
      
  </AuthProvider>

      
    </div>
  );
}


export default App;
