import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="flex items-center justify-between px-20 py-6 bg-white w-full">
      <h1 className="text-2xl font-bold text-[#054C73]">Furniture</h1>
      <nav>
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
          <li><Link to="/services" className="hover:text-blue-600">Services</Link></li>
          <li><Link to="/products" className="hover:text-blue-600">Products</Link></li>
          <li><Link to="/gallery" className="hover:text-blue-600">Gallery</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header