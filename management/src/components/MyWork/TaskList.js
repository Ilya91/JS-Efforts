import React, { Component } from 'react'
import TaskItem from './TaskItem'
import { connect } from 'react-redux'
import { setActiveTask } from '../../AC'

class TaskList extends Component {

    handleClickTask = (id) => ev => {
        const { setActiveTask } = this.props
        setActiveTask(id)
    }

    render(){
        const { tasks, activeTask } = this.props
        return(
            <div>
                {tasks.map((task) => <TaskItem
                    onClick={this.handleClickTask(task.id)}
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    date={task.date}
                    isActive={task.id === activeTask}
                />)}
            </div>
        )
    }
}
export default connect(state => ({
    activeTask: state.activeTask
}), { setActiveTask })(TaskList)