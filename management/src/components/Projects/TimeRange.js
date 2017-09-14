import React, { Component } from 'react'
import './Table.css'
import moment from 'moment'
import Moment from 'react-moment';
import { getTasks, getUserForTask, filterTasks } from '../functions'
import {arrToMap, mapToArr} from '../../helpers'
import { connect } from 'react-redux'

class TimeRange extends Component {

    render(){
        const { filterStatus, filterUsers, tasksStore, projects, users } = this.props
        var i = 1;
        return(
            <table className={'table-view'}  cellSpacing="0" cellPadding="0">
                <thead>
                    <tr>
                        <td>header</td>
                    </tr>
                </thead>
            </table>
        )
    }
}
export default connect((state) => ({
    tasksStore: state.tasks,
    users: state.users
}), null)(TimeRange)