import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'mobx-react'
import store from '@/store/index.js';
import './../config'
import '@/assets/less/reset.less';
// import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './app.less'
import AppRouter from '@/router/router';

class App extends Component {
	render() {
		return (
			<Provider {...store}>
				<AppRouter />
			</Provider>
		)
	}
}

ReactDom.render(<App />, document.getElementById('app'))
