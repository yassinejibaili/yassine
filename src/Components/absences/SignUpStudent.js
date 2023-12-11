import React, { useState } from 'react';
import logoImage from '../assets/logo1.jpeg';

const SignUpStudent = () => {
  const [studentId, setStudentId] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    console.log('Student ID:', studentId);
    console.log('Full Name:', fullName);
    console.log('Password:', password);
  };

  return (
    <div className="signup-page">
      <div className="sign-up-logo">
        <img src={logoImage} alt="Logo" className="logo" />
      </div>

      <div className="signup-form">
        <h2>Student Sign Up</h2>

        <form>
          <div className="form-group">
            <label htmlFor="studentId">Student ID:</label>
            <input
              type="text"
              id="studentId"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
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

          <button type="button" onClick={handleSignUp}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpStudent;


