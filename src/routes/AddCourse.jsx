import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createCourse } from '../redux/slices/coursesSlice';


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
  }

  return (
      <div className="form-container">
        <h2 className="title">ADD NEW COURSE</h2>
        <form className="flex flex_col w70 form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" onChange={(e) => setName(e.target.value)} />
          <textarea name="description" rows="5" aria-label="description" placeholder="Description" onChange={(e) => setDescription(e.target.value)}></textarea>
          <input type="text" name="photo" placeholder="Photo" onChange={(e) => setPhoto(e.target.value)} />
          <input type="text" name="price" placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
          <input type="text" name="teacher" placeholder="Teacher" onChange={(e) => setTeacher(e.target.value)} />
          <button className="form-submit" type="submit">Add Course</button>
        </form>
      </div>
  )
}

export default AddCourse
