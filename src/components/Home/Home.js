import React from 'react'
import me from '../../assets/me.png'

const Home = (props) => {
  return (
    <div className='Home'>
      <div className='profile-container'>
        <img className='profile-img' alt='Matthew Foxwell'src={me} />
        <div className='p-container'>
            <p className='profile-p'>Welcome! I recently graduated from Turing School of Software and Design and am passionately pursuing a career in software engineering. Some of my featured projects and designs can be found in the menu top left.</p>
          </div>
      
      </div>
    </div>
  )
}

export default Home