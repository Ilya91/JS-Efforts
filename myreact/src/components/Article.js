import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CommentList from './CommentList'

export default class Article extends Component{

    static propTypes = {
        article: PropTypes.shape({
            text: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired
        })
    }
    componentWillReceiveProps(){

    }

    componentWillMount() {
        //debugger
    }

    render(){
        const { title, date, children, comments } = this.props //деструктуризация
        return(
            <li ref={ this.setContainerRef }>
                <h3>{ title }</h3>
                <p><i>{ date }</i></p>
                <p>{ children }</p>
                <CommentList comments={ comments }/>
            </li>
        )
    }

    setContainerRef = ( ref ) => {
        this.container = ref
        console.log( '--', ref )
    }

    componentDidMount(){
        //debugger
    }
}

/*Article.propTypes = {
    article: PropTypes.shape({
        text: PropTypes.string.isRequired
    })
}*/

/*
export default function Article( props ) {
    const { article } = props //деструктуризация
    return(
        <div>
            <h3>{ article[0].title }</h3>
            <section>{ article[0].text }</section>
        </div>
    )
}*/
