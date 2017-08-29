import { createStore, applyMiddleware } from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reducer from '../reducers'
import logger from 'redux-logger'
import idGenerator from '../middlewares/idGenerator'

const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(thunk, logger, idGenerator)
))

// only for dev
window.store = store

export default store