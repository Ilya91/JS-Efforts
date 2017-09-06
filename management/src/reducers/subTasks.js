/*let localSubTasks = JSON.parse(localStorage.getItem('subTasks'))
if(localSubTasks === null){
    localSubTasks = []
}*/
import {arrToMap, mapToArr} from '../helpers'
import {
    ADD_SUB_TASK,
    CHANGE_SUB_TASK_TITLE,
    ADD_SUB_TASK_USER
} from '../constants'
export default ( taskState = [], action) => {
    const { type, payload } = action

    switch (type) {
        case ADD_SUB_TASK: return [...taskState, payload.subtask ]
        case CHANGE_SUB_TASK_TITLE:
            const value = taskState.map(function (subtask) {
                if(subtask.id === payload.id){
                    subtask.title = payload.title
                }
                return subtask
            })
            return value

        case ADD_SUB_TASK_USER:
            taskState = arrToMap(taskState)
            const subtask = taskState[payload.id]
            const newState2 = {
                ...taskState,
                [payload.id]: {
                    ...subtask,
                    users: (subtask.users || []).concat(payload.userId)
                }
            }
            return mapToArr(newState2)
    }
    return taskState
}