import React, { Component } from 'react'
import '../MyWork/Content.css'
import Moment from 'react-moment';
import moment from 'moment'

class Projects extends Component {
    render(){
        const startThisWeek = moment().startOf('isoWeek')
        const endThisWeek = moment().endOf('isoWeek')
        const startNextWeek = moment().add(1, 'weeks').startOf('isoWeek')
        const endNextWeek = moment().add(1, 'weeks').endOf('isoWeek')
        const afterNextWeek = moment().add(1, 'weeks').endOf('isoWeek')
        return(
            <div className="content-wrapper">
                <section className="content">
                    <div className="row">
                        <section className={ "col-lg-12"}>
                            <div className="box box-primary">
                                <div className="box-header">
                                    <h3 className="box-title">НА СЕГОДНЯ</h3>
                                    <span className="myWorkData"><Moment format="MMM D"/></span>
                                    <span className="label label-info pull-right">0</span>
                                </div>
                                <div className="box-body">
                                </div>
                                {/*<ul className="taskList">

                                    {tasks ? (tasks.filter((task) =>
                                        !task.complete
                                    ).map((task) => this.taskItemBody(task))) : '' }
                                </ul>*/}
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
                                    <span className="label label-info pull-right">0</span>
                                </div>
                                {/*<ul className="taskList">
                                    {tasks ? (tasks.filter((task) => (
                                        task.complete ?
                                        moment(task.complete.to).isBetween(startThisWeek, endThisWeek) : false
                                    )).map((task) => this.taskItemBody(task))) : ''}
                                </ul>*/}

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
                                    <span className="label label-info pull-right">0</span>
                                </div>
                                {/*<ul className="taskList">
                                    {tasks ? (tasks.filter((task) => (
                                        task.complete ?
                                            moment(task.complete.to).isBetween(startNextWeek, endNextWeek) : false
                                    )).map((task) => this.taskItemBody(task))) : ''}
                                </ul>*/}
                                <div className="box-header">
                                    <h3 className="box-title">ПОЗЖЕ</h3>
                                    <span className="myWorkData">
                                        После <Moment locale="en" format="MMM D">
                                             { afterNextWeek }
                                        </Moment>
                                    </span>
                                    <span className="label label-info pull-right">{/*{ this.getNumberOfTasks( afterNextWeek, null ) }*/}</span>
                                </div>
                                {/*<ul className="taskList">
                                    {tasks ? (tasks.filter((task) => (
                                        task.complete ?
                                            moment(task.complete.to).isAfter(afterNextWeek) : false
                                    )).map((task) => this.taskItemBody(task))) : ''}
                                </ul>*/}
                                {/*{ activeTask ? tasks.filter((task) =>
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
                                }) : null  }*/}
                            </div>
                        </section>
                        {/*{ activeTask ? tasks.filter((task) =>
                            activeTask === task.id
                            ).map((task) => <Task
                                    key={task.id}
                                    id={task.id}
                                    title={task.title}
                                    date={task.date}
                                    description={task.description ? task.description : ''}
                                    complete={task.complete ? task.complete : ''}
                                    status={task.status}
                        />) : <OtherDays getNumberOfTasks={ this.getNumberOfTasks }/>  }*/}

                    </div>
                </section>
            </div>
        )
    }
}
export default Projects