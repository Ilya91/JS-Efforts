import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CommentList from './CommentList'

export default class Article extends Component{
    static propTypes = {

    }

    render(){
        const { title, date, children, comments } = this.props //деструктуризация
        return(
            <li>
                <h3>{ title }</h3>
                <p><i>{ date }</i></p>
                <p>{ children }</p>
                <CommentList comments={ comments }/>
            </li>
        )
    }
}


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
