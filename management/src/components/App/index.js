import React, { Component } from 'react'
import Sidebar from '../Sidebar'
import Header from '../Header'
import NotFound from '../routes/NotFound'
import issues from '../routes/issues'
import projects from '../routes/projects'
import MyWork from '../MyWork'
import Projects from '../Projects'
import { connect } from 'react-redux'
import './App.css'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import moment from 'moment';

moment.updateLocale('ru', {
    monthsShort : {
        format: 'Янв_Фев_Мар_Апр_Мая_Июня_Июля_Авг_Сен_Окт_Ноя_Дек'.split('_'),
        standalone: 'Янв_Фев_Мар_Апр_Мая_Июнь_Июль_Авг_Сен_Окт_Ноя_Дек'.split('_')
    }
});
moment.locale('ru');

class App extends Component {
    render(){
        const { stateProjects } = this.props
        return(
                <Router>
                    <div>
                        <Header/>
                        <Sidebar projects={stateProjects}/>
                        <Switch>
                            <Route path = "/projects" component = {projects} />
                            <Route path = "/issues" component = {issues} />
                            <Redirect from='/' to='/issues' exact/>
                            <Route path = "*" component = {NotFound}/>
                        </Switch>
                    </div>
                </Router>
        )
    }
}
export default connect((state) => ({
    stateProjects: state.projects
}))(App)