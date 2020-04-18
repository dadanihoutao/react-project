import React, { Component } from 'react'
import headImg from '@/assets/images/yeji.jpg'

export default class NavigationBar extends Component {
    render () {
        return (
            <div class="navigation-bar">
                <div class="nav-logo">
                    <img class="logo-img" src={headImg}/>
                    <p class="title">后台管理系统</p>
                </div>
                <div class="nav-content">
                    <div class="nav-right">亲爱的管理员，你好</div>
                </div>
            </div>
        )
    }
}
