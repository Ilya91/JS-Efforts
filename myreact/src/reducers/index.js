import { combineReducers } from 'redux'
import counterReducer from './counter'
import articles from './articles'
import comments from './comments'
import comment from './comment'
import filters from './filters'

export default combineReducers({
    count: counterReducer,
    articles,
    comments,
    comment,
    filters
})