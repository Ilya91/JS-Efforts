import {
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR,
    FETCH_MESSAGE,
    GET_ACTIVE_USER
} from '../constants'

export default function(state = {}, action) {
    const { type, payload, response } = action
    switch(type) {
        case AUTH_USER:
            return { ...state, error: '', authenticated: true}
        case GET_ACTIVE_USER:
            return { ...state, error: '', authenticated: true, id: payload.id}
        case UNAUTH_USER:
            return { ...state, authenticated: false, id: null }
        case AUTH_ERROR:
            return { ...state, error: payload }
        case FETCH_MESSAGE:
            return { ...state, message: payload }
    }

    return state;
}
