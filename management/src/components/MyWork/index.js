import React, { Component } from 'react'
import './Content.css'
import FormTask from './FormTask'
import TaskList from './TaskList'
import Task from './Task'
import OtherDays from './OtherDays'
import { connect } from 'react-redux'
import Moment from 'react-moment';
import moment from 'moment'

class MyWork extends Component {

    getNumberOfTasks = () => {
        const { tasks } = this.props
        return tasks.length
    }

    render(){
        const { tasks, activeTask } = this.props
        return(
            <div className="content-wrapper">
                <section className="content">
                    <div className="row">
                        <section className={ activeTask ? "col-lg-6" : "col-lg-8"}>
                            <div className="box box-primary">
                                <div className="box-header">
                                    <h3 className="box-title">НА СЕГОДНЯ</h3>
                                    <span className="myWorkData"><Moment format="MMM D"/></span>
                                    <span className="label label-info pull-right">{ this.getNumberOfTasks() }</span>
                                </div>
                                <div className="box-body">
                                    <FormTask/>
                                </div>
                                <ul className="taskList">
                                    <TaskList tasks={tasks}/>
                                </ul>
                                <div className="box-header">
                                    <h3 className="box-title">НА ЭТУ НЕДЕЛЮ</h3>
                                    <span className="myWorkData">
                                        <Moment locale="en" format="MMM D">
                                            {moment().startOf('isoWeek')}
                                        </Moment> -
                                        <Moment format="MMM D">
                                             {moment().endOf('isoWeek')}
                                        </Moment>
                                    </span>
                                    <span className="label label-info pull-right">0</span>
                                </div>
                                <div className="box-header">
                                    <h3 className="box-title">НА СЛЕД. НЕДЕЛЮ</h3>
                                    <span className="myWorkData">
                                        <Moment locale="en" format="MMM D">
                                            {moment().add(1, 'weeks').startOf('isoWeek')}
                                        </Moment> -
                                        <Moment locale="en" format="MMM D">
                                             {moment().add(1, 'weeks').endOf('isoWeek')}
                                        </Moment>
                                    </span>
                                    <span className="label label-info pull-right">0</span>
                                </div>
                                <div className="box-header">
                                    <h3 className="box-title">ПОЗЖЕ</h3>
                                    <span className="myWorkData">
                                        После <Moment locale="en" format="MMM D">
                                             {moment().add(1, 'weeks').endOf('isoWeek')}
                                        </Moment>
                                    </span>
                                    <span className="label label-info pull-right">0</span>
                                </div>
                                { activeTask ? tasks.filter((task) =>
                                    activeTask === task.id
                                ).map(function (task) {
                                    if(task.status.label === ''){
                                        return null
                                    }else {
                                        return (
                                            <div key={task.status.value} className="box-footer-task-list">
                                                <i className="fa fa-check"></i>
                                                <span>{ task.status.label }</span>
                                                <span className="label label-info pull-right">1</span>
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
                        />) : <OtherDays/>  }

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
}))(MyWork)