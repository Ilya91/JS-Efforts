import React, { Component } from 'react'

import ArticleList from './ArticleList'
import UserForm from './UserForm'
import { articles } from '../fixtures'
import Select from 'react-select'
import 'react-select/dist/react-select.css';

class App extends Component{
    state = {
        selection: null
    }

    handleSelection = (selection) => {
        this.setState({
            selection
        })
    }

    render(){
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return(
        <div>
            <UserForm/>
            <Select options={options} value={ this.state.selection} onChange={this.handleSelection} multi={true}/>
            <ArticleList articles = { articles }/>
        </div>
        )
    }
}
export default App