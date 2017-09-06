import { tasks as DefaultTasks } from '../components/fixtures'
/*let localTasks = JSON.parse(localStorage.getItem('tasks'));
if(localTasks === null){
    localTasks = []
}*/
import {arrToMap, mapToArr} from '../helpers'
import { ADD_NEW_TASK,
        DELETE_NEW_TASK,
        ADD_TASK_DESCRIPTION,
        CHANGE_TASK_STATUS,
        SET_TASK_DATERANGE,
        LOAD_ALL_TASKS
} from '../constants'
import { Map, List } from 'immutable'

export default ( taskState = DefaultTasks, action) => {
    const { type, payload, response } = action

    switch (type) {
        case LOAD_ALL_TASKS: return response.data
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

        case SET_TASK_DATERANGE:
            const val2 = taskState.map(function (task) {
                if(task.id === payload.id){
                    task.complete = payload.complete
                }
                return task
            })
            return val2

        /*case ADD_SUB_TASK:
            taskState = arrToMap(taskState)
            const task = taskState[payload.id]
            const newState2 = {
                ...taskState,
                [payload.id]: {
                    ...task,
                    subtasks: (task.subtasks || []).concat(payload.subtask)
                }
            }
            return mapToArr(newState2)*/

    }
    return taskState
}