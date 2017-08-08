import { normalizedComments as DefaultComments } from '../fixtures'
import { ADD_COMMENT  } from '../constants'

const commentsMap = DefaultComments.reduce((acc, comment) => {
    acc[comment.id] = comment
    return acc
}, {})

export default ( commentsState = commentsMap, action) => {
    const { type, payload } = action

    switch (type) {
        case ADD_COMMENT: return commentsState.push(payload)
    }
    return commentsState
}