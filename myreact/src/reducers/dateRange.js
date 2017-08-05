import { SELECT_DATE_RANGE, RESET_DATE_RANGE } from '../constants'
export default ( range = [], action) => {
    const { type, payload } = action
    switch (type){
        case RESET_DATE_RANGE:
            return null
        case SELECT_DATE_RANGE:
            return payload.data

    }
    return range
}