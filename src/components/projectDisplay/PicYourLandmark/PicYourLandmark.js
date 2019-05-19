import React, { Component } from 'react';
import map from '../../../assets/Map.gif'
// import takePhoto from '../../../assets/take-photo.gif'
import login from '../../../assets/Login.gif'
// import screen from '../../../assets/leaning3.png'
import userprofile from '../../../assets/userprofile.gif'


export default class PicYourLandmark extends Component {

  render() {


    return (

      <article id="card-0" className="Card" >
        <h1 className='card-header'>Pic Your Landmark</h1>
        {/* <div className='content-container'> */}
        <div className='info-container'>
          <div className='demo-container'>
            <img src={map} className='phone' alt="This will display an animated GIF" />
            <img src={login} className='phone' alt="This will display an animated GIF" />
            <img src={userprofile} className='phone' alt="This will display an animated GIF" />
          </div>
          <div className='info'>
            <h3>Description</h3>
            <p className='info-p'>Pic Your Landmark is a React Native app based on the famous game 'Pokemon Go' - except our users can 'collect' famous landmarks! When a user visits a landmark, they can take and store their picture in our app. Users gain points/gems based on how many landmarks they have 'collected'. They can show off their status as well as collection of photos to their friends and family.</p>

            <p>Available on <a href='https://play.google.com/store/apps/details?id=com.heatherandmatt.picyourlandmark' target='_blank'>Google Play </a></p>
            <p>GitHub repo: <a href='https://github.com/foxwellm/PicYourLandmark' target='_blank'>github.com/foxwellm/PicYourLandmark</a></p>
          </div>

        </div>

        {/* <img src={takePhoto} className='live' alt="This will display an animated GIF" /> */}
        {/* </div> */}



      </article>
    )
  }
}