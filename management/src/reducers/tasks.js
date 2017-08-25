import { tasks as DefaultTasks } from '../components/fixtures'
let localTasks = JSON.parse(localStorage.getItem('tasks'));
import { ADD_NEW_TASK, DELETE_NEW_TASK, ADD_TASK_DESCRIPTION, CHANGE_TASK_STATUS } from '../constants'
import { Map, List } from 'immutable'


export default ( taskState = localTasks, action) => {
    const { type, payload } = action

    switch (type) {
        case ADD_NEW_TASK: return [...taskState, payload.task ]
        case DELETE_NEW_TASK: return taskState.filter(task => task.id !== payload.id)
        case CHANGE_TASK_STATUS:
            const value = taskState.map(function (task) {
                if(task.id === payload.id){
                    task.status = payload.status
                }
                return task
            })
            return value
        case ADD_TASK_DESCRIPTION:
            const deep = List(taskState)
            const deep2 = deep.updateIn(["id", payload.data.id], () => payload.data);
            console.log(deep, '----', deep2)
            const val = taskState.map(function (task) {
                if(task.id === payload.data.id){
                    task.description = payload.data.desc
                }
                return task
            })
            return val
    }
    return taskState
}