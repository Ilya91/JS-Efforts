import { normalizedArticles as DefaultArticles } from '../fixtures'
import { DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES  } from '../constants'
import { arrToMap } from '../helpers'
import { Map } from 'immutable'

const defaultState = new Map({})

export default ( articleState = defaultState, action) => {
    const { type, payload, randomId, response } = action

    switch (type) {
        case DELETE_ARTICLE: return articleState.filter(article => article.id !== payload.id)
        case ADD_COMMENT:
            /*articleState.forEach(function (item, i, articleState) {
                if(item['id'] === payload.data.idArticle){
                    item['comments'].push(payload.data.id)
                }
            })
            return articleState*/
            const article = articleState[payload.articleId]
            return {
                ...articleState,
                [payload.articleId]: {
                    ...article,
                    comments: (article.comments || []).concat(randomId)
                }
            }
        case LOAD_ALL_ARTICLES:
            return arrToMap(response)

        /*case SELECT_ARTICLE:
            articleState = DefaultArticles
            let data = payload.data
            if(data.length !== 0){
                function iterator(data) {
                    for(let i = 0; i < data.length; i++){
                        return data[i].value
                    }
                }
                return articleState.filter(article => article.id === iterator(data))
            }else {
                return articleState
            }*/
/*        case SELECT_DATE_RANGE:
            let from = new Date(payload.data.from).valueOf()
            let to = new Date(payload.data.to).valueOf()
            console.log(payload.data)
            if(to === null && from === null){
                return articleState = DefaultArticles
            }
            else if(to !== null && from !== null){
                return articleState.filter(article =>
                    (from <= new Date(article.date).valueOf() && new Date(article.date) <= to))
            }else {
                return articleState = DefaultArticles
            }*/
    }
    return articleState
}