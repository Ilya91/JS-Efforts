import React, { Component, PureComponent } from 'react'
//import PropTypes from 'prop-types'
import CommentList from './CommentList'
import { CSSTransitionGroup } from 'react-transition-group' // ES6

import './Article.css'

class Article extends PureComponent{

    constructor( props ){
        super( props )
    }

    /*static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired
    }*/


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

    getBtnText(){
        const { isOpen } = this.props
        return isOpen ? 'Close' : 'Open'
    }


    render(){
        const { title, toggleOpen } = this.props //деструктуризация
        console.log('---', 'update article')
        return(
            <li ref={ this.setContainerRef }>
                <h3>{ title }</h3>
                <button onClick={ toggleOpen }>{ this.getBtnText()}</button>
                <CSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    component = 'div'
                >
                { this.getArticleBody() }
                </CSSTransitionGroup>
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
