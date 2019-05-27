import React, { Component } from 'react';
import map from '../../../assets/pMapMac.png'
import login from '../../../assets/pLoginMac.png'



export default class PicYourLandmark extends Component {
  handleCardClick = () => {
    this.props.changeProjNumber(0)
  }

  render() {
    const CardCss = ['Card', this.props.currentIndex !== 0 ? 'Card-not-active' : null].join(' ')

    return (
      <article id="card-0" className={CardCss} onClick={this.handleCardClick}>
        <h1 className={['card-header', this.props.currentIndex > 0 ? 'card-header-left' : null].join(' ')}>Pic Your Landmark</h1>
        <div className='info-container'>
          <div className='demo-container'>
            <img src={map} className='phone phone-l' alt="Pic Your Landmark map page" />
            <img src={login} className='phone phone-r' alt="Pic Your Landmark login page" />
          </div>
          <div className='info'>
            <p className='info-p'>Pic Your Landmark is a React Native app based on the famous game 'Pokemon Go' - except users can 'collect' famous landmarks! </p>
            <div className={['info-btn-container', this.props.currentIndex > 0 ? 'unclickable' : null].join(' ')}>
              <a href='https://play.google.com/store/apps/details?id=com.heatherandmatt.picyourlandmark' target='_blank' rel="noopener noreferrer" class="waves-effect waves-light #e53935 red darken-1 btn-large">Google Play</a>
              <a href='https://github.com/foxwellm/PicYourLandmark' target='_blank' rel="noopener noreferrer" class="waves-effect waves-light #e53935 red darken-1 btn-large">GitHub</a>
            </div>
          </div>
        </div>
      </article>
    )
  }
}