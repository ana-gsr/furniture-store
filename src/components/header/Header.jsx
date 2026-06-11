import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false) // empieza cerrado

  return (
    <header className="relative flex items-center justify-between px-6 py-4 bg-white w-full">
      <h1 className="text-2xl font-bold text-[#054C73]">Furniture</h1>
      
      <button 
        className="md:hidden text-gray-700" 
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* desktop */}
      <nav className="hidden md:block">
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
          <li><Link to="/services" className="hover:text-blue-600">Services</Link></li>
          <li><Link to="/products" className="hover:text-blue-600">Products</Link></li>
          <li><Link to="/gallery" className="hover:text-blue-600">Gallery</Link></li>
        </ul>
      </nav>

      {/* móvil */}
      {isOpen && (
        <nav className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden z-30">
          <ul className="flex flex-col items-center gap-4 py-4 text-gray-700 font-medium">
            <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
            <li><Link to="/products" onClick={() => setIsOpen(false)}>Products</Link></li>
            <li><Link to="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link></li>
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header
