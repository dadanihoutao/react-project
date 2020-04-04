import React, {Component} from 'react'
import { Route, BrowserRouter, Link, Switch } from 'react-router-dom'
import HomePage from '@/home/home'
import BlogPage from '@/blog/blog'
import ResumePage from '@/resume/resume'
import UserPage from '@/user/user'

class AppRouter extends Component {
  render () {
    return (
      <BrowserRouter>
        <ul>
          <li><Link to="/home">home</Link></li>
          <li><Link to="/blog">blog</Link></li>
          <li><Link to="/resume">resume</Link></li>
          <li><Link to="/user">user</Link></li>
        </ul>
        <div>
          {/* Switch只显示一个组件。加exact表示精确匹配/。如果不加exact，/xxx也会匹配/。  */}
          <Switch>
            {/* exact */}
            <Route path="/home" component={HomePage}/>
            <Route exact path="/blog" component={BlogPage}/>
            <Route exact path="/resume" component={ResumePage}/>
            <Route exact path="/user" component={UserPage}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
export default AppRouter