import React from 'react';
import { Link } from 'react-router';
import './AboutPage.less';
import articles from '../articles.json';

const Articles = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    getInitialState() {
        return {
            articles
        };
    },

    handleClick(articleId) {

        this.context.router.push(`/articles/${articleId}`);
    },

    render() {
        return (
            <div className='AboutPage'>
                <h2 className='title'>
                    Articles
                </h2>
                <div className='text'>
                    {
                        articles.map(article =>
                        <p>
                            <Link key={article.id} onClick={this.handleClick.bind(null, article.id)} className='menu-item-link my' to='/articles'>{article.subject}</Link>
                        </p>
                        )
                    }
                    </div>
            </div>
        );
    }
});

export default Articles;
