import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchCourses } from "../redux/slices/coursesSlice";
import { useNavigate } from "react-router";
import { logOut } from "../redux/authSlice";
import Slider from "../components/Slider";
import Navbar from "../components/Navbar";

const Courses = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const coursesData = useSelector((state) => state.courses);
  const token = localStorage.getItem('authToken');
  
  useEffect(() => {
    dispatch(fetchCourses(token));
  }, [dispatch, token]);

  const handleSignOut = (e) => {
    e.preventDefault();
    dispatch(logOut());
    navigate('/');
  }

  return (
    <>
      <Navbar />
      <div className="pad">
        <div>
          <div className="container-title">
            <h2 className="text_bold">LATEST COURSES</h2>
            <span className="courses-span">Please select a course</span>
            <span className="courses-span">..........................</span>
            {coursesData.courses.length <= 0 && <p className="courses-span">No courses to show</p>}
          </div>
          <div>
            <Slider courses={coursesData.courses}/>
          </div>
        </div>
      </div>
      <button onClick={handleSignOut}>Sign Out</button>
    </>
  )
}

export default Courses
