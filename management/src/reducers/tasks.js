import { tasks as DefaultTasks } from '../components/fixtures'
import { ADD_NEW_TASK } from '../constants'

export default ( taskState = DefaultTasks, action) => {
    const { type, payload } = action

    switch (type) {
        case ADD_NEW_TASK: return taskState
    }
    return taskState
}