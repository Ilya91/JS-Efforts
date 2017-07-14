import React from 'react';

import './AboutPage.less';

import articles from '../articles.json';

const Article = React.createClass({

    getInitialState() {
        const { articleId } = this.props.params;

        return {
            article: articles.find(article => article.id ===  articleId)
        };
    },

    componentWillReceiveProps(nextProps) {
        const { articleId: prevId } = this.props.params;
        const { articleId: nextId } = nextProps.params;

        if (prevId !== nextId) {
            this.setState({
                article: articles.find(article => article.id ===  nextId)
            });
        }
    },
    render() {
        const { article } = this.state;
        return (
            <div className='Article'>
                <h2 className='title'>
                    {article.subject}
                </h2>
                <div className='text'>
                    <p>{article.body}</p>
                </div>
                <div className='message-container'>
                    {this.props.children}
                </div>
            </div>
        );
    }
});

export default Article;
