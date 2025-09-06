import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className='header-title'>Furniture</header>
      <nav className='nav'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
