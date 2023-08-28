import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createReservation } from '../redux/slices/reservationsSlice';
import { fetchCourses } from '../redux/slices/coursesSlice';
import { BsPlay } from 'react-icons/bs';
import '../styles/forms.css'

const Reserve = () => {
  const user_id = useSelector((state) => state.auth.auth.id);
  const courses = useSelector((state) => state.courses);
  const token = localStorage.getItem('authToken');

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialCourseId = searchParams.get('courseId'); // Obtén el courseId de los parámetros


  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [course_id, setCourse] = useState('');
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');
  
  const cities = ['New York', 'San Francisco', 'Seattle'];

  useEffect(() => {
    dispatch(fetchCourses(token));
    if (initialCourseId) {
      setCourse(initialCourseId); // Preselecciona el curso si hay un courseId en la URL
    }
  }, [dispatch, token, initialCourseId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (course_id && city && date) {
      dispatch(createReservation({user_id, course_id, city, date}));
      navigate("/reservations")
    } else {
      console.log("All fields are required");
    }
  };

  return (
    <div className='backgroundContainer'>
      <div className='menuContainer'>
        <p onClick={() => navigate('/courses')}><BsPlay className='backItem' /></p>
      </div>
      <div className="formContainer">
        <h3 className='titleReserve'>RESERVE A VECS COURSE</h3>
        <hr />
        <p className='formDescription'>
          Indulge in the wealth of learning opportunities at VECS School, 
          where qualified teachers await to guide your educational journey. 
          From our diverse catalog, select your desired course, input your city, choose a date, 
          and youre set to embark on your educational journey:</p>
        <form
          className="reservationForm"
          onSubmit={handleSubmit}
        >
          <select
            className='selector'
            value={course_id}
            onChange={(e) => setCourse(e.target.value)}
          >
            <option value="" disabled className='option'>Select a course</option>
            {courses.courses.map((course) => (
              <option className='option' key={course.id} value={course.id}>
                {course.name}
              </option>
            ))}
          </select>
          <select
            className='selector'
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <option value="" disabled>Select a city</option>
            {cities.map((city) => (
              <option key={city} value={city} className='option'>
                {city}
              </option>
            ))}
          </select>
          <input
            className='selector'
            type="date"
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <button
            className='buttonForm'
            type="submit">Reserve</button>
        </form>
      </div>
    </div>
  )
}

export default Reserve;
