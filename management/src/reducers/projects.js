import { projects as DefaultProjects } from '../components/fixtures'
let localProjects = JSON.parse(localStorage.getItem('projects'));
if(localProjects === null){
    localProjects = []
}
import {
    ADD_NEW_PROJECT,
    DELETE_PROJECT,
    ADD_PROJECT_DESCRIPTION,
    CHANGE_PROJECT_STATUS,
    SET_PROJECT_DAY_START,
    SET_PROJECT_DAY_END
} from '../constants'
import {arrToMap, mapToArr} from '../helpers'

export default ( projectState = localProjects, action) => {
    const { type, payload, response } = action

    switch (type) {
        case ADD_NEW_PROJECT: return [...projectState, payload.project ]
        case DELETE_PROJECT: return projectState.filter(project => project.id !== payload.id)
        case ADD_PROJECT_DESCRIPTION:
            projectState = arrToMap(projectState)
            const project = projectState[payload.id]
            const description = payload.desc
            const imm = {
                ...projectState,
                [payload.id]:{
                    ...project, description
                }
            }
            return mapToArr(imm)

        case CHANGE_PROJECT_STATUS:
            projectState = arrToMap(projectState)
            let project2 = projectState[payload.id]
            const status = payload.status
            let imm2 = {
                ...projectState,
                [payload.id]:{
                    ...project2, status
                }
            }
            return mapToArr(imm2)

        case SET_PROJECT_DAY_START:
            projectState = arrToMap(projectState)
            let project3 = projectState[payload.id]
            const dateStart = payload.dateStart
            let imm3 = {
                ...projectState,
                [payload.id]:{
                    ...project3, dateStart
                }
            }
            return mapToArr(imm3)

        case SET_PROJECT_DAY_END:
            projectState = arrToMap(projectState)
            let project4 = projectState[payload.id]
            const dateEnd = payload.dateEnd
            let imm4 = {
                ...projectState,
                [payload.id]:{
                    ...project4, dateEnd
                }
            }
            return mapToArr(imm4)
    }
    return projectState
}