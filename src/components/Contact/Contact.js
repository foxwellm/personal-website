import React from 'react'
import github from '../../assets/github-logo.png'
import linkedin from '../../assets/linkedin-logo.png'
import gmail from '../../assets/gmail.png'

const Contact = (props) => {
  return (
    <div className='Contact'>
      <div className='contact-container'>
        <div className='github-container'>
          <img className='github-image' alt='Gmail logo' src={gmail} />
          <span className='github-text'>mwfoxwell@gmail.com</span>
        </div>
        <div className='github-container'>
          <a href='https://www.linkedin.com/in/foxwellmw/' target='_blank' rel="noopener noreferrer"> <img className='github-image' alt='linkedin logo' src={linkedin} /></a>
          <a className='github-text' href='https://www.linkedin.com/in/foxwellmw/' target='_blank' rel="noopener noreferrer">linkedin.com/in/foxwellmw</a>
        </div>
        <div className='github-container'>
          <a href='https://github.com/foxwellm' target='_blank' rel="noopener noreferrer"> <img className='github-image' alt='github logo' src={github} /></a>
          <a className='github-text' href='https://github.com/foxwellm' target='_blank' rel="noopener noreferrer">github.com/foxwellm</a>
        </div>
      </div>
    </div>
  )
}

export default Contact