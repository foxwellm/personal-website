import React from 'react'

const Header = () => {
  return (
    <div className='Header'>
      <div className='logo'></div>
      <div className='circle-menu'>
        <div className='menu-button contact'>Contacts</div>
        <div className='menu-button projects'>Projects</div>
        <div className='menu-button media'>Media</div>
      </div>
    </div>
  )
}

export default Header