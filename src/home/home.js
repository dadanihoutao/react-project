import React from 'react'
import './home.less'
import './home.css'
import mienvImg from '@/assets/images/meinv.jpg'

export default class Home extends React.Component {
  render () {
    return (
      <div className="test test2">
        <p>hello worldaaaaacccssss</p>
        <img src={mienvImg} style={{width: 300, height: 500}}/>
      </div>
    )
  }
}