import React, { Component } from 'react'
import './Content.css'
import FormTask from './FormTask'
import TaskList from './TaskList'
import Task from './Task'
import OtherDays from './OtherDays'
import { connect } from 'react-redux'

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
                                    <i className="ion ion-clipboard"></i>
                                    <h3 className="box-title">НА СЕГОДНЯ</h3>
                                    <span className="myWorkData"> Окт 9</span>
                                    <span className="label label-info pull-right">{ this.getNumberOfTasks() }</span>
                                </div>
                                <div className="box-body">
                                    <FormTask/>
                                </div>
                                <ul className="taskList">
                                    <TaskList tasks={tasks}/>
                                </ul>
                                <div className="box-header">
                                    <i className="ion ion-clipboard"></i>
                                    <h3 className="box-title">НА ЭТУ НЕДЕЛЮ</h3>
                                    <span className="myWorkData"> Окт 9</span>
                                    <span className="label label-info pull-right">0</span>
                                </div>
                                <div className="box-header">
                                    <i className="ion ion-clipboard"></i>
                                    <h3 className="box-title">НА СЛЕД. НЕДЕЛЮ</h3>
                                    <span className="myWorkData"> Окт 9</span>
                                    <span className="label label-info pull-right">0</span>
                                </div>
                                <div className="box-header">
                                    <i className="ion ion-clipboard"></i>
                                    <h3 className="box-title">ПОЗЖЕ</h3>
                                    <span className="myWorkData"> Окт 9</span>
                                    <span className="label label-info pull-right">0</span>
                                </div>
                            </div>
                        </section>
                        { activeTask ? tasks.filter((task) =>
                            activeTask === task.id
                            ).map((task) => <Task
                                    key={task.id}
                                    id={task.id}
                                    title={task.title}
                        />) : <OtherDays/>  }

                    </div>
                </section>
            </div>
        )
    }
}
export default connect((state) => ({
    tasks: state.tasks,
    activeTask: state.activeTask
}))(MyWork)