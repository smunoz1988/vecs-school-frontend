import { Routes, Route } from 'react-router-dom';

import AuthLayout from './layouts/AuthLayout';
import ProtectedRoute from './layouts/ProtectedRoute';

import Login from './routes/Login';
import Signup from './routes/Signup';
import Courses from './routes/Courses';
import Details from './routes/Details';
import Reserve from './routes/Reserve';
import Reservations from './routes/Reservations';
import AddCourse from './routes/AddCourse';
import DeleteCourse from './routes/DeleteCourse';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path='signup' element={<Signup />} />
        </Route>

        <Route path="/courses" element={<ProtectedRoute />}>
          <Route index element={<Courses />} />
          <Route path=":id" element={<Details />} />
          <Route path="new" element={<AddCourse />} />
          <Route path="delete-course" element={<DeleteCourse />} />
        </Route>

        <Route path="/reservations" element={<ProtectedRoute />}>
          <Route index element={<Reservations />} />
          <Route path="new" element={<Reserve />} />
        </Route>
      </Routes>
    </>
  );
}

export default App
