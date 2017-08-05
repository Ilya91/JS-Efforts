import { combineReducers } from 'redux'
import counterReducer from './counter'
import articles from './articles'
import select from './select'
import range from './dateRange'

export default combineReducers({
    count: counterReducer,
    articles,
    select,
    range
})