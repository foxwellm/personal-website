import React, { Component } from 'react'
import Header from '../Header/Header'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import Media from '../Media/Media'
import Home from '../Home/Home'
import { Switch, Route, withRouter } from 'react-router-dom'


class App extends Component {
  constructor() {
    super()
    this.state = {
      currentPage: "Projects"
    }
  }

  render() {

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Projects} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/media' component={Media} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
