import React, { Component } from 'react'
import '../MyWork/Content.css'
import './style.css'
import { connect } from 'react-redux'
import Select from 'react-select';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import 'react-select/dist/react-select.css';
import { deleteProject, setActiveProject, addTaskDescription, changeTaskStatus, addSubTask } from '../../AC'
import Moment from 'react-moment';
import moment from 'moment';

const DAY_FORMAT = 'DD/MM/YYYY';

const options = [
    { value: 1, label: "Активно", color: '#2196F3', border: 'none'},
    { value: 2, label: 'Завершено', color: '#8CC34B', border: 'none' },
    { value: 3, label: 'Отложено', color: '#673BB7', border: 'none' },
    { value: 4, label: 'Отменено', color: '#9E9E9E', border: 'none' }
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
        //changeTaskStatus(id, val)
        console.log("Selected: " + JSON.stringify(val))

    }
    handleDelete = (e) => {
        e.preventDefault()
        const { project, deleteProject, setActiveProject } = this.props
        setActiveProject(null)
        deleteProject(project.id)
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
        return <span key={option.value}><div className="selectSquare" style={{ border: option.border, backgroundColor: option.color}}></div>{option.label}</span>;
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
                                        <h3 className="task-title">{ project ? project.title : null }</h3>
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
                                        <td>
                                        <div className="panel-project-title-item">
                                            <span className='panel-project-title'>Участники</span>
                                            <span className='project-title-divider'>|</span>
                                        </div>
                                        <ul className="project-users-list">
                                            <li>
                                                <img className="img-circle" src="/public/dist/img/avatar04.png" alt="img"/>
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
                                        <td>
                                            <div className="panel-project-title-item">
                                                <span className='panel-project-title'>Дата начала проекта</span>
                                                <span className='project-title-divider'>|</span>
                                            </div>
                                            <div className='project-date'>
                                                <DayPickerInput format={DAY_FORMAT} placeholder="MM/DD/YYYY"/>
                                            </div>
                                            </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        <div className="panel-project-title-item">
                                            <span className='panel-project-title'>Дата завершения проекта</span>
                                            <span className='project-title-divider'>|</span>
                                        </div>
                                            <div className='project-date'>
                                                <DayPickerInput format={DAY_FORMAT} placeholder="MM/DD/YYYY"/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        <div className="panel-project-title-item">
                                            <span className='panel-project-title'>Status</span>
                                            <span className='project-title-divider'>|</span>
                                        </div>
                                            <div className='project-select-status'>
                                                <Select
                                                    style={{ border: 'none'}}
                                                    name="form-field-name"
                                                    value={this.state.selected}
                                                    options={options}
                                                    onChange={this.logChange}
                                                    clearable={false}
                                                    placeholder={'Change status'}
                                                    optionRenderer={this.renderOption}
                                                    valueComponent={this.valueComponent}
                                                    valueRenderer={this.renderValue}
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <form className="project-add-description">
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
                                <table className='panel-task'>
                                    <tbody>

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
}), { deleteProject, setActiveProject })(ProjectDetails)