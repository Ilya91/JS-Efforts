import React, { Component } from 'react'
import './Content.css'
import { connect } from 'react-redux'
import Select from 'react-select';
import DayPicker from './DayPicker';
import 'react-select/dist/react-select.css';
import { deleteTask } from '../../AC'

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

    render(){
        const { id, title } = this.props
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
                                            </td>
                                            <td className="task-info">
                                                <span>автор: </span>
                                                <a href="">johan</a>,
                                                <span>21:42</span>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td colSpan="3">
                                                <div className="dropdown">
                                                    <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
                                                        Dropdown
                                                        <span className="caret"></span>
                                                    </button>
                                                    <div className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                                        <DayPicker/>
                                                    </div>
                                                </div>
                                                <span>автор: </span>
                                                <a href="">johan</a>,
                                                <span>21:42</span>
                                            </td>
                                        </tr>
                                    <tr>
                                        <td colSpan="3">
                                        <form className="task-add-description">
                                            <textarea className="form-control" rows="3" placeholder="Нажмите, чтобы добавить описание">
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
export default connect(null, { deleteTask })(Task)