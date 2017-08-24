import React, { Component } from 'react'
import './Content.css'
import { connect } from 'react-redux'
import Select from 'react-select';
import DayPicker from './DayPicker'
import 'react-select/dist/react-select.css';
import { deleteTask, addTaskDescription } from '../../AC'
import Moment from 'react-moment';

const options = [
    { value: 1, label: "Активна" },
    { value: 2, label: 'Завершена' },
    { value: 3, label: 'Отложена' },
    { value: 4, label: 'Отменена' },
];

class Task extends Component {
    state = {
        selected: ''
    }

    logChange = (val) => {
        this.setState({
            selected: val
        })
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

    render(){
        const { id, title, date, description } = this.props
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
                                            <td style={{borderRight: '1px solid #E1DFE1', width: '120px'}}>
                                                <Select
                                                    style={{ border: 'none'}}
                                                    name="form-field-name"
                                                    value={selected}
                                                    options={options}
                                                    onChange={this.logChange}
                                                    clearable={false}
                                                    placeholder={false}
                                                    optionComponent={this.optionComponent}
                                                    valueComponent={this.valueComponent}
                                                />
                                            </td>
                                            <td className="task-users">
                                                <img className="img-circle" src="public/dist/img/user2-160x160.jpg" alt="img"/>
                                                <span>Johan</span>
                                                <select className="form-control">
                                                    <option data-icon="glyphicon glyphicon-eye-open" value="volvo" className="activeTask">Volvo</option>
                                                    <option value="saab">Saab</option>
                                                    <option value="mercedes">Mercedes</option>
                                                    <option value="audi">Audi</option>
                                                </select>
                                            </td>
                                            <td className="task-info">
                                                <p>
                                                    <span>автор: </span>
                                                    <a href="">johan</a>
                                                    , <span><Moment locale="en" format="HH:mm">{ date }</Moment></span>
                                                </p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td colSpan="3">
                                                    <a data-toggle="modal" data-target="#myModal"><i className="glyphicon glyphicon-calendar"></i>Окт 10(1д.)</a>
                                                    <div className="modal" id="myModal" role="dialog">
                                                        <div className="modal-dialog">
                                                            <div className="modal-content">
                                                                <div className="modal-header">
                                                                    <h4 className="modal-title">Когда эта задача должна быть готова?</h4>
                                                                    <ul className="optionsWillWork">
                                                                        <li>в очереди</li>
                                                                        <li>сегодня</li>
                                                                        <li>завтра</li>
                                                                        <li>на след. неделе</li>
                                                                        <li>выбрать дату</li>
                                                                    </ul>
                                                                </div>
                                                                <div className="modal-body">
                                                                    <DayPicker/>
                                                                </div>
                                                                <div className="modal-footer">
                                                                    <button type="button" className="btn btn-primary pull-left" data-dismiss="modal">OK</button>
                                                                    <button type="button" className="btn btn-default pull-left" data-dismiss="modal">Отмена</button>
                                                                </div>
                                                            </div>

                                                        </div>
                                                </div>
                                                    <span><i className="glyphicon glyphicon-th-list"></i>добавить подзадачу</span>
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
    { deleteTask, addTaskDescription })(Task)