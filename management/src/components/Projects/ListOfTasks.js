import React, { Component } from 'react'
import '../MyWork/Content.css'
import './style.css'
import Moment from 'react-moment';
import moment from 'moment'
import Collapsible from 'react-collapsible';
import Item from './Item'

import { connect } from 'react-redux'
import { setActiveTask, loadAllTasks } from '../../AC'
import TaskItem from '../MyWork/TaskItem'


class ListOfTasks extends Component {


    taskItemBody = ( task ) => {
        const { activeTask } = this.props
        return (
            <TaskItem
                key={task.id}
                onClick={this.handleClickTask(task.id)}
                id={task.id}
                title={task.title}
                date={task.date}
                isActive={task.id === activeTask}
            />
        )
    }

    handleClickTask = (id) => ev => {
        const { setActiveTask } = this.props
        setActiveTask(id)
    }

    getTasks = () => {
        const { tasks, projectId } = this.props
        return tasks ? ( projectId ? tasks.filter((task) => (
                        task.projectId === projectId
                    )) : tasks ) : null
    }

    render(){
        const { projectId } = this.props
        const tasks = this.getTasks()
        const tommorow = moment().add(1, 'days')
        const endThisWeek = moment().endOf('isoWeek')
        const startNextWeek = moment().add(1, 'weeks').startOf('isoWeek')
        const endNextWeek = moment().add(1, 'weeks').endOf('isoWeek')
        const afterNextWeek = moment().add(1, 'weeks').endOf('isoWeek')
        return(
            <div>
                <Collapsible
                    open={true}
                    transitionTime={400}
                    trigger={ <p><i className='glyphicon glyphicon-triangle-bottom'></i><span>Завтра</span></p> }
                    easing={'cubic-bezier(0,0.68,1,0.59)'}>
                    <ul className="taskList">
                        {tasks ? (tasks.filter((task) => (
                            task.complete ?
                                moment(task.complete.to).isSame(moment(tommorow), 'day') : false
                        )).map((task) => this.taskItemBody(task))) : null}
                    </ul>
                </Collapsible>
                <Collapsible
                    open={true}
                    transitionTime={400}
                    trigger={ <p><i className='glyphicon glyphicon-triangle-bottom'></i><span>Следующая неделя</span></p> }
                    easing={'cubic-bezier(0,0.68,1,0.59)'}>
                    <ul className="taskList">
                        {tasks ? (tasks.filter((task) => (
                            task.complete ?
                                moment(task.complete.to).isBetween(startNextWeek, endNextWeek) : false
                        )).map((task) => this.taskItemBody(task))) : null}
                    </ul>
                </Collapsible>
                <Collapsible
                    open={true}
                    transitionTime={400}
                    trigger={ <p><i className='glyphicon glyphicon-triangle-bottom'></i><span>Позже</span></p> }
                    easing={'cubic-bezier(0,0.68,1,0.59)'}>
                    <ul className="taskList">
                        {tasks ? (tasks.filter((task) => (
                            task.complete ?
                                moment(task.complete.to).isAfter(afterNextWeek) : false
                        )).map((task) => this.taskItemBody(task))) : null}
                    </ul>
                </Collapsible>
            </div>
        )
    }
}
export default connect((state) => ({
    tasks: state.tasks,
    subTasks: state.subTasks,
    activeTask: state.activeTask
}), { setActiveTask, loadAllTasks })(ListOfTasks)