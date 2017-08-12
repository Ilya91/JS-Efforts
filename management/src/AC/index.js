import {
    ADD_NEW_TASK,
    SET_ACTIVE_TASK

} from '../constants'

export function addNewTask(data) {
    return{
        type: ADD_NEW_TASK,
        payload: data
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