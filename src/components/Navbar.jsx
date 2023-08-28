import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { logOut } from '../redux/authSlice';
import logo from '../assets/logo.png'
import PropTypes from 'prop-types';

import {
	FaAngleRight,
	FaAngleLeft,
  FaHome,
	FaListAlt,
	FaSignOutAlt,
	FaBars,
  FaFacebookF
} from 'react-icons/fa';

import { 
  TfiGoogle, 
  TfiVimeoAlt, 
  TfiPinterest 
} from "react-icons/tfi";

import { IoCreateSharp } from 'react-icons/io5';
import { BiSolidUserDetail } from 'react-icons/bi';
import { CgUserlane } from 'react-icons/cg';
import { IoLogoTwitter } from "react-icons/io";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const ICON_SIZE = 20;

function Navbar({ visible, show }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleNavbar = () => {
    show(!visible);
  };

  const handleSignOut = (e) => {
    e.preventDefault();
    dispatch(logOut());    
    navigate('/');
    window.location.reload();
  };

  const closeNavbarMobile = () => {
    if (isMobile) {
      show(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      show(false);
    } else {
      show(true)
    }
  }, [isMobile, show]);

	return (
		<>
			<div className="mobile-nav">
				<button
					className="mobile-nav-btn"
					onClick={toggleNavbar}
				>
					<FaBars size={24}  />
				</button>
			</div>
			<nav className={!visible ? "navbar" : ""}>
				<button
					type="button"
					className="nav-btn"
					onClick={toggleNavbar}
				>
					{ !visible
						? <FaAngleRight size={30} /> : <FaAngleLeft size={30} />}
				</button>
				<div>
					<NavLink
						className="logo"
						to="/courses"
						onClick={closeNavbarMobile}
					>
							<img
								src={logo}
								alt="logo"
							/>
					</NavLink>
					<div className="links nav-top">
						<NavLink to="/courses" className="nav-link" onClick={closeNavbarMobile}>
							<FaHome size={ICON_SIZE} />
							<span>Home</span>
						</NavLink>
						<NavLink to="/courses/new" className="nav-link" onClick={closeNavbarMobile}>
							<IoCreateSharp size={ICON_SIZE} />
							<span>Add Course</span>
						</NavLink>
						<NavLink to="/courses/delete-course" className="nav-link" onClick={closeNavbarMobile}>
							<FaListAlt size={ICON_SIZE} />
							<span>All Courses</span> 
						</NavLink>
            <NavLink to="/reservations/new" className="nav-link" onClick={closeNavbarMobile}>
							<CgUserlane size={ICON_SIZE} />
							<span>Reserve</span> 
						</NavLink>
            <NavLink to="/reservations" className="nav-link" onClick={closeNavbarMobile}>
							<BiSolidUserDetail size={ICON_SIZE} />
							<span>Reservations</span> 
						</NavLink>
            <NavLink
            to="/Signout"
            className="nav-link"
            onClick={handleSignOut}
          >
						<FaSignOutAlt size={ICON_SIZE} />
						<span>Logout</span> 
					</NavLink>
					</div>
				</div>

				<div className="links">
          <div className='flex jc_se icon-white pad_right_1'>
            <IoLogoTwitter size={ICON_SIZE} />
            <FaFacebookF size={ICON_SIZE} />
            <TfiGoogle size={ICON_SIZE} />
            <TfiVimeoAlt size={ICON_SIZE} />
            <TfiPinterest size={ICON_SIZE} />
          </div>
          <p style={{fontSize: '0.8em'}}>
            <AiOutlineCopyrightCircle size={15} /> 2023 Microverse final group capstone project.
          </p>
				</div>
			</nav>
		</>
  );
}

Navbar.propTypes = {
  visible: PropTypes.bool.isRequired,
  show: PropTypes.func.isRequired,
};

export default Navbar;
