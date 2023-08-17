import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css'
import Courses from './routes/Courses';
import Reserve from './routes/Reserve';
import Reservations from './routes/Reservations';
import AddCourse from './routes/AddCourse';
import DeleteCourse from './routes/DeleteCourse';
import Signin from './routes/Signin';
import Signup from './routes/Signup';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Routes>
        <Route path="/Courses" element={<Courses />} />
        <Route path="/Reserve" element={<Reserve />} />
        <Route path="/Reservations" element={<Reservations />} />
        <Route path="/AddCourse" element={<AddCourse />} />
        <Route path="/DeleteCourse" element={<DeleteCourse />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/" element={<Navigate to="/Courses" />} />
      </Routes>
    </>
  )
}

export default App
