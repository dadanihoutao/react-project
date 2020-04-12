import React, { Component } from 'react'

export default class NavigationBar extends Component {
    render () {
        return (
            <div class="navigation-bar">
                <div class="nav-logo">
                    <img class="logo-img" src="http://upload.jianshu.io/users/upload_avatars/2152694/e1c9a0f8-fd43-4c51-a432-270b04da7e48.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240"/>
                    <p class="title">后台管理系统</p>
                </div>
                <div class="nav-content">
                    <div class="nav-right">亲爱的管理员，你好</div>
                </div>
            </div>
        )
    }
}
