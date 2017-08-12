import { SET_ACTIVE_TASK  } from '../constants'

export default ( activeTask = null, action) => {
    const { type, payload } = action

    switch (type) {
        case SET_ACTIVE_TASK:
            if (activeTask === payload.id){
                return null
            }else {
                return payload.id
            }

    }
    return activeTask
}