import React, { Component } from 'react'
import Comment from './Comment'

export default class CommentList extends Component{
    static defaultProps = {
        comments: []
    }

    constructor( props ){
        super( props )
        this.state = {
            isOpen: false
        }
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    getComments = () => {
        if( !this.state.isOpen) return null
        const { comments } = this.props

        return (
            <ul>
                {
                    comments.map(( comment, i) =>
                        <li key={ comment.id }>
                            <Comment>{ comment.text }</Comment>
                        </li>
                    )
                }
            </ul>
        )
    }

    render(){
        const { comments } = this.props
        if ( !comments.length ) return <p>No comments</p>
        return(
            <div>
                <button onClick={this.toggleOpen}>{ this.getBtnText() }</button>
                { this.getComments() }
            </div>
        )
    }


    getBtnText(){
        return this.state.isOpen ? 'hide comments' : 'show comments';
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
