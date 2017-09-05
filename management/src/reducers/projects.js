import { projects as DefaultProjects } from '../components/fixtures'
let localProjects = JSON.parse(localStorage.getItem('projects'));
if(localProjects === null){
    localProjects = []
}
import { ADD_NEW_PROJECT,
         DELETE_PROJECT
} from '../constants'

export default ( projectState = localProjects, action) => {
    const { type, payload, response } = action

    switch (type) {
        case ADD_NEW_PROJECT: return [...projectState, payload.project ]
        case DELETE_PROJECT: return projectState.filter(project => project.id !== payload.id)
    }
    return projectState
}