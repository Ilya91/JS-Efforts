import React, { Component } from 'react'
import './Content.css'
import { connect } from 'react-redux'
import Select from 'react-select';
import DayPicker from './DayPicker'
import 'react-select/dist/react-select.css';
import { deleteTask, addTaskDescription, changeTaskStatus } from '../../AC'
import Moment from 'react-moment';
import moment from 'moment';

const options = [
    { value: 1, label: "Активна", color: '#2196F3', border: 'none'},
    { value: 2, label: 'Завершена', color: '#8CC34B', border: 'none' },
    { value: 3, label: 'Отложена', color: '#673BB7', border: 'none' },
    { value: 4, label: 'Отменена', color: '#9E9E9E', border: 'none' }
];

class Task extends Component {
    state = {
        selected: 3
    }

    logChange = (val) => {
        const { id, changeTaskStatus } = this.props
        this.setState({
            selected: val
        })
        changeTaskStatus(id, val)
        console.log("Selected: " + JSON.stringify(val))

    }
    handleDelete = (e) => {
        e.preventDefault()
        const { id, deleteTask } = this.props
        deleteTask(id)
        console.log(id)
    }

    handleDescChange = (e) => {
        const { id, addTaskDescription } = this.props
        const desc = e.target.value
        const data = {
            id, desc
        }
        console.log(desc)
        addTaskDescription( data )
    }

    renderValue(option) {
        return <span><div className="selectSquare" style={{ border: option.border, backgroundColor: option.color}}></div></span>;
    }


    renderOption(option){
        return <span><div className="selectSquare" style={{ backgroundColor: option.color, border: 'none'}}></div>{option.label}</span>;
    }



    render(){
        const { id, title, date, description, status, complete:{ to, from, duration } } = this.props
        const { selected } = this.state
        return(
                        <section className="col-lg-6">
                            <div className="box box-primary task-description">
                                <div className="header-task">
                                    <div className="task-title-left">
                                        <h2 className="task-title">{ title }</h2>
                                        <button type="button" className="btn btn-link pull-left add-project">
                                            <i className="fa fa-plus"></i> Добавить в папку/проект
                                        </button>
                                    </div>
                                    <div className="task-links">
                                        <div className="dropdown">
                                            <button className="btn dropdown-toggle" type="button" data-toggle="dropdown">
                                                <span className="glyphicon glyphicon-option-horizontal"></span></button>
                                            <ul className="dropdown-menu">
                                                <li><a href="#" onClick={this.handleDelete}>Удалить задачу</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <table className="panel-task">
                                    <tbody>
                                        <tr>
                                            <td style={{borderRight: '1px solid #E1DFE1', width: '60px'}}>
                                                <Select
                                                    style={{ border: 'none'}}
                                                    name="form-field-name"
                                                    value={status}
                                                    options={options}
                                                    onChange={this.logChange}
                                                    clearable={false}
                                                    placeholder={false}
                                                    optionRenderer={this.renderOption}
                                                    valueComponent={this.valueComponent}
                                                    valueRenderer={this.renderValue}
                                                />
                                            </td>
                                            <td className="task-users">
                                                <img className="img-circle" src="public/dist/img/user2-160x160.jpg" alt="img"/>
                                                <span>Johan</span>
                                            </td>
                                            <td className="task-info">
                                                <p>
                                                    <span>автор: </span>
                                                    <a href="">johan</a>
                                                    , <span><Moment format="HH:mm">{ date }</Moment></span>
                                                </p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td colSpan="3">
                                                <a data-toggle="modal" data-target="#myModal">
                                                    <i className="glyphicon glyphicon-calendar">
                                                    </i> { from && to ? moment(from).format('MMM D') + ' - ' + moment(to).format('MMM D') : moment(date).format('MMM D') }
                                                    { from && to ? ' (' + duration + 'д.)' : '' }
                                                </a>
                                                <DayPicker id={ id }/>
                                                <span>
                                                    <i className="glyphicon glyphicon-th-list">
                                                    </i>добавить подзадачу
                                                </span>
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
export default connect(null,
    { deleteTask, addTaskDescription, changeTaskStatus })(Task)