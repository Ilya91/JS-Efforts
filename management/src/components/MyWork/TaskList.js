import React, { Component } from 'react'
import TaskItem from './TaskItem'

class TaskList extends Component {

    render(){
        const { tasks, onClick } = this.props
        return(
            <div>
                { tasks.map((task) => <TaskItem onClick={onClick} key={task.id} id={task.id} title={task.title}/>)}
            </div>
        )
    }
}
export default TaskList