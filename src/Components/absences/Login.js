import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoImage from '../assets/logo1.jpeg';

const Login = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  const handleLogin = () => {
    if (userId.startsWith('S')) { 
      history('/dashboard/student');
    } else if (userId.startsWith('T')) {
      history('/dashboard/teacher');
    }
  };

  return (
    <div className="login-page">
      <div className="login-logo">
        <img src={logoImage} alt="Logo" className="logo" />
      </div>

      <div className="login-form">
        <h2>Login</h2>

        <form>
          <div className="form-group">
            <label htmlFor="userId">ID or Numero Matricule:</label>
            <input
              type="text"
              id="userId"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

