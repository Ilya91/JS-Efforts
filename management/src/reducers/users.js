import { users as DefaultUsers } from '../components/fixtures'

export default ( userState = DefaultUsers, action) => {
    const { type, payload } = action
    return userState
}