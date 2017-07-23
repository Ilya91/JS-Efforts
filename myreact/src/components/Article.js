import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CommentList from './CommentList'

class Article extends Component{

    constructor( props ){
        super( props )
    }

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

    getArticleBody() {
        const { date, children, comments, isOpen } = this.props
        if( !isOpen ) return null
        return (
            <div>
                <p><i>{ date }</i></p>
                <p>{ children }</p>
                <CommentList comments={ comments }/>
            </div>
        )
    }


    render(){
        const { title, toggleOpen } = this.props //деструктуризация
        return(
            <li ref={ this.setContainerRef }>
                <h3>{ title }</h3>
                <button onClick={ toggleOpen }>Open</button>
                { this.getArticleBody() }
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

export default Article


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
