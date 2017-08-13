import React, { Component } from 'react'
import './Content.css'
import { connect } from 'react-redux'
import { DropdownButton, MenuItem } from 'react-bootstrap'

class Task extends Component {

    render(){
        const { id, title } = this.props
        return(
                        <section className="col-lg-6">
                            <div className="box box-primary task-description">
                                <div className="header-task">
                                    <h2 className="task-title">{ title }</h2>
                                    <button type="button" className="btn btn-link pull-left">
                                        <i className="fa fa-plus"></i> Добавить в папку/проект
                                    </button>
                                    <div className="task-links">
                                        <DropdownButton bsSize="xsmall" title="..." id="dropdown-size-extra-small">
                                            <MenuItem eventKey="1">Action</MenuItem>
                                            <MenuItem eventKey="2">Another action</MenuItem>
                                            <MenuItem eventKey="3">Something else here</MenuItem>
                                        </DropdownButton>

                                        <DropdownButton bsSize="xsmall" title="..." id="dropdown-size-extra-small">
                                            <MenuItem eventKey="1">Action</MenuItem>
                                            <MenuItem eventKey="2">Another action</MenuItem>
                                            <MenuItem eventKey="3">Something else here</MenuItem>
                                        </DropdownButton>
                                    </div>
                                </div>
                                <table className="panel-task">
                                    <tbody>
                                        <tr>
                                            <td>asdfa</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </section>
        )
    }
}
export default connect((state) => ({
    tasks: state.tasks
}), {})(Task)