import React, {Component} from 'react'

class Home extends Component {
  componentDidMount () {
    console.log(this.dispatch)
  }
  render () {
    return (
      <div>
        首页
      </div>
    )
  }
}

export default Home