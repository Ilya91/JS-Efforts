import { normalizedComments as DefaultComments } from '../fixtures'
import { DELETE_ARTICLE  } from '../constants'

const commentsMap = DefaultComments.reduce((acc, comment) => {
    acc[comment.id] = comment
    return acc
}, {})

export default ( commentsState = commentsMap, action) => {
    const { type, payload } = action

    switch (type) {
    }
    return commentsState
}