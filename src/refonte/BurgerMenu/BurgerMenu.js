import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './BurgerMenu.css';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="burger-menu">
      <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <div className={`menu-content ${isOpen ? 'show' : ''}`}>
        <Link to='/' className='menu-item' onClick={toggleMenu}>
          <i className="fa-solid fa-home"></i>
          Accueil
        </Link>
        <Link to='/projets' className='menu-item' onClick={toggleMenu}>
          <i className="fa-solid fa-briefcase"></i>
          Projets
        </Link>
        <Link to='/about' className='menu-item' onClick={toggleMenu}>
          <i className="fa-solid fa-user"></i>
          À propos
        </Link>
        <Link to='/contact' className='menu-item' onClick={toggleMenu}>
          <i className="fa-solid fa-envelope"></i>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default BurgerMenu;
