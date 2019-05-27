import React, { Component } from 'react'
import PicYourLandmark from '../projectDisplay/PicYourLandmark/PicYourLandmark'
import PalettePicker from '../projectDisplay/PalettePicker/PalettePicker'
import MyFitnessPup from '../projectDisplay/MyFitnessPup/MyFitnessPup'
import TrapperKeeper from '../projectDisplay/TrapperKeeper/TrapperKeeper'
import GameFlix from '../projectDisplay/GameFlix/GameFlix'

class Projects extends Component {
  constructor() {
    super()
    this.state = {
      currentIndex: 0,
    }
  }

  changeProjNumber = (number) => {
    this.setState({currentIndex: number})
  }

  render() {
    const { currentIndex } = this.state


    return (
      <div className='Projects'>
        <div className={`cards-slider active-slide-${currentIndex}`}>
          <div className="cards-slider-wrapper" style={{
            'transform': `translateX(-${currentIndex * (100 / 5)}%)`
          }}>
            <PicYourLandmark currentIndex={this.state.currentIndex} changeProjNumber={this.changeProjNumber}/>
            <PalettePicker currentIndex={this.state.currentIndex} changeProjNumber={this.changeProjNumber}/>
            <MyFitnessPup currentIndex={this.state.currentIndex} changeProjNumber={this.changeProjNumber}/>
            <TrapperKeeper currentIndex={this.state.currentIndex} changeProjNumber={this.changeProjNumber}/>
            <GameFlix currentIndex={this.state.currentIndex} changeProjNumber={this.changeProjNumber}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects