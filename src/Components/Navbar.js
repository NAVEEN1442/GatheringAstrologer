
import img1 from '../Components/Images/LogoT.jpg'
import { NavLink, useNavigate } from 'react-router-dom'
import './Navbar.css'
import { useAuth } from '../Components/AuthContext/AuthContext';
import { logout } from '../Services/operations/authAPI';
import { useDispatch } from 'react-redux';

function Navbar() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = () =>{
    setIsLoggedIn(false)
    dispatch(logout(navigate));
  }

  return (
    <div className=' md:gap-0 gap-40  mx-auto mt-3 text-white justify-evenly font-bold text-[22px] rounded-xl flex items-center w-11/12  '>

    <NavLink to="/">
    <img src={img1} alt='Not Available Due to some error' className=' w-[100px] h-[100px] md:w-[150px] md:h-[150px]' />
    </NavLink>
   
        <div className='md:flex hidden gap-11'>
            <a href='#info'><button>Contact</button></a>
            <a href='#info'><button>About</button></a>
            <NavLink to="/Services">
            <button>Services</button>
            </NavLink>
            
        </div>
        <div>
        {
          isLoggedIn ? (
            <button onClick={logoutHandler} className='button-30'>LogOut</button>

          ) : (
            
            <NavLink to={"/login"} >
            <button className='button-30 w-[120px] md:w-[150px] '>Login/SignUp</button>
            </NavLink>
            
          )
        }

        </div>
        

        
        
        
        
    </div>
  )
}

export default Navbar