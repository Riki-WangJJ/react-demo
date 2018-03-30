import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Menu from '../pages/menu'
import routes from '../pages/index.js'


class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Menu></Menu>
          <div className='container'>
            {routes.map(route => (
              <Route path={route.path} exact={route.exact} component={route.component}/>
            ))}
          </div>
        </div>
      </Router>
    )
  }
}

export default App