export function getUserForTask(id, users){
    if(Array.isArray(id)){
        return users.filter((user) => id.includes( user.id ))
    }
    return users.filter((user) => user.id === id)
}

export function getTasks(tasks, projectId = null){
    return tasks ? ( projectId ? tasks.filter((task) => (
        task.projectId === projectId
    )) : tasks ) : null
}