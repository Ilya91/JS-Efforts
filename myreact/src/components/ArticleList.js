import React, { Component } from 'react'
import Article from './Article/index'
import PropTypes from 'prop-types'
import accordion from '../decorators/accordion'
import { connect } from 'react-redux'

class ArticleList extends Component{

    static propTypes = {
        //from connect
        articles: PropTypes.array.isRequired,

        toggleOpenArticle: PropTypes.func.isRequired,
        openArticleId: PropTypes.any
    }

    render() {
        const { articles, openArticleId, toggleOpenArticle } = this.props
        return(
                <ul>
                    {
                        articles.map((article, i) =>
                            <Article
                                    article = {article}
                                    key={article.id}
                                    title={article.title}
                                    date={Date.parse(article.date)}
                                    comments={article.comments}
                                    isOpen = { article.id === openArticleId}
                                    toggleOpen = { toggleOpenArticle(article.id) }
                            >
                                {article.text}
                            </Article>
                        )
                    }
                </ul>
        )
    }
}
export default connect(state => ({
    articles: state.articles
}))(accordion(ArticleList))