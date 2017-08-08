import React, { Component } from 'react'
import Sidebar from '../Sidebar'
import Header from '../Header'
import MyWork from '../MyWork'
import './App.css'

class App extends Component {
    render(){
        return(
            <div>
                <Header/>
                <Sidebar/>
                <MyWork/>
            </div>
        )
    }
}
export default App