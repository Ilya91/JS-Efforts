import { projects as DefaultProjects } from '../components/fixtures'

export default ( taskState = DefaultProjects, action) => {
    const { type, payload, response } = action

    switch (type) {
    }
    return taskState
}