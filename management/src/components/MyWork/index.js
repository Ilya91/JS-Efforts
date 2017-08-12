import React, { Component } from 'react'
import './Content.css'
import TaskList from './TaskList'
import Task from './Task'
import OtherDays from './OtherDays'
import { connect } from 'react-redux'
import { addNewTask } from '../../AC'

class MyWork extends Component {
    state = {
        tasks: 0,
        taskInputOpen: false,
        name: '',
        isActive: true
    }

    getNumberOfTasks = () => {
        const { tasks } = this.props
        return tasks.length
    }

    handleClick = () => {
        this.setState({
            taskInputOpen: true
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            taskInputOpen: false,
            name: ''
        })
    }

    handleChange = (e) =>{
        this.setState({name: e.target.value});
    }

    handleClickTask = (value) => {
        this.setState({
            isActive: value
        })
    }

    render(){
        const { taskInputOpen, name } = this.state
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
                                    <div className="taskPanel">
                                        { taskInputOpen ?
                                            <form onSubmit={this.handleSubmit}>
                                                <input type="text" className="form-control" onChange={this.handleChange} value={name}/>
                                            </form> :
                                            <button onClick={this.handleClick} type="button" className="btn btn-default pull-left">
                                                <i className="fa fa-plus"></i> Новая задача
                                            </button>}

                                    </div>
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
}), { addNewTask })(MyWork)