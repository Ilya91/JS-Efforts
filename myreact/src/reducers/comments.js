import { normalizedComments as DefaultComments } from '../fixtures'
import { ADD_COMMENT  } from '../constants'
import { arrToMap } from '../helpers'

const commentsMap = arrToMap(DefaultComments)

export default ( commentsState = commentsMap, action) => {
    const { type, payload, randomId } = action

    switch (type) {
        case ADD_COMMENT:
            /*let id = payload.data.id
            commentsState[id] = payload.data
            return commentsState*/
            return {...commentsState, [randomId]: payload.comment }
    }
    return commentsState
}