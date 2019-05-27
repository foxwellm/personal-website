import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='Header'>
      <div className='logo'>
        <NavLink to='/' className='logo-nav-button'>
          MF</NavLink>
          </div>
      <div className='circle-menu'>
        <div className='menu-button media'><NavLink to='/media' className='nav-button' activeClassName='selected'>Media</NavLink></div>
        <div className='menu-button projects'><NavLink to='/projects' className='nav-button' activeClassName='selected'>Projects</NavLink></div>
        <div className='menu-button contact'><NavLink to='/contact' className='nav-button' activeClassName='selected'>Contact</NavLink></div>
      </div>
    </div>
  )
}

export default Header