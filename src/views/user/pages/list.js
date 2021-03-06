import React from 'react'
import {withRouter} from 'react-router-dom'
import { inject , observer} from "mobx-react"
import './list.less'

@inject("UserListStore") // 注入mobx实例到props
@observer // UserListStore实例和组件双向绑定
class UserListPage extends React.Component {
    constructor (props) {
        super(props)
        this.data = {
            res: {}
        }
    }
    UNSAFE_componentWillMount () {
        const {UserListStore} = this.props
        UserListStore.getUserList()
        this.init()
    }
    async init () {
        const config = {method: 'get', url: '/category/list'}
        let res = await this.$axios(config)
        this.setState({res})
    }
    render () {
        const {UserListStore} = this.props
        return (
            <div class="list">
                {
                    UserListStore.userList.map((item,index)=><p key={index}>{item.key}</p>)
                }
            </div>
        )
    }
}

export default withRouter(UserListPage)
