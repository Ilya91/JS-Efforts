import React, { Component } from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import PropTypes from 'prop-types'
import FormComment from './FormComment/index'

class CommentList extends Component{

    static propTypes = {
        comments: PropTypes.array,
        toggleOpen: PropTypes.func.isRequired,
        isOpen: PropTypes.bool.isRequired
    }

    static defaultProps = {
        comments: []
    }

    getComments = () => {

        const { comments, isOpen, data, article:{id} } = this.props
        if( !isOpen) return null
        return (
            <div>
                <FormComment articleId={id}/>
                    <ul>
                        {
                            comments.map(( id ) =>
                                <li key={ id }>
                                    <Comment id={ id }/>
                                </li>
                            )
                        }
                    </ul>
            </div>
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
