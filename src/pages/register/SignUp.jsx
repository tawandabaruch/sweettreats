import React, { useState } from 'react';
import {Link} from "react-router-dom";
import './SignUp.css';

function SignUpForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle sign up logic here
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2 className="form-header">Sign Up</h2>
      <label className="form-label">
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-input" />
      </label>
      <label className="form-label">
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-input" />
      </label>
      <label className="form-label">
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="form-input" />
      </label>
      <label className="form-label">
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-input" />
      </label>
      <label className="form-label">
        Confirm Password:
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="form-input" />
      </label>
        <Link to={`/signin`}>
      <button type="submit" className="form-button">Sign Up</button>
       </Link>
    </form>
  );
}

export default SignUpForm;

