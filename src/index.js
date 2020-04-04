import React, { Component } from 'react';
import ReactDom from 'react-dom';
import '@/assets/less/reset.less';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './app.less'
import AppRouter from '@/router/router';

class App extends Component {
	render() {
		return (
			<div>
				<AppRouter />
			</div>
		)
	}
}

ReactDom.render(<App />, document.getElementById('app'))
