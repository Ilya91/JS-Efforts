import React, { Component } from 'react'
import Sidebar from '../Sidebar'
import Header from '../Header'
import MyWork from '../MyWork'
import './App.css'
import store from '../../store'
import { Provider } from 'react-redux'

class App extends Component {
    render(){
        return(
            <Provider store={store}>
                <div>
                    <Header/>
                    <Sidebar/>
                    <MyWork/>
                </div>
            </Provider>
        )
    }
}
export default App