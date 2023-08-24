import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { startLoading, stopLoading, fetchUser } from '../redux/authSlice';
import Alert from '../components/Alert';

const Login = () => {
  
  const API_URL = 'http://127.0.0.1:3000';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState({});
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();

    if ([email, password].includes('')) {
      setAlert({
        msg: 'All fields are required',
        error: true
      });
      return;
    }

    try {
      dispatch(startLoading());

      const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: {
            email: email,
            password: password,
          },
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setAlert({});
        const token = response.headers.get('Authorization').replace('Bearer ', '');
        localStorage.setItem('authToken', token);
        dispatch(fetchUser());
        navigate('/courses');
      } else {
        setAlert({
          msg: data.error,
          error: true,
        });
      }
    } catch (error) {
      console.error(error);
      setAlert({
        msg: 'An error occurred',
        error: true,
      });
    } finally {
      dispatch(stopLoading());
    }
  };

  useEffect(() => {
    setAlert({});
  }, [email, password]);

  const { msg } = alert;

  return (
    <div className="form-container">
      <p onClick={() => navigate('/')}>Back</p>
      <h2 className="title">Login</h2>
      {msg && <Alert alert={alert} />}
      <form
        className="flex flex_col w70 form"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="form-submit" type="submit">Login</button>
      </form>
      <div>
        <span>Don&apos;t have an account? </span>
        <Link to="/Signup">Create an account</Link>
      </div>
    </div>
  );
};

export default Login;
