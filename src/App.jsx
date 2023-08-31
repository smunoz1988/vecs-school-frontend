import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';

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


const App = () => {
  const [navVisible, setNavVisible] = useState(false);
  const { isAuth } = useSelector(state => state.auth);
  const authToken = localStorage.getItem('authToken');

  return (
    <div className={navVisible ? "app page-with-navbar" : 'app'}>
      {authToken && isAuth && <Navbar visible={navVisible} show={setNavVisible} />}
      <Routes>
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/" element={<Navigate to="/courses" />} />
          <Route path="courses" element={
            <div className={!navVisible ? "page" : "page page-with-navbar"}>
              <Courses />
            </div>
          } />
          <Route path="courses/:id" element={
            <div className={!navVisible ? "page" : "page page-with-navbar"}>
              <Details />
            </div>
          } />
          <Route path="courses/new" element={
            <div className={!navVisible ? "page" : "page page-with-navbar"}>
              <AddCourse />
            </div>
          } />
          <Route path="courses/delete-course" element={
            <div className={!navVisible ? "page" : "page page-with-navbar"}>
              <DeleteCourse />
            </div>
          } />
        </Route>

        <Route path="/reservations" element={<ProtectedRoute />}>
          <Route index element={
            <div className={!navVisible ? "page" : "page page-with-navbar"}>
              <Reservations />
            </div>
          } />
          <Route path="new" element={
            <div className={!navVisible ? "page" : "page page-with-navbar"}>
              <Reserve />
            </div>
          } /> 
        </Route>
        <Route path="/login" element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>

        <Route path="/signup" element={<AuthLayout />}>
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App
