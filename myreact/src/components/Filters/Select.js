import React, { Component } from 'react'

/* Select */
import Select from 'react-select'
import 'react-select/dist/react-select.css';

class Selection extends Component {

    state = {
        selection: null
    }

    handleSelection = (selection) => {
        this.setState({
            selection
        })
    }

    render() {
        const { articles } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <Select options={options} value={ this.state.selection } onChange={this.handleSelection} multi={true}/>
            </div>
        )
    }
}

export default Selection