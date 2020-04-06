import React, {Component} from 'react'
import UserListPage from "./pages/list"
import AddUserPage from "./pages/add"

import { Route } from 'react-router-dom'

export default class User extends Component {
  render () {
    return (
      <div className="test test2">
        <p>user pages</p>
        {/* 子路由 */}
        <Route path="/user/list" component={UserListPage} />
        <Route path="/user/add" component={AddUserPage} />
      </div>
    )
  }
}