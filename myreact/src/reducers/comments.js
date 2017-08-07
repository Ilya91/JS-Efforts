import { normalizedComments as DefaultComments } from '../fixtures'
import { DELETE_ARTICLE  } from '../constants'

export default ( commentsState = DefaultComments, action) => {
    const { type, payload } = action

    switch (type) {
    }
    return commentsState
}