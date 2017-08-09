import { ADD_COMMENT } from '../constants'
export default ( count = 0, action) => {
    const { type, payload } = action
    switch (type){
        case ADD_COMMENT: return payload.data
    }
    return count
}