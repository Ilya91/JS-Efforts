import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

import About from './components/About.jsx';
import Tasks from './components/Tasks.jsx';
import App from './App.jsx';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <Route path='/about' component={About}/>
            <Route path='/tasks' component={Tasks}/>
        </Route>
    </Router>,
    document.getElementById('mount-point')
);