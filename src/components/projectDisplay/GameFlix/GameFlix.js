import React, { Component } from 'react';
import gMac from '../../../assets/gameflixMac.png'


export default class GameFlix extends Component {

  handleCardClick = () => {
    this.props.changeProjNumber(4)
  }

  render() {
    const CardCss = ['Card', this.props.currentIndex !== 4 ? 'Card-not-active' : null].join(' ')


    return (

      <article id="card-4" className={CardCss} onClick={this.handleCardClick} >
        <h1 className={['card-header', this.props.currentIndex > 4 ? 'card-header-left' : null].join(' ')}>GameFlix</h1>
        <div className='info-container'>
          <div className='demo-container'>
            <img src={gMac} className='site' alt="Gameflix page" />
          </div>
          <div className='info'>
            <p className='info-p'>Use Gameflix to discover your new favorite board or card game!</p>
            <div className={['info-btn-container', this.props.currentIndex > 4 ? 'unclickable' : null].join(' ')}>
              <a href='https://github.com/foxwellm/gameflix' target='_blank' rel="noopener noreferrer" class="waves-effect waves-light #e53935 red darken-1 btn-large">GitHub</a>
            </div>          </div>

        </div>
      </article>
    )
  }
}