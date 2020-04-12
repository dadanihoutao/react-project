import React, {Component} from 'react'
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
        console.log(this.$axios)
        const config = {method: 'get', url: '/category/list'}
        const reuslt = await axios(config)
        console.log(reuslt)
        if (reuslt.data.code === 200) {
            const userList = reuslt.data.data;
            userList.forEach(item => {
                item.key = item.key + '123123132'
            })

            this.userList = userList
        }
    }
}

export default new UserListStore()