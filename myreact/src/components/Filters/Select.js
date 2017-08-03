import React, { Component } from 'react'
import PropTypes from 'prop-types'
/* Select */
import Select from 'react-select'
import 'react-select/dist/react-select.css';

import { connect } from 'react-redux'
import { selectArticle } from '../../AC'

class Selection extends Component {

    static propTypes = {
        selection: PropTypes.array
    }

    handleSelection = (selection) => {
        const { selectArticle } = this.props
        selectArticle(selection)
        console.log(this.props.selection)
    }

    render() {
        const { articles } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <Select options={options} value={ this.props.selection } onChange={this.handleSelection}/>
            </div>
        )
    }
}

export default connect((state) => ({
    selection: state.selection
}), { selectArticle })(Selection)