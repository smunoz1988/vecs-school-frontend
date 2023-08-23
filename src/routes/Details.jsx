import { BsPlay } from 'react-icons/bs';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses } from '../redux/slices/coursesSlice';
import { useNavigate } from 'react-router-dom';

const Details = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const coursesData = useSelector((state) => state.courses);
  const course = coursesData.courses.find((course) => course.id === parseInt(id));

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  if (!course) {
    return <div>Loading...</div>; // You can display a loading indicator here
  }

  return (
    <div className="flex flex_col">
      <div className="flex pad3">  
        <div className='img-container w60'>
          <img className='img-details' src={course.photo} alt="course-img" />
        </div>      
        <div className='w40 flex flex_col ai_end gap_1_5'>
          <h3 className='title'>{course.name}</h3>
          <p>{course.description}</p> 
          <ul className="row-list w70 ">
            <li className='flex jc_btw'>
              <p>Teacher</p>
              <p>{course.teacher}</p>
            </li>
            <li className='flex jc_btw'>
              <p>Date</p>
              <p>18 Jul 2023</p>
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
          <button className='reserve-button flex gap_1_5' type="button">
            <SlCalender size={20} />
            Reserve
            <IoIosArrowDropright size={22} />
          </button>
        </div>
      </div>
      <button className='back-button' type="button">
        <BsPlay className='rotated-icon' />
      </button>      
    </div>
  )
}

export default Details  