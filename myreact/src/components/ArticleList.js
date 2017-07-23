import React, { Component } from 'react'
import Article from './Article'

class ArticleList extends Component{
    state = {
        openArticleId: null
    }

    toggleOpenArticle(openArticleId){
        this.setState({
            openArticleId
        })
    }

    render() {
        const { articles } = this.props
        return(
                <ul>
                    {
                        articles.map((article, i) =>
                            <Article
                                    key={article.id}
                                    title={article.title}
                                    date={article.date}
                                    comments={article.comments}
                                    isOpen = { article.id === this.state.openArticleId}
                                    toggleOpen = { this.toggleOpenArticle.bind(this, article.id) }
                            >
                                {article.text}
                            </Article>
                        )
                    }
                </ul>
        )
    }
}
export default ArticleList