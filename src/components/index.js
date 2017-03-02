import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './App'

const Home = () => (
  <p>Home</p>
)

const About = () => (
  <p>About</p>
)

const Contact = (props) => (
  <div>
    <p>Contact</p>
  </div>
)

const NotFound = () => (
  <p>404</p>
)

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home}/>
        <Route path='about' component={About}/>
        <Route path='contact' component={Contact}/>
        <Route path='*' component={NotFound}/>
      </Route>
    </Router>
  </Provider>
)

export default Root
