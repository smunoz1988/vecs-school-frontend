import { Navigate, Route, Routes } from 'react-router-dom';
import Courses from './routes/Courses';
import Details from './routes/Details';
import Reserve from './routes/Reserve';
import Reservations from './routes/Reservations';
import AddCourse from './routes/AddCourse';
import DeleteCourse from './routes/DeleteCourse';
import Login from './routes/Login';
import Signup from './routes/Signup';
import AuthLayout from './layouts/AuthLayout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path='signup' element={<Signup />} />
        </Route>


        <Route path="/Courses" element={<Courses />} />
        <Route path="/Details" element={<Details />} />
        <Route path="/Reserve" element={<Reserve />} />
        <Route path="/Reservations" element={<Reservations />} />
        <Route path="/AddCourse" element={<AddCourse />} />
        <Route path="/DeleteCourse" element={<DeleteCourse />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </>
  )
}

export default App
