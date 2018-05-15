import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import Index from '../view/index/index.js'
import Login from '../view/login/index.js'
let RouterList = () => (
    <Router>
        <Switch>
            <Route path="/" exact={true} component={Index} />
            <Route path="/login" component={Login} />
        </Switch>
    </Router>
)
export default RouterList();