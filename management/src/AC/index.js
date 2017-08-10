import {
    ADD_NEW_TASK

} from '../constants'

export function addNewTask(data) {
    return{
        type: ADD_NEW_TASK,
        payload: data
    }
}