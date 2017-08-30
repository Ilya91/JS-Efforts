import { combineReducers } from 'redux'
import tasks from './tasks'
import subTasks from './subTasks'
import users from './users'
import activeTask from './activeTask'

export default combineReducers({
    tasks,
    activeTask,
    subTasks,
    users
})