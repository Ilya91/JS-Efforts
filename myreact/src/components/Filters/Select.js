import React, { Component } from 'react'
import PropTypes from 'prop-types'
/* Select */
import Select from 'react-select'
import 'react-select/dist/react-select.css';

import { connect } from 'react-redux'
import { selectArticle } from '../../AC'

class Selection extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    handleChange = selected => this.props.selectArticle(selected.map(option => option.value))

    render() {
        const { articles, selected } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={selected}
            multi={true}
            onChange={this.handleChange}
        />
    }
}

export default connect((state) => ({
    selected: state.filters.selected,
    articles: Object.values(state.articles)
}), { selectArticle })(Selection)


















/*
class Selection extends Component {

    static propTypes = {
        selection: PropTypes.array
    }

    handleSelection = (selection) => {
        const { selectArticle } = this.props
        selectArticle(selection)
    }

    render() {
        const { articles } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <Select options={options} value={ this.props.selection } onChange={this.handleSelection} multi/>
            </div>
        )
    }
}

export default connect((state) => ({
    selection: state.select
}), { selectArticle })(Selection)*/
