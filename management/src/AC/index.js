import {
    ADD_NEW_TASK,
    SET_ACTIVE_TASK,
    DELETE_NEW_TASK

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

export function setActiveTask(id) {
    return{
        type: SET_ACTIVE_TASK,
        payload: {
            id
        }
    }
}