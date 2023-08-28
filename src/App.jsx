import { Routes, Route } from 'react-router-dom';
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


function App() {
  const [navVisible, setNavVisible] = useState(false);
  const { isAuth } = useSelector(state => state.auth);

  return (
    <div className={navVisible ? "app page-with-navbar" : 'app'}>
      {isAuth && <Navbar visible={navVisible} show={setNavVisible} />}
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path='signup' element={<Signup />} />
        </Route>

        <Route path="/courses" element={<ProtectedRoute />}>
          <Route index element={
            <div className={!navVisible ? "page" : "page page-with-navbar"}>
              <Courses />
            </div>
          } />
          <Route path=":id" element={
            <div className={!navVisible ? "page" : "page page-with-navbar"}>
              <Details />
            </div>
          } />
          <Route path="new" element={
            <div className={!navVisible ? "page" : "page page-with-navbar"}>
              <AddCourse />
            </div>
          } />
          <Route path="delete-course" element={
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
      </Routes>
    </div>
  );
}

export default App
