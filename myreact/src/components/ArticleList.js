import React, { Component } from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import accordion from '../decorators/accordion'

class ArticleList extends Component{

    static propTypes = {
        articles: PropTypes.array,
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
                                    key={article.id}
                                    title={article.title}
                                    date={article.date}
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
export default accordion(ArticleList)