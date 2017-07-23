import React, { Component } from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'

class CommentList extends Component{
    static defaultProps = {
        comments: []
    }

    constructor( props ){
        super( props )
    }



    getComments = () => {

        const { comments, isOpen } = this.props
        if( !isOpen) return null
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
        const { comments, toggleOpen } = this.props
        if ( !comments.length ) return <p>No comments</p>
        return(
            <div>
                <button onClick={ toggleOpen }>{ this.getBtnText() }</button>
                { this.getComments() }
            </div>
        )
    }


    getBtnText(){
        return this.props.isOpen ? 'hide comments' : 'show comments';
    }
}

export default toggleOpen(CommentList)




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
