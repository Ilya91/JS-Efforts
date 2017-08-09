import { normalizedComments as DefaultComments } from '../fixtures'
import { ADD_COMMENT  } from '../constants'

const commentsMap = DefaultComments.reduce((acc, comment) => {
    acc[comment.id] = comment
    return acc
}, {})

export default ( commentsState = commentsMap, action) => {
    const { type, payload } = action

    switch (type) {
        case ADD_COMMENT:
            /*let id = payload.data.id
            Object.defineProperty(commentsState, id, payload.data);
            console.log(id)*/
            commentsState.id = payload.data
            return commentsState // console.log(commentsState)

    }
    return commentsState
}