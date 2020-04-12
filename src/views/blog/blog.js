import React from 'react'
import LoadableComponent from '@/router/loadable'
const BlogListPage = LoadableComponent(() => import("./pages/list"))
const AddBlogPage  = LoadableComponent(() => import("./pages/add"))

import { Route } from 'react-router-dom'

export default class BlogIndex extends React.Component {
    render () {
        return (
            <div>
                <p>BlogIndex</p>
                <Route path="/blog/list" component={BlogListPage} />
                <Route path="/blog/add" component={AddBlogPage} />
            </div>
        )
    }
}
