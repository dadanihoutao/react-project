import { observable, action } from 'mobx'
import axios from 'axios'

class UserListStore {
    @observable name;
    constructor () {
        this.name = 'my name is user list'
        this.userList = []
    }
    @action
    async getUserList () {
        const config = {method: 'get', url: '/category/list'}
        const reuslt = await axios(config)
        if (reuslt.data.code === 200) {
            const userList = reuslt.data.data
            userList.forEach(item => {
                item.key = item.key + '123123132'
            })

            this.userList = userList
        }
    }
}

export default new UserListStore()
