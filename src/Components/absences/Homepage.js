import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/logo1.jpeg';
import centerImage from '../assets/logo2.jpg';
import '../styles/Homepage.css'; 

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="logo" style={{ backgroundImage: `url(${logoImage})` }}></div>
      <div className="center-image-container" style={{ backgroundImage: `url(${centerImage})` }}>
        <div className='repair'>
          <h1 className='bienvenue'><strong>Bienvenue Dans le Service OFPPT</strong></h1>
          <h2 className='mod'>Pour Accéder au Système Veuillez vous Authentifier</h2>
        </div>
      </div>
      <div className="buttons-container">
        <button className="sign-up-button"><Link to='/signup/student'>Sign Up</Link></button>
        <button className="log-in-button"><Link to='/signup/teacher'>Log In</Link></button>
      </div>
    </div>
  );
};

export default HomePage;



