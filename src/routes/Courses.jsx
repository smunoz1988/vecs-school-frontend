import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchCourses } from "../redux/slices/coursesSlice";
import Slider from "../components/Slider";
import { courses } from '../components/courseData'

const Courses = () => {
  const dispatch = useDispatch();
  const coursesData = useSelector((state) => state.courses);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  return (
    <div className="pad">
      <div>
        <div className="container-title">
          <h2 className="text_bold">LATEST COURSES</h2>
          <span className="courses-span">Please select a course</span>
          <span className="courses-span">..........................</span>
        </div>
        <div>
          <Slider courses={coursesData.courses}/>
        </div>
      </div>
    </div>
  )
}

export default Courses
