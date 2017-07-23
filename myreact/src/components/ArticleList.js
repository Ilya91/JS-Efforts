import React from 'react'
import Article from './Article'

export default function ArticleList({ articles }) {
    return (
        <ul>
            {
                articles.map(( article, i) =>
                <Article
                    key={article.id}
                    title={article.title}
                    date={article.date}
                    comments={article.comments}>{article.text}</Article>

                    )
            }
        </ul>
    )
}