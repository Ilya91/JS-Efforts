import {
    ADD_NEW_TASK,
    SET_ACTIVE_TASK,
    DELETE_NEW_TASK,
    ADD_TASK_DESCRIPTION,
    CHANGE_TASK_STATUS,
    SET_TASK_DATERANGE,
    ADD_SUB_TASK,
    CHANGE_SUB_TASK_TITLE,
    ADD_SUB_TASK_USER,
    LOAD_ALL_TASKS,
    SET_ACTIVE_PROJECT,
    ADD_NEW_PROJECT,
    DELETE_PROJECT,
    ADD_PROJECT_DESCRIPTION,
    CHANGE_PROJECT_STATUS,
    SET_PROJECT_DAY_START,
    SET_PROJECT_DAY_END,
    ADD_TASK_TO_PROJECT,
    ADD_USER_TO_TASK,
    ADD_USER_TO_PROJECT,
    GET_ACTIVE_USER,

    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR,
    FETCH_MESSAGE
} from '../constants'

import {push, replace} from 'react-router-redux'
import axios from 'axios'
const ROOT_URL = 'http://127.0.0.1:3000';

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

export function setTaskDateRange(id, complete) {
    return{
        type: SET_TASK_DATERANGE,
        payload: {
            id, complete
        }
    }
}

export function addSubTask(id, subtask) {
    return{
        type: ADD_SUB_TASK,
        payload: {
            id, subtask
        },
        generateId: true
    }
}

export function changeSubTaskTitle(id, title) {
    return{
        type: CHANGE_SUB_TASK_TITLE,
        payload: {
            id, title
        }
    }
}

export function addSubTaskUser(id, userId) {
    return{
        type: ADD_SUB_TASK_USER,
        payload: {
            id, userId
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

export function loadAllTasks() {
    return {
        type: LOAD_ALL_TASKS,
        callAPI: 'http://127.0.0.1:3000/tasks'
    }
}

export function addUserToTask(id, userId) {
    return{
        type: ADD_USER_TO_TASK,
        payload: {
            id, userId
        }
    }
}


/* projects */
export function setActiveProject(id) {
    return{
        type: SET_ACTIVE_PROJECT,
        payload: {
            id
        }
    }
}

export function addNewProject(project) {
    return{
        type: ADD_NEW_PROJECT,
        payload: {
            project
        }
    }
}
export function deleteProject(id) {
    return (dispatch) => {
        dispatch(replace('/projects'))
        dispatch({
            type: DELETE_PROJECT,
            payload: { id }
        })

    }
}

export function addProjectDescription(id, desc) {
    return{
        type: ADD_PROJECT_DESCRIPTION,
        payload: {
            id, desc
        }
    }
}

export function changeProjectStatus(id, status) {
    return{
        type: CHANGE_PROJECT_STATUS,
        payload: {
            id, status
        }
    }
}

export function setProjectDayStart(id, dateStart) {
    return{
        type: SET_PROJECT_DAY_START,
        payload: {
            id, dateStart
        }
    }
}

export function setProjectDayEnd(id, dateEnd) {
    return{
        type: SET_PROJECT_DAY_END,
        payload: {
            id, dateEnd
        }
    }
}

export function addTaskToProject(id, projectId) {
    return{
        type: ADD_TASK_TO_PROJECT,
        payload: {
            id, projectId
        }
    }
}

export function addUserToProject(id, userId) {
    return{
        type: ADD_USER_TO_PROJECT,
        payload: {
            id, userId
        }
    }
}


/*AUTHENTICATION*/
export function signinUser({ email, password }) {
    return function(dispatch) {
        // Submit email/password to the server
        axios.post(`${ROOT_URL}/signin`, { email, password })
            .then(response => {
                // If request is good...
                // - Update state to indicate user is authenticated
                let id = response.data.id ? response.data.id : null
                dispatch({ type: AUTH_USER })
                //dispatch({ type: GET_ACTIVE_USER, payload:{ id } })
                // - Save the JWT token
                localStorage.setItem('token', response.data.token)
                // - redirect to the route '/feature'
                dispatch(push('/issues'))
                return id
            }).then(response => {
                axios.get(`${ROOT_URL}/users/${response}`, {
                    params: {
                        status: 1
                    }
                })
            })
            .catch(() => {
                dispatch(authError('Bad Login Info'));
            });
    }
}

export function signupUser({ email, password, login }) {
    return function(dispatch) {
        axios.post(`${ROOT_URL}/signup`, { email, password, login })
            .then(response => {
                let id = response.data.id ? response.data.id : null
                dispatch(push('/signin'))
                return id
            })
            .catch(response => dispatch(authError(response.data.error)));
    }
}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    };
}

export function signoutUser() {
    return (dispatch) => {
            axios.get(`${ROOT_URL}/users`, {
                params: {
                    status: 1
                }
            }).then(response => {
                let id = response.data.id ? response.data.id : null
                console.log(id)
            })
        dispatch({type: UNAUTH_USER})
        localStorage.removeItem('token')
        dispatch(replace('/signin'))
    }
}

export function fetchMessage() {
    return function(dispatch) {
        axios.get(ROOT_URL, {
            headers: { authorization: localStorage.getItem('token') }
        })
            .then(response => {
                dispatch({
                    type: FETCH_MESSAGE,
                    payload: response.data.message
                });
            });
    }
}
