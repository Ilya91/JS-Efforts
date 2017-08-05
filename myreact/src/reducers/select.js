import { SELECT_ARTICLE } from '../constants'
export default ( select = [], action) => {
    const { type, payload } = action
    switch (type){
        case SELECT_ARTICLE: return payload.data
    }
    return select
}