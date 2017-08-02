import { createStore } from 'redux'
import reducer from '../reducers'

const store = createStore(reducer)
// only for dev
window.store = store

export default store