import React, {Component} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

class Menu extends Component {
  render () {
    return(
      <Container>
        <li><Link to='/'>首页</Link></li>
        <li><Link to='/content'>内容</Link></li>
      </Container>
    )
  }
}

const Container = styled.ul`
  height: 60px;
  display: flex;
  text-align: center;
  line-height: 60px;
  padding: 0 40px;
  background: #eee;
  & li {
    width: 100px;
    &:hover {
      background: #f77133;
    }
  }
`

export default Menu