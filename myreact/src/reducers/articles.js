import { articles as DefaultArticles } from '../fixtures'
import { DELETE_ARTICLE } from '../constants'

export default ( articleState = DefaultArticles, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE: return articleState.filter(article => article.id !== payload.id)
    }
    return articleState
}