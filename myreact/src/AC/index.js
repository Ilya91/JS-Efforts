import { DELETE_ARTICLE, INCREMENT, SELECT_ARTICLE, SELECT_DATE_RANGE, RESET_DATE_RANGE } from '../constants'
export function increment() {
    return{
        type: INCREMENT
    }
}

export function deleteArticle(id) {
    return{
        type: DELETE_ARTICLE,
        payload: {
            id
        }
    }
}

export function selectArticle(data) {
    return{
        type: SELECT_ARTICLE,
        payload: {
            data
        }
    }
}

export function selectDateRange(data) {
    return{
        type: SELECT_DATE_RANGE,
        payload: {
            data
        }
    }
}

export function dateRangeReset() {
    return{
        type: RESET_DATE_RANGE
    }
}