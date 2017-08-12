import { combineReducers } from 'redux'
import tasks from './tasks'
import activeTask from './activeTask'

export default combineReducers({
    tasks,
    activeTask
})