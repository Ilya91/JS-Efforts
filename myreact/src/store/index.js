import { createStore, applyMiddleware } from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reducer from '../reducers'
import api from '../middlewares/api'
import idGenerator from '../middlewares/idGenerator'
import logger from 'redux-logger'

const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(thunk, logger, idGenerator, api)
))

// only for dev
window.store = store

export default store