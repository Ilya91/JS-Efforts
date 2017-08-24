import { tasks as DefaultTasks } from '../components/fixtures'
import { ADD_NEW_TASK, DELETE_NEW_TASK, ADD_TASK_DESCRIPTION } from '../constants'


export default ( taskState = DefaultTasks, action) => {
    const { type, payload } = action

    switch (type) {
        case ADD_NEW_TASK: return [...taskState, payload.task ]
        case DELETE_NEW_TASK: return taskState.filter(task => task.id !== payload.id)
        case ADD_TASK_DESCRIPTION:
            const val = taskState.map(function (task) {
                if(task.id === payload.data.id){
                    task.description = payload.data.desc
                }
                return task
            })
            return val
    }
    return taskState
}