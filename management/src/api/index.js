import axios from 'axios'
import {apiPrefix} from '../../server/config.json'

export default {

    createTask(data) {
        return axios.post(`${apiPrefix}/tasks`, data);
    },

    deleteTask(id) {
        return axios.delete(`${apiPrefix}/tasks/${id}`);
    },

    updateTask(id, data) {
        console.log(id, data)
        return axios.patch(`${apiPrefix}/tasks/${id}`, data);
    },

    createSubTask(data) {
        return axios.post(`${apiPrefix}/subtasks`, data);
    },
}
