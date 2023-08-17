import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <p onClick={() => navigate('/')}>Back</p>
      <div>Login</div>
      <form>
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
        <span>Don&apos;t have an account? </span>
        <Link to="/Signup">Create an account</Link>
      </div>
    </>
  )
};

export default Signin;
