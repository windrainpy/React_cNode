import React, {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import Index from '../views/index/index'
import Detail from '../views/detail/index'
import Book from '../views/book/index'
import About from '../views/about/index'
import User from '../views/user/index'

class RouterConfig extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact render={()=>(<Redirect to="/index" />)} />
                <Route path="/index" component={Index} />
                <Route path="/detail" component={Detail} />
                <Route path="/book" component={Book} />
                <Route path="/about" component={About} />
                <Route path="/user" component={User} />
            </Switch>
        )
    }
}

export default RouterConfig