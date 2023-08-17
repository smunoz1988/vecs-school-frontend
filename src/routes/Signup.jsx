import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <p onClick={() => navigate('/')}>Back</p>
      <div>Sign Up</div>
      <form> {/* in here should be the onclick to call to reducer to manage logic */}
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
        <button type="submit">Login</button>
      </form>
      <div>
        <span>Do you already have an account? </span>
        <Link to="/Signin">Create an account</Link>
      </div>
    </>
  )
};

export default Signup
