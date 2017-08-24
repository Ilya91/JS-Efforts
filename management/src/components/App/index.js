import React, { Component } from 'react'
import Sidebar from '../Sidebar'
import Header from '../Header'
import NotFound from '../routes/NotFound'
import MyWork from '../MyWork'
import './App.css'
import store from '../../store'
import { Provider } from 'react-redux'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

class App extends Component {
    render(){
        return(
            <Provider store={store}>
                <Router>
                    <div>
                        <Header/>
                        <Sidebar/>
                        <Switch>
                            <Route path = "/issues" component = {MyWork} />
                            <Redirect from='/' to='/issues' exact/>
                            <Route path = "*" component = {NotFound}/>
                        </Switch>
                    </div>
                </Router>
            </Provider>
        )
    }
}
export default App