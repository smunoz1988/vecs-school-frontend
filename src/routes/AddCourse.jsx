import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createCourse } from '../redux/slices/coursesSlice';
import { BsPlay } from 'react-icons/bs';
import '../styles/forms.css'

const AddCourse = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState('');
  const [price, setPrice] = useState('');
  const [teacher, setTeacher] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(createCourse({name, teacher, price, photo, description}));
    navigate('/Courses')
    window.location.reload();
  }

  return (
    <div className='backgroundContainer w100'>
      <div className='menuContainer'>
        <p onClick={() => navigate('/courses')}><BsPlay className='backItem' /></p>
      </div>
      <div className="formContainer">
        <h2 className="titleReserve">ADD NEW COURSE</h2>
        <hr />
        <form className="reservationForm" onSubmit={handleSubmit}>
          <input required minLength={2} maxLength={25} className='selector' type="text" name="name" placeholder="Name" onChange={(e) => setName(e.target.value)} />
          <input required className='selector' type="text" name="photo" placeholder="Photo" onChange={(e) => setPhoto(e.target.value)} />
          <input required className='selector' type="number" name="price" placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
          <input required minLength={2} maxLength={25} className='selector' type="text" name="teacher" placeholder="Teacher" onChange={(e) => setTeacher(e.target.value)} />
          <textarea required minLength={10} maxLength={500} className='selector' name="description" rows="5" aria-label="description" placeholder="Description" onChange={(e) => setDescription(e.target.value)}></textarea>
          <button className="buttonForm" type="submit">Add Course</button>
        </form>
      </div>
    </div>
  )
}

export default AddCourse
