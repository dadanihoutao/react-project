/* eslint-disable */
import Axios from '@/utils/request'
/* eslint-enable */
import React, { Component } from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'mobx-react'
import store from '@/store/index.js'
// import {CONFIG} from '../config/env'
import '@/assets/less/reset.less'
import './app.less'
import AppRouter from '@/router/router'

// console.log(CONFIG)
class App extends Component {
    render () {
        return (
            <Provider {...store}>
                <AppRouter />
            </Provider>
        )
    }
}

ReactDom.render(<App />, document.getElementById('app'))

/* eslint-disable */
if (module.hot) {
    module.hot.accept()
}
/* eslint-enable */
