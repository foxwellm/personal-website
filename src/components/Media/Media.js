import React from 'react'
import mediumGif from '../../assets/medium-gif.gif'

const Media = (props) => {
  return (
    <div className='Media'>
      <div className='media-container'>
      {/* <div className='media-header-container'> */}

      <h1 className='media-header'>Medium article on Linked Lists</h1>
        <a className='media-header' href='https://medium.com/p/7f6b26207d93'>https://medium.com/p/7f6b26207d93</a>
      {/* </div> */}
        <img src={mediumGif} className='image' alt="This will display an animated GIF" />
      </div>
    </div>
  )
}

export default Media