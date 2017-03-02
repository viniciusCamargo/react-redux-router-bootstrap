import React, { Component } from 'react'
import { Link } from 'react-router'
import axios from 'axios'

class App extends Component {
  componentWillMount() {
    axios.get('THE_API_ENDPOINT')
      .then(res => console.log(res))
      .catch(err => console.error(err))
  }
  render () {
    return (
      <div className='container'>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </nav>
        <main>{ this.props.children }</main>
        <footer>oi</footer>
      </div>
    )
  }
}

export default App
