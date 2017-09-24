import {
    ADD_NEW_TASK,
    SET_ACTIVE_TASK,
    DELETE_NEW_TASK,
    LOAD_ALL_SUBTASKS,
    CHANGE_TASK_STATUS,
    SET_TASK_DATERANGE,
    ADD_SUB_TASK,
    CHANGE_SUB_TASK_TITLE,
    ADD_SUB_TASK_USER,
    LOAD_ALL_TASKS,
    LOAD_ALL_USERS,
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

    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR,
    FETCH_MESSAGE
} from '../constants'

import {push, replace} from 'react-router-redux'
import axios from 'axios'
import api from '../api'
const ROOT_URL = 'http://127.0.0.1:3000'


export function loadAllTasks() {
    return {
        type: LOAD_ALL_TASKS,
        callAPI: `${ROOT_URL}/tasks`
    }
}

export function loadAllUsers() {
    return {
        type: LOAD_ALL_USERS,
        callAPI: `${ROOT_URL}/users`
    }
}

export function loadAllProjects() {
    return {
        type: LOAD_ALL_TASKS,
        callAPI: `${ROOT_URL}/projects`
    }
}

export function loadAllSubTasks() {
    return {
        type: LOAD_ALL_SUBTASKS,
        callAPI: `${ROOT_URL}/subtasks`
    }
}


export function addNewTask(task) {
    return function (dispatch) {
        api.createTask(task)
            .then(() => {
                dispatch(
                    {type: LOAD_ALL_TASKS, callAPI: `${ROOT_URL}/tasks`})
            })
            .catch(response => dispatch(authError(response.data.error)));
    }
}
/*export function loadAllTasks() {
    return function(dispatch) {
        axios.get(`${ROOT_URL}/tasks`)
            .then(({data}) => {
                dispatch(
                    {type: LOAD_ALL_TASKS,
                        payload:{
                            data
                        }
                    })
            })
            .catch(response => dispatch(authError(response.data.error)));
    }
}*/


export function deleteTask(id) {
    return function (dispatch) {
        api.deleteTask(id)
            .then(() => {
                dispatch({type: LOAD_ALL_TASKS, callAPI: `${ROOT_URL}/tasks`})
                dispatch({type: DELETE_NEW_TASK})
            })
            .catch(response => dispatch(authError(response.data.error)));
    }
}
export function addTaskDescription(id, data) {
    return function (dispatch) {
        api.updateTask(id, data)
            .then(() => {
                dispatch({type: LOAD_ALL_TASKS, callAPI: `${ROOT_URL}/tasks`})
            })
            .catch(response => dispatch(authError(response.data.error)));
    }
}

export function changeTaskStatus(id, status) {
    return function (dispatch) {
        api.updateTask(id, status)
            .then(() => {
                dispatch({type: LOAD_ALL_TASKS, callAPI: `${ROOT_URL}/tasks`})
            })
            .catch(response => dispatch(authError(response.data.error)));
    }
}

export function addTaskToProject(id, projectId) {
    return function (dispatch) {
        api.updateTask(id, projectId)
            .then(() => {
                dispatch({type: LOAD_ALL_TASKS, callAPI: `${ROOT_URL}/tasks`})
            })
            .catch(response => dispatch(authError(response.data.error)));
    }
}

export function setTaskDateRange(id, complete) {
    return function (dispatch) {
        api.updateTask(id, complete)
            .then(() => {
                dispatch({type: LOAD_ALL_TASKS, callAPI: `${ROOT_URL}/tasks`})
            })
            .catch(response => dispatch(authError(response.data.error)));
    }
}

export function addSubTask(subtask) {
    return function (dispatch) {
        api.createSubTask(subtask)
            .then(() => {
                dispatch({type: LOAD_ALL_SUBTASKS, callAPI: `${ROOT_URL}/subtasks`})
            })
            .catch(response => dispatch(authError(response.data.error)));
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
        axios.post(`${ROOT_URL}/signin`, { email, password })
            .then(response => {
                dispatch({ type: AUTH_USER })
                localStorage.setItem('token', response.data.token)
                dispatch(push('/issues'))
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
                dispatch(push('/signin'))
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