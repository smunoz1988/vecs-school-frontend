import { useNavigate, Link } from 'react-router-dom';


// add logic to get current user and course to reserve

const Reserve = () => {

  const navigate = useNavigate();
  const [course, setCourse] = useState('');

  const courses = ['React', 'Angular', 'Vue'];

  return (
    <>
    <p onClick={() => navigate('/')}>Back</p>
    <div>RESERVE A COURSE</div>
  </>
  )
}

export default Reserve
