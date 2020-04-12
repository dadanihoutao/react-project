import axios from 'axios'
import React, {Component} from 'react'
import { message, Spin, Alert } from 'antd'
import {CONFIG} from '../../config/env'

axios.defaults.baseURL = CONFIG.baseURL
axios.defaults.timeout = 3000
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers['Authorization'] = 'Bearer undefined'
// 请求前拦截
axios.interceptors.request.use(config => {
    return config
}, err => {
    return Promise.reject(err)
})
// 请求返回拦截
axios.interceptors.response.use(data => {
    return data
}, err => {
    return Promise.reject(err)
})

Component.prototype.$axios = axios
export default axios