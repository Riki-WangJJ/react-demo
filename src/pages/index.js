import Home from './home'
import Content from './content'


const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/content',
    component: Content
  }
]

export default routes