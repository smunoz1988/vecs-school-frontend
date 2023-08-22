import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="form-container">
      <p onClick={() => navigate('/')}>Back</p>
      <h2 className="title">Login</h2>
      <form className="flex flex_col w70 form"> {/* in here should be the onclick to call to reducer to manage logic */}
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
  )
};

export default Login;
