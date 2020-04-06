import React from 'react'
import {withRouter} from 'react-router-dom'
import {Button} from "antd"
import { inject , observer} from "mobx-react"
import './list.less'

@inject("UserListStore") // 注入mobx实例到props
@observer // UserListStore实例和组件双向绑定
class UserListPage extends React.Component {
    componentDidMount () {
        const {UserListStore} = this.props
        UserListStore.getUserList()
    }

    push = ()=>{
        this.props.history.push("/user/add?name=231");
    }
    // setName = ()=>{
    //     const {UserListStore} = this.props;
    //     UserListStore.setName("ha ha ha")
    // }
    render(){
        const {UserListStore} = this.props;
        return (
            <div class="list">
                {/* <p>UserListPage</p>
                <p>组件：{UserListStore.name}</p>
                <Button onClick={this.push}>添加用户</Button>
                <Button onClick={this.setName}>修改名字</Button> */}
                {
                    UserListStore.userList.map((item,index)=><p key={index}>{item.key}</p>)
                }
            </div>
        )
    }
}

export default withRouter(UserListPage);

