import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the stylesheet

const Header = function(){
    return <>
    <div className='HeaderContainer'>
        <div className='imgs'>
            <img src="/assets/Airplane-logo.png" alt="Airplane-logo" />
        </div>
        <div className='HeaderLinks'>
          <h3><Link to="/" className="no-underline">Home</Link></h3>
          <h3><Link to="/services" className="no-underline">Services</Link></h3>
          <h3><Link to="/about" className="no-underline">About Us</Link></h3>
        </div>
    </div>
  </>
}

export default Header;
