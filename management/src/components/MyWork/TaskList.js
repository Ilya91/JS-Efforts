import React, { Component } from 'react'
import TaskItem from './TaskItem'
import accordion from '../../decorators/accordion'

class TaskList extends Component {

    handleClickTask = () => {

    }

    render(){
        const { openArticleId, toggleOpenArticle } = this.props
        const { tasks, onClick } = this.props
        return(
            <div>
                { tasks.map((task) => <TaskItem
                    onClick={onClick}
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    isOpen = { task.id === openArticleId }
                    toggleOpen = { toggleOpenArticle(task.id) }
                />)}
            </div>
        )
    }
}
export default accordion(TaskList)