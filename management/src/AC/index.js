import {
    ADD_NEW_TASK,
    SET_ACTIVE_TASK,
    DELETE_NEW_TASK,
    ADD_TASK_DESCRIPTION,
    CHANGE_TASK_STATUS

} from '../constants'

export function addNewTask(task) {
    return{
        type: ADD_NEW_TASK,
        payload: {
            task
        }
    }
}

export function deleteTask(id) {
    return{
        type: DELETE_NEW_TASK,
        payload: {
            id
        }
    }
}
export function addTaskDescription(data) {
    return{
        type: ADD_TASK_DESCRIPTION,
        payload: {
            data
        }
    }
}

export function changeTaskStatus(id, status) {
    return{
        type: CHANGE_TASK_STATUS,
        payload: {
            id, status
        }
    }
}

export function setActiveTask(id) {
    return{
        type: SET_ACTIVE_TASK,
        payload: {
            id
        }
    }
}