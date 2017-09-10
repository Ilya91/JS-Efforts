export function getUserForTask(id, users){
    if(Array.isArray(id)){
        return users.filter((user) => id.includes( user.id ))
    }
    return users.filter((user) => user.id === id)
}