import {
    DELETE_ARTICLE,
    INCREMENT,
    SELECT_ARTICLE,
    SELECT_DATE_RANGE,
    RESET_DATE_RANGE,
    ADD_COMMENT
} from '../constants'

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

export function selectArticle(selected ) {
    return{
        type: SELECT_ARTICLE,
        payload: {
            selected
        }
    }
}

export function selectDateRange(dateRange) {
    return{
        type: SELECT_DATE_RANGE,
        payload: {
            dateRange
        }
    }
}

export function dateRangeReset() {
    return{
        type: RESET_DATE_RANGE
    }
}

export function addComment(data) {
    return{
        type: ADD_COMMENT,
        payload: {
            data
        }
    }
}