import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar-ctn'>
        <p className='navbar-left'>©/2024 • Tous droits réservés.</p>
        <div className='navbar-separate'>
          <span></span>
        </div>
        <div className='navbar-right'> 
          <Link to='/mentions' className='conf-btn'>Mentions</Link>
          <Link to='/confidentialite' className='conf-btn'>Confidentialité</Link>
          <Link to='/cookies' className='conf-btn'>Cookies</Link>       
        </div>
    </div>
  )
}

export default Navbar
