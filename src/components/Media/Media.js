import React from 'react'
import mediumGif from '../../assets/medium-gif.gif'

const Media = (props) => {
  return (
    <div className='Media'>
      <div className='media-container'>
        <a href='https://medium.com/p/7f6b26207d93' target='_blank' rel="noopener noreferrer" >
          <h1 className='media-header'>Medium article on Linked Lists</h1>
        </a>
        <a href='https://medium.com/p/7f6b26207d93' target='_blank' rel="noopener noreferrer" >
          <img alt='Medium article gif of Linked Lists' href='https://medium.com/p/7f6b26207d93' target='_blank' rel="noopener noreferrer" src={mediumGif} className='image' />
        </a>
      </div>
    </div>
  )
}

export default Media