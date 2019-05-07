import React, { Component } from 'react';


export default class Card extends Component {

  render() {
    const { projectName, cardNumber } = this.props;

    return (

      <article id={`card-${cardNumber || 0}`} className="Card" >

        <p>{projectName}</p>
      
      </article>
    )
  }
}