import React, { Component } from 'react';
import { Route, BrowserRouter, Link, Switch } from 'react-router-dom';

import SliderMenu from '@/layout/SlideMenu.js';
import NavigationBar from '@/layout/NavigationBar.js';

import LoadableComponent from './loadable'

const HomePage = LoadableComponent(() => import(/* webpackChunkName: 'homePage' */ '@/home/home'))
const BlogPage = LoadableComponent(() => import(/* webpackChunkName: 'blogPage' */ '@/blog/blog'))
const ResumePage = LoadableComponent(() => import(/* webpackChunkName: 'resumePage' */ '@/resume/resume'))
const UserPage = LoadableComponent(() => import(/* webpackChunkName: 'userPage' */ '@/user/user'))

class AppRouter extends Component {
	render() {
		return (
			<BrowserRouter>
				<div class="app-container">
					<NavigationBar />
					<div class="app-content">
						<SliderMenu />
						<div class="container">
							{/* Switch只显示一个组件。加exact表示精确匹配/。如果不加exact，/xxx也会匹配/。  */}
							<Switch>
								{/* exact */}
								<Route exact path="/" component={HomePage} />
                                <Route exact path="/resume" component={ResumePage} />
								<Route path="/blog" component={BlogPage} />
								<Route path="/user" component={UserPage} />
							</Switch>
						</div>
					</div>
				</div>
			</BrowserRouter>
		);
	}
}
export default AppRouter;
