import React, { Component } from 'react'
import '../MyWork/Content.css'
import './style.css'
import { connect } from 'react-redux'
import Select from 'react-select';
import DayPicker from '../MyWork/DayPicker'
import SubTaskItem from '../MyWork/SubTaskItem'
import 'react-select/dist/react-select.css';
import { deleteTask, addTaskDescription, changeTaskStatus, addSubTask } from '../../AC'
import Moment from 'react-moment';
import moment from 'moment';

const options = [
    { value: 1, label: "Активна", color: '#2196F3', border: 'none'},
    { value: 2, label: 'Завершена', color: '#8CC34B', border: 'none' },
    { value: 3, label: 'Отложена', color: '#673BB7', border: 'none' },
    { value: 4, label: 'Отменена', color: '#9E9E9E', border: 'none' }
];

class ProjectDetails extends Component {
    state = {
        addSubTaskActive: false
    }

    logChange = (val) => {
        const { id, changeTaskStatus } = this.props
        const { addSubTaskActive } = this.state
        this.setState({
            selected: val,
            addSubTaskActive: false
        })
        changeTaskStatus(id, val)
        console.log("Selected: " + JSON.stringify(val))

    }
    handleDelete = (e) => {
        e.preventDefault()
        const { id, deleteTask } = this.props
        deleteTask(id)
    }

    handleDescChange = (e) => {
        const { id, addTaskDescription } = this.props
        const desc = e.target.value
        const data = {
            id, desc
        }
        addTaskDescription( data )
        const { addSubTaskActive } = this.state
        this.setState({
            addSubTaskActive: false
        })
    }

    renderValue(option) {
        return <span key={option.value}><div className="selectSquare" style={{ border: option.border, backgroundColor: option.color}}></div></span>;
    }


    renderOption(option){
        return <span key={option.value}><div className="selectSquare" style={{ backgroundColor: option.color, border: 'none'}}></div>{option.label}</span>;
    }

    handleAddSubTask = () => {
        const { id, addSubTask } = this.props
        const { addSubTaskActive } = this.state
        this.setState({
            addSubTaskActive: true
        })
        const subtask = {
            id: (Date.now() + Math.random()).toString(),
            taskId: id,
            title: 'New sub task',
            users: null
        }
        addSubTask(id, subtask)
    }

    getNumberOfSubtasks = () => {
        const { subTasks, id } = this.props
        return subTasks ? subTasks.filter((subTask) =>
            subTask.taskId === id
        ).length : null
    }

    getCompleteValue = () => {
        const { complete } = this.props
        if(complete !== 'undefined'){
            return complete
        }
        return null
    }

    render(){
        const { project, title, date, description, status, subTasks, users } = this.props
        const { addSubTaskActive } = this.state
        return(
                        <section className="col-lg-6">
                            <div className="box box-primary task-description">
                                <div className="header-task">
                                    <div className="task-title-left">
                                        <h3 className="task-title">{ project.title }</h3>
                                    </div>
                                    <div className="task-links">
                                        <div className="dropdown">
                                            <button className="btn dropdown-toggle" type="button" data-toggle="dropdown">
                                                <span className="glyphicon glyphicon-option-horizontal"></span></button>
                                            <ul className="dropdown-menu">
                                                <li><a href="#" onClick={this.handleDelete}>Удалить проект</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <table className="panel-project">
                                    <tbody>
                                        <tr>
                                            <td className="task-users">
                                                <p>Участники</p>
                                                <ul className="task-users-list">
                                                    <li>
                                                        <img className="img-circle" src="/public/dist/img/avatar04.png" alt="img"/>
                                                        <span>Johan</span>
                                                    </li>
                                                </ul>
                                                <span data-toggle="dropdown" className="dropdown-toggle">
                                                    <i className="fa fa-plus"></i>
                                                </span>
                                                <ul className="dropdown-menu dropdownUsers">
                                                    <p>Добавьте пользователя</p>
                                                </ul>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td colSpan="3">
                                                <div className="taskCalendar">
                                                    <a data-toggle="modal" data-target="#myModal">
                                                        <i className="glyphicon glyphicon-calendar">
                                                        </i>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    <tr>
                                        <td colSpan="3">
                                        <form className="task-add-description">
                                            <textarea
                                                onChange={this.handleDescChange}
                                                style={{ resize: 'none' }}
                                                className="form-control"
                                                rows="3"
                                                placeholder="Нажмите, чтобы добавить описание"
                                                value={ description }>
                                            </textarea>
                                        </form>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>

                        </section>
        )
    }
}

export default connect((state) => ({
    subTasks: state.subTasks,
    users: state.users
}), null)(ProjectDetails)