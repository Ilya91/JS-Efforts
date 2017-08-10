export default store => next => action => {
    console.log('---',  store.getState('comments'))
    next(action)
}