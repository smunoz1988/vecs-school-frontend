import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Alert from '../components/Alert';
import LoginSignupNav from '../components/LoginSignupNav';

const Signup = () => {
  const API_URL = 'http://127.0.0.1:3000';

  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState({ msg: '', error: false });

  const handleSubmit = async e => {
    e.preventDefault();

    if ([name, email, password].includes('')) {
      setAlert({
        msg: 'All fields are required',
        error: true
      });
      return;
    }

    if (password.length < 6) {
      setAlert({
        msg: 'Password is too short, minimum 6 characters required',
        error: true
      });
      return;
    }

    setAlert({});

    try {
      // Check if the user already exists
      const responseExistingUsers = await fetch(`${API_URL}/api/v1/users`);
      const existingUsers = await responseExistingUsers.json();

      const userExists = existingUsers.some(user => user.email === email);

      if (userExists) {
        setAlert({
          msg: 'User already exists, please log in.',
          error: true
        });
        return;
      }

      // Create the user in the API
      const response = await fetch(`${API_URL}/signup`, {
        method: 'POST',
        body: JSON.stringify({
          user: {
            name: name,
            email: email,
            password: password
          }
        }),
        headers: { 'Content-Type': 'application/json' }
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        navigate('/');
      } else {
        const errorData = await response.json();
        setAlert({
          msg: errorData.status.message,
          error: true
        });
      }
    } catch (error) {
      console.log(error);
      setAlert({
        msg: 'An error occurred',
        error: true
      });
    }
  };

  const { msg } = alert;

  return (
    <div className='flex flex_col'>
      <LoginSignupNav />
      <div className='flex jc_center pad gap_2 bg-light height form-mobile'>
      <div className="form-container">
      <h2 className="title">Sign Up</h2>
      {msg && <Alert alert={alert} />}
      <form className="flex flex_col w70 form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button className="form-submit" type="submit">
          SignUp
        </button>
      </form>
      <div>
        <span>Do you already have an account? </span>
        <Link to="/">Login</Link>
      </div>
    </div>

    </div>
  </div>
  );
};

export default Signup;
