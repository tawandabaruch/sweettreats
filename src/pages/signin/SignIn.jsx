import React, { useState } from 'react';
import './SignIn.css';
import { useNavigate} from "react-router-dom";

function SignInForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === 'admin' && password === 'password1234') {
      navigate('/admin');
    } else {
      navigate('/landing');
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Sign In</h2>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">Sign In</button>
    </form>
  );
}

export default SignInForm;


