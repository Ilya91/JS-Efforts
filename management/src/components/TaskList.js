import React, { Component } from 'react'
import Task from './Task'

class TaskList extends Component {

    render(){
        const { tasks } = this.props
        return(
            <div>
                { tasks.map((task) => <Task key={task.id} id={task.id} title={task.title}/>)}
            </div>
        )
    }
}
export default TaskList