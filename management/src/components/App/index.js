import React, { Component } from 'react'
import Sidebar from '../Sidebar/index'
import Header from '../Header/index'
import Content from '../Content/index'
import './App.css'

class App extends Component {
    render(){
        return(
            <div>
                <Header/>
                <Sidebar/>
                <Content/>
            </div>
        )
    }
}
export default App