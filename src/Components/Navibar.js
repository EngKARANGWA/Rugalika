import React, { useState } from 'react';
import './Style/Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
        <a href="/" className="navbar-item">UBUREZI</a>
        <a href="/about" className="navbar-item">UBUKUNGU</a>
        <a href="/contact" className="navbar-item">UBUZIMA</a>
        <a href="/contact" className="navbar-item">AMATANGAZO</a>
        <a href="/contact" className="navbar-item">UBUFASHA</a>
        <a href="/contact" className="navbar-item">IBITEKEREZO</a>
      </div>
    </nav>
  );
}

export default Navbar;
