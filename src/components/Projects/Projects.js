import React, { Component } from 'react'
import data from '../../staticData/projectData'
import Card from '../Card/Card'

class Projects extends Component {
  constructor() {
    super()
    this.state = {
      currentIndex: 0,
    }
  }

  nextProject = () => {
    const currentIndex = this.state.currentIndex + 1
    this.setState({currentIndex})
  }

  prevProject = () => {
    const currentIndex = this.state.currentIndex - 1
    this.setState({ currentIndex })
  }

  render() {
    const {currentIndex} = this.state
    const projects = data.projectData.map((project, i) => {
      return <Card cardNumber={i} projectName={project.name} />
    })
    

    return (
      <div className='Projects'>
        <div className={`cards-slider active-slide-${currentIndex}`}>
          {currentIndex !== 0 &&
            <div
              className="prev-btn"
              onClick={this.prevProject}
              >
              <i className="fas fa-arrow-circle-left"></i></div>
          }
          <div className="cards-slider-wrapper" style={{
            'transform': `translateX(-${currentIndex * (100 / 3)}%)`
          }}>
            {projects}
        </div>
          {currentIndex !== 2 &&
            <div
              className="next-btn"
              onClick={this.nextProject}
              >
              <i className="fas fa-arrow-circle-right"></i>
            </div>
          }
        </div>

      </div>
    )
  }
}

export default Projects