import React, { Component } from 'react';
import pMac from '../../../assets/paletteMac.png'



export default class PicYourLandmark extends Component {
  handleCardClick = () => {
    this.props.changeProjNumber(1)
  }
  render() {

    const CardCss = ['Card', this.props.currentIndex !== 1 ? 'Card-not-active' : null].join(' ')

    return (

      <article id="card-1" className={CardCss} onClick={this.handleCardClick} >
        <h1 className={['card-header', this.props.currentIndex > 1 ? 'card-header-left' : null].join(' ')}>Palette Picker</h1>
        <div className='info-container'>
          <div className='demo-container'>
            <img src={pMac} className='site' alt="Palette Picker page" />
          </div>
          <div className='info'>
            <p className='info-p'>Based on the website Coolors, you can generate color palettes for websites and other design projects.</p>
            <div className={['info-btn-container', this.props.currentIndex > 1 ? 'unclickable' : null].join(' ')}>
              <a href='https://palettes-picker.herokuapp.com/' target='_blank' rel="noopener noreferrer" class="waves-effect waves-light #e53935 red darken-1 btn-large">Live Site</a>
              <a href='https://github.com/foxwellm/PalettePicker' target='_blank' rel="noopener noreferrer" class="waves-effect waves-light #e53935 red darken-1 btn-large">GitHub</a>
            </div>
          </div>

        </div>
      </article>
    )
  }
}