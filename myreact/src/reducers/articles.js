import { articles as DefaultArticles } from '../fixtures'
import { DELETE_ARTICLE, SELECT_ARTICLE } from '../constants'

export default ( articleState = DefaultArticles, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE: return articleState.filter(article => article.id !== payload.id)
        case SELECT_ARTICLE:
            articleState = DefaultArticles
            return articleState.filter(article => article.id === payload.data.value)
    }
    return articleState
}