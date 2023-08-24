import { Outlet, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchUser } from '../redux/authSlice';

const ProtectedRoute = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);
  
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const authToken = localStorage.getItem('authToken');

  if (loading) return 'Loading...';

  return (
    <>
      {authToken ? (
        <div>
          <Outlet />
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default ProtectedRoute;
