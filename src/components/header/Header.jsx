import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className='header'><h1 className='header-title'>Furniture</h1></header>
      <nav className='nav'>
        <ul className='nav-list'>
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
