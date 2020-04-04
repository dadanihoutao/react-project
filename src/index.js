import React, { Component } from 'react'
import ReactDom from 'react-dom'
// import HomePage from '@/home/home.js'
import AppRouter from '@/router/router'

class App extends Component {
  render() {
    return (
      <div>
        <AppRouter/>
      </div>
    )
  }
}

ReactDom.render(<App/>,document.getElementById('app'))