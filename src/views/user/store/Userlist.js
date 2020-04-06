import { observable, action } from 'mobx'
import axios from 'axios'

class UserListStore {
    @observable name;
    constructor () {
        this.name = 'my name is user list'
        this.userList = []
    }
    @action
    // setName (name) {
    //     this.name = name;
    // }
    async getUserList () {
        const config = {method: 'get', url: '/api/category/list', headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Bearer undefined"
        }}
        const reuslt = await axios(config)
        if (reuslt.data.code === 200) {
            const userList = reuslt.data.data;
            this.userList = userList
        }
    }
}

export default new UserListStore()