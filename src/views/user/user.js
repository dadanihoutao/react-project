import React, {Component} from 'react'
import LoadableComponent from '@/router/loadable'

const UserListPage = LoadableComponent(() => import("./pages/list"))
const AddUserPage = LoadableComponent(() => import("./pages/add"))

import { Route } from 'react-router-dom'

export default class User extends Component {
  render () {
    return (
      <div className="test test2">
        <p>user pagesaaa</p>
        {/* 子路由 */}
        <Route path="/user/list" component={UserListPage} />
        <Route path="/user/add" component={AddUserPage} />
      </div>
    )
  }
}