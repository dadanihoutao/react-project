import React, { Component } from 'react'
import ReactDom from 'react-dom'
import HomePage from '@/home/home.js'

class App extends Component {
  render() {
    return (
      <div style={{color: "#333"}}>
        <HomePage/>
      </div>
    )
  }
}

ReactDom.render(<App/>,document.getElementById('app'))