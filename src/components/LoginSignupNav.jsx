import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom';
import { BiSolidLogIn, BiSolidUserAccount } from 'react-icons/bi';

const LoginSignupNav = () => {
  const navigate = useNavigate();

  return (
    <div className='login-nav flex jc_btw display_none'>
       <img className='login-logo' src={logo} alt="logo" />
       <div className='flex gap_2'>
        <button
          className="more-button login-nav-text"
          type="submit"
          onClick={() => navigate("/login")}
        >
          <BiSolidLogIn size={24}  /> Login
        </button>
        <button
          className="more-button login-nav-text"
          type="submit"
          onClick={() => navigate("/signup")}
        >
          <BiSolidUserAccount size={24}  /> Signup
        </button>
      </div>
    </div>
  )
}

export default LoginSignupNav