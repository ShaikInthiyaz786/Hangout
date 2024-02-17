import React from 'react'
import logo from '../.././imgSrc/menuBg/hangoutLogo.jpg';
import './index.css';
const Header = () => {
  return (
    <div className="header">
        <div className="logo-location-container">
            <div className="logo-name-container">
                <img className="mobile-header-logo" alt='logo' src={logo} />
                <h1 className="company-name">Hangout</h1>
            </div>
        </div>
        <div className="login-nofication-container">
            <button type='button' className="login-btn">Login/SignUp</button>
                <div className="bell-icon">
                <i className="bi bi-bell"></i>
                </div>
            </div>
    </div>
  )
}

export default Header
