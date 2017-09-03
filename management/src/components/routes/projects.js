import React from 'react'
import Projects from '../Projects'
import Item from '../Projects/Item'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

const projects = (props) => (
        <Switch>
            <Route exact path='/projects' component={Projects}/>
            <Route path='/projects/:id' component={Projects}/>
        </Switch>
)

export default projects