import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Style/header.css';

const Header = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div>
      <div className='Header'>
        <div className='logo-container'>
          <img src="./images/logo.png" alt=''/>
        </div>
        <h1>AMAKURU AGEZWEHO RUGALIKA</h1>
        <div className='login-container'>
          <button className='login-button' onClick={handleLoginClick}>
            Login
          </button>
        </div>
      </div>
      <div className='subHeader' style={{
        height:`151px`,
        backgroundSize: `cover`,
        backgroundImage:`url("./images/Sectorim.jpg")`
      }}>
        <h1>WELCOME TO RUGALIKA SECTOR</h1>
      </div>
    </div>
  );
};

export default Header;
