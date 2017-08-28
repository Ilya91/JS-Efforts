import React, { Component } from 'react'
import './Content.css'
import FormTask from './FormTask'
import TaskList from './TaskList'
import Task from './Task'
import OtherDays from './OtherDays'
import { connect } from 'react-redux'
import Moment from 'react-moment';
import moment from 'moment'

import { setActiveTask } from '../../AC'
import TaskItem from './TaskItem'

class MyWork extends Component {

    getNumberOfTasks = ( start, end ) => {
        const { tasks } = this.props
        if( tasks ){
            if( start && end ){
                let newarr = tasks.filter((task) => (
                    task.complete ?
                        moment(task.complete.to).isBetween(start, end) : false
                ))
                return newarr.length
            }else if( start && !end ){
                let newarr = tasks.filter((task) => (
                    task.complete ?
                        moment(task.complete.to).isAfter( start ) : false
                ))
                return newarr.length
            }else{
                let newarr = tasks.filter((task) =>
                    !task.complete
                )
                return newarr.length
            }

        }
    }

    taskItemBody = ( task ) => {
        const { activeTask } = this.props
            return (
                <TaskItem
                    onClick={this.handleClickTask(task.id)}
                    key={task.id}
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

    render(){
        const { tasks, activeTask } = this.props
        const startThisWeek = moment().startOf('isoWeek')
        const endThisWeek = moment().endOf('isoWeek')
        const startNextWeek = moment().add(1, 'weeks').startOf('isoWeek')
        const endNextWeek = moment().add(1, 'weeks').endOf('isoWeek')
        const afterNextWeek = moment().add(1, 'weeks').endOf('isoWeek')
        return(
            <div className="content-wrapper">
                <section className="content">
                    <div className="row">
                        <section className={ activeTask ? "col-lg-6" : "col-lg-8"}>
                            <div className="box box-primary">
                                <div className="box-header">
                                    <h3 className="box-title">НА СЕГОДНЯ</h3>
                                    <span className="myWorkData"><Moment format="MMM D"/></span>
                                    <span className="label label-info pull-right">{ this.getNumberOfTasks( null, null) }</span>
                                </div>
                                <div className="box-body">
                                    <FormTask/>
                                </div>
                                <ul className="taskList">
                                    {tasks.filter((task) =>
                                        !task.complete
                                    ).map((task) => this.taskItemBody(task)
                                    )}
                                </ul>
                                <div className="box-header">
                                    <h3 className="box-title">НА ЭТУ НЕДЕЛЮ</h3>
                                    <span className="myWorkData">
                                        <Moment locale="en" format="MMM D">
                                            {startThisWeek}
                                        </Moment> -
                                        <Moment format="MMM D">
                                             {endThisWeek}
                                        </Moment>
                                    </span>
                                    <span className="label label-info pull-right">{ this.getNumberOfTasks( startThisWeek, endThisWeek) }</span>
                                </div>
                                <ul className="taskList">
                                    {tasks.filter((task) => (
                                        task.complete ?
                                        moment(task.complete.to).isBetween(startThisWeek, endThisWeek) : false
                                    )).map((task) => this.taskItemBody(task)
                                    )}
                                </ul>

                                <div className="box-header">
                                    <h3 className="box-title">НА СЛЕД. НЕДЕЛЮ</h3>
                                    <span className="myWorkData">
                                        <Moment locale="en" format="MMM D">
                                            { startNextWeek }
                                        </Moment> -
                                        <Moment locale="en" format="MMM D">
                                             { endNextWeek }
                                        </Moment>
                                    </span>
                                    <span className="label label-info pull-right">{ this.getNumberOfTasks( startNextWeek, endNextWeek ) }</span>
                                </div>
                                <ul className="taskList">
                                    {tasks.filter((task) => (
                                        task.complete ?
                                            moment(task.complete.to).isBetween(startNextWeek, endNextWeek) : false
                                    )).map((task) => this.taskItemBody(task)
                                    )}
                                </ul>
                                <div className="box-header">
                                    <h3 className="box-title">ПОЗЖЕ</h3>
                                    <span className="myWorkData">
                                        После <Moment locale="en" format="MMM D">
                                             { afterNextWeek }
                                        </Moment>
                                    </span>
                                    <span className="label label-info pull-right">{ this.getNumberOfTasks( afterNextWeek, null ) }</span>
                                </div>
                                <ul className="taskList">
                                    {tasks.filter((task) => (
                                        task.complete ?
                                            moment(task.complete.to).isAfter(afterNextWeek) : false
                                    )).map((task) => this.taskItemBody(task)
                                    )}
                                </ul>
                                { activeTask ? tasks.filter((task) =>
                                    activeTask === task.id
                                ).map(function (task) {
                                    if(task.status.label === ''){
                                        return null
                                    }else {
                                        return (
                                            <div>
                                                <div className="pre-box-footer"></div>
                                                <div key={task.status.value} className="box-footer-task-list">
                                                    <i className="fa fa-check"></i>
                                                    <span>{ task.status.label }</span>
                                                    <span className="label label-info pull-right">1</span>
                                                </div>
                                            </div>
                                        )
                                    }
                                }) : null  }
                            </div>
                        </section>
                        { activeTask ? tasks.filter((task) =>
                            activeTask === task.id
                            ).map((task) => <Task
                                    key={task.id}
                                    id={task.id}
                                    title={task.title}
                                    date={task.date}
                                    description={task.description ? task.description : ''}
                                    complete={task.complete ? task.complete : ''}
                                    status={task.status}
                        />) : <OtherDays getNumberOfTasks={ this.getNumberOfTasks }/>  }

                    </div>
                </section>
            </div>
        )
    }

    componentDidUpdate() {
        this._updateLocalStorage();
    }

    _updateLocalStorage() {
        const { tasks } = this.props
        let tasksStorage = JSON.stringify(tasks);
        localStorage.setItem('tasks', tasksStorage);
    }
}
export default connect((state) => ({
    tasks: state.tasks,
    activeTask: state.activeTask
}), { setActiveTask })(MyWork)