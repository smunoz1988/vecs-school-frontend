import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';


// add logic to get current user and course to reserve

const Reserve = () => {

  const navigate = useNavigate();
  const [course, setCourse] = useState('');
  const [city, setCity] = useState('');
  

  const courses = ['React', 'Angular', 'Vue'];
  const cities = ['New York', 'San Francisco', 'Seattle'];

  return (
    <>
    <p onClick={() => navigate('/')}>Back</p>
    <h3>RESERVE A COURSE</h3>
    <p>Select a course to reserve</p>
    <form>
      <select
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      >
        <option value="">Select a course</option>
        {courses.map((course) => (
          <option key={course} value={course}>
            {course}
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
      <button type="submit">Reserve</button>
    </form>
  </>
  )
}

export default Reserve
