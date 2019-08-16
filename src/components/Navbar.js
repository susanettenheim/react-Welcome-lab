import React from 'react'
import navImage from './images/Navbar.jpg'
import './css/Navbar.css'

const Navbar = () => {
  return(
    <div>
      <img className="navbar" alt="navbar" src={ navImage }/>
    </div>
  )
}

export default Navbar
