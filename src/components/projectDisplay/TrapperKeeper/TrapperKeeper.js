import React, { Component } from 'react';
import tMac from '../../../assets/trapperMac.png'


export default class PicYourLandmark extends Component {

  handleCardClick = () => {
    this.props.changeProjNumber(3)
  }

  render() {
    const CardCss = ['Card', this.props.currentIndex !== 3 ? 'Card-not-active' : null].join(' ')


    return (
      <article id="card-3" className={CardCss} onClick={this.handleCardClick} >
        <h1 className={['card-header', this.props.currentIndex > 3 ? 'card-header-left' : null].join(' ')}>Trapper Keeper</h1>
        <div className='info-container'>
          <div className='demo-container'>
            <img src={tMac} className='site' alt="Trapper Keeper page" />
          </div>
          <div className='info'>
            <p className='info-p'>Similar to Google Keep - created with both front-end and back-end frameworks. You can save, edit, and delete personalized notes.</p>
            <div className={['info-btn-container', this.props.currentIndex > 3 ? 'unclickable' : null].join(' ')}>
              <a href='https://github.com/foxwellm/trapper-keeper' target='_blank' rel="noopener noreferrer" class="waves-effect waves-light #e53935 red darken-1 btn-large">GitHub</a>
            </div>
          </div>
        </div>
      </article>
    )
  }
}