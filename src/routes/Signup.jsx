import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Alert from '../components/Alert';
import axios from 'axios';

const Signup = () => {
  const API_URL = 'http://127.0.0.1:3000';

  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState({msg: '', error: ''});

  const handleSubmit = async e => {
    e.preventDefault();

    if ([name, email, password].includes('')) {
      setAlert({
          msg: 'All fields are required',
          error: true
      })
      return
    }

    if (password.length < 6) {
      setAlert({
          msg: 'Password is too short, minimum 6 characters required',
          error: true
      })
      return
    }

    setAlert({})

    try {
      // Check if the user already exists
      const { data: existingUsers } = await axios.get(`${API_URL}/api/v1/users`)

      const userExists = existingUsers.some((user) => user.email === email);

      if (userExists) {
        setAlert({
          msg: 'User already exists, please log in.',
          error: true
        })
        // navigate('/login')
        return
      }

      // Create the user in the API
      const response = await fetch(`${API_URL}/signup`, {
        method: 'POST',
        body: JSON.stringify({
          "user": {
            "name": name,
            "email": email,
            "password": password
          }
        }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.status === 200) {
        const data = await response.json();
        console.log(data);
        navigate('/Login');
      } else {
        console.log('Error');
      }
      

    } catch (error) {
      console.log(error)
      setAlert({
          msg: error.response.data.status.message,
          error: true
      })
    }

  } 

  const { msg } = alert;

  return (
    <div className="form-container">
      <p onClick={() => navigate('/')}>Back</p>
      <h2 className="title">Sign Up</h2>
      {msg && <Alert alert={alert} />}
      <form 
        className="flex flex_col w70 form" 
        onClick={handleSubmit} /* in here should be the onclick to call to reducer to manage logic */
      >
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <button className="form-submit" type="submit">SignUp</button>
      </form>
      <div>
        <span>Do you already have an account? </span>
        <Link to="/">Login</Link>
      </div>
    </div>
  )
};

export default Signup