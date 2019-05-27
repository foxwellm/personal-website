import React, { Component } from 'react';
import fMac from '../../../assets/fitnessMac.png'


export default class MyFitnessPup extends Component {
  handleCardClick = () => {
    this.props.changeProjNumber(2)
  }
  render() {

    return (

      <article id="card-2" className={['Card', this.props.currentIndex !== 2 ? 'Card-not-active' : null].join(' ')} onClick={this.handleCardClick} >
        <h1 className={['card-header', this.props.currentIndex > 2 ? 'card-header-left' : null].join(' ')}>My Fitness Pup</h1>
        <div className='info-container'>
          <div className='demo-container'>
            <img src={fMac} className='site' alt="My Fitness Pup page" />
          </div>
          <div className='info'>
            <p className='info-p'>My Fitness Pup helps users that love to run and hike connect to local shelter dogs that love to as well!</p>
            <div className={['info-btn-container', this.props.currentIndex > 2 ? 'unclickable' : null].join(' ')}>
              <a href='https://my-fitness-pup.herokuapp.com/' target='_blank' rel="noopener noreferrer" class="waves-effect waves-light #e53935 red darken-1 btn-large">Live Site</a>
              <a href='https://github.com/foxwellm/MyFitnessPup' target='_blank' rel="noopener noreferrer" class="waves-effect waves-light #e53935 red darken-1 btn-large">GitHub</a>
            </div>
          </div>

        </div>

      </article>
    )
  }
}