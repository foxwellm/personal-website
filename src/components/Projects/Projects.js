import React, { Component } from 'react'

class Projects extends Component {
  constructor() {
    super()
    this.state = {
      currentIndex: 0,

    }
  }
  render() {
    const {currentIndex} = this.state

    return (
      <div className='Projects'>
        <div className={`cards-slider active-slide-${currentIndex}`}>
          {/* {currentIndex !== 0 &&
            <div
              className="prev-btn"
              onClick={prevMethod}>
              <i className="fas fa-arrow-circle-left"></i></div>
          } */}
          <div className="cards-slider-wrapper" style={{
            'transform': `translateX(-${currentIndex * (100 / 3)}%)`
          }}>
            hello
        </div>
          {/* {currentIndex !== currentMethods.length - 1 &&
            <div
              className="next-btn"
              onClick={() => nextMethod(currentMethods)}>
              <i className="fas fa-arrow-circle-right"></i>
            </div>
          } */}
        </div>

      </div>
    )
  }
}

export default Projects