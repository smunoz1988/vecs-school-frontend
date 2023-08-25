import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createReservation } from '../redux/slices/reservationsSlice';
import { fetchCourses } from '../redux/slices/coursesSlice';

// add logic to get current user and course to reserve

const Reserve = () => {
  const user_id = useSelector((state) => state.auth.auth.id);
  const courses = useSelector((state) => state.courses);
  const token = localStorage.getItem('authToken');


  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [course_id, setCourse] = useState('');
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');
  
  const cities = ['New York', 'San Francisco', 'Seattle'];

  useEffect(() => {
    dispatch(fetchCourses(token));
  }, [dispatch, token]);

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
    <>
    <p onClick={() => navigate('/')}>Back</p>
    <h3>RESERVE A COURSE</h3>
    <p>Select a course to reserve</p>
    <form
      onSubmit={handleSubmit}
    >
      <select
        value={course_id}
        onChange={(e) => setCourse(e.target.value)}
      >
        <option value="">Select a course</option>
        {courses.courses.map((course) => (
          <option key={course.id} value={course.id}>
            {course.name}
          </option>
        ))}
      </select>
      <select
        value={city}
        onChange={(e) => setCity(e.target.value)}
      >
        <option value="">Select a city</option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
      <input
        type="date"
        placeholder="Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button
        type="submit">Reserve</button>
    </form>
  </>
  )
}

export default Reserve;
