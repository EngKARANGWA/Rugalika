import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Style/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <button className="navbar-burger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
        <Link to="Education" className="navbar-item">UBUREZI</Link>
        <Link to="Commercial" className="navbar-item">UBUKUNGU</Link>
        <Link to="Health" className="navbar-item">UBUZIMA</Link>
        <Link to="Announcement" className="navbar-item">AMATANGAZO</Link>
        <Link to="Ubufasha" className="navbar-item">UBUFASHA</Link>
        <Link to="Ibitekerezo" className="navbar-item">IBITEKEREZO</Link>
      </div>
    </nav>
  );
}

export default Navbar;
