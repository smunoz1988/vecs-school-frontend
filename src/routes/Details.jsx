import { BsPlay } from 'react-icons/bs';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses } from '../redux/slices/coursesSlice';
import { useNavigate } from 'react-router-dom';
import courseImg from '../assets/course.jpg';
import isValidUrl from '../utils/isValidUrl';

const Details = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const coursesData = useSelector((state) => state.courses);
  const course = coursesData.courses.find((course) => course.id === parseInt(id));
  const token = localStorage.getItem('authToken');
  

  useEffect(() => {
    dispatch(fetchCourses(token));
  }, [dispatch, token]);

  if (!course) {
    return <div>Loading...</div>; // You can display a loading indicator here
  }

  return (
    <div className="flex flex_col jc_center w100 overflow-x">
      <div className="flex pad1 details-mobile">  
        <div className='img-container w55'>
          <img className='img-details' src = {isValidUrl(course.photo) ? course.photo : courseImg} alt="course-img" />
        </div>      
        <div className='w45 flex flex_col ai_end gap_1_5 info-mobile'>
          <h3 className='title'>{course.name}</h3>
          <p className='description'>{course.description}</p> 
          <ul className="row-list w100">
            <li className='flex jc_btw'>
              <p>Teacher</p>
              <p>{course.teacher}</p>
            </li>
            <li className='flex jc_btw'>
              <p>Mode</p>
              <p>Online / On site</p>
            </li>
            <li className='flex jc_btw'>
              <p>Course Fee</p>
              <p>$ {course.price}</p>
            </li>
          </ul> 
          <button className='more-button' type="button" onClick={() => navigate("/courses")}>
            DISCOVER MORE COURSES
            <IoIosArrowForward className='yellow' size={18} />
          </button>
          <button className='reserve-button flex gap_1_5' type="button" onClick={() => navigate(`/reservations/new?courseId=${course.id}&courseName=${course.name}`)}>
            <SlCalender size={20} />
            Reserve
            <IoIosArrowDropright size={22} />
          </button>
        </div>
      </div>
      <button className='prev-button next-prev-button' type="button" onClick={() => navigate("/courses")}>
        <BsPlay className='rotated-icon' />
      </button>      
    </div>
  )
}

export default Details  