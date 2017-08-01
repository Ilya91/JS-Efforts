import React, { Component } from 'react'

/* Select */
import Select from 'react-select'
import 'react-select/dist/react-select.css';

class Selection extends Component {

    state = {
        selection: null
    }

    render() {
        return (
            <div>
                <Select options={options} value={ this.state.selection} onChange={this.handleSelection} multi={true}/>
            </div>
        )
    }
}

export default Selection