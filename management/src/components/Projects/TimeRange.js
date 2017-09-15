import React, { Component } from 'react'
import './TimeRange.css'
import moment from 'moment'
import Moment from 'react-moment';
import { getTasks, getUserForTask, filterTasks } from '../functions'
import {arrToMap, mapToArr} from '../../helpers'
import { connect } from 'react-redux'

class TimeRange extends Component {

    componentDidMount() {
        console.log(this.refs.projectTr)
    }

    getDates(startDate, stopDate) {
        let dateArray = []
        let currentDate = moment(startDate)
        let prevWeekEnd = moment(currentDate).subtract(1, 'weeks').endOf('isoWeek')
        let lastDate = moment(stopDate);
        while (prevWeekEnd <= lastDate) {
            dateArray.push( moment(prevWeekEnd).toDate() )
            prevWeekEnd = moment(prevWeekEnd).add(1, 'days');
        }
        return dateArray;
    }

    getWekends(startDate, stopDate) {
        let dateArray = []
        let currentDate = moment(startDate)
        let prevWeekEnd = moment(currentDate).subtract(1, 'weeks').endOf('isoWeek')
        let lastDate = moment(stopDate)
        while (prevWeekEnd <= lastDate) {
                dateArray.push( moment(prevWeekEnd).toDate() )
            prevWeekEnd = moment(prevWeekEnd).add(7, 'days');

        }
        return dateArray;
    }

    render(){
        const { filterStatus, filterUsers, tasksStore, projectId, users } = this.props
        const dates = this.getDates(new Date('2017-09-15'), new Date('2017-12-01'))
        const weekends = this.getWekends(new Date('2017-09-15'), new Date('2017-12-01'))
        console.log(moment(), '===', moment(moment()).isoWeekday(5))
        return(
            <div className={'time-container'}>
                <table className={'time-view'} cellSpacing="0">
                    <thead>
                    <tr>
                        { weekends.map((weekend) =>
                        <td colSpan={'7'}>{ moment(weekend).format('MMM DD YYYY') }</td>
                        )}
                    </tr>
                    <tr className={'daysOfWeek'}>
                        { dates.map((date) =>
                            <td>{ moment(date).format('dd') }</td>
                        )}
                    </tr>
                    </thead>
                </table>

                {getTasks(tasksStore, projectId) ? filterTasks(filterStatus, filterUsers, getTasks(tasksStore, projectId)).map((task) =>
                <table className={'time-view time-view-project'} cellSpacing="0" cellPadding={'0'} key={task.id}>
                    <thead>
                        <tr className={'middle daysOfWeek '}>
                            { dates.map((date) =>
                                <td className={ ((moment(date).day() === 0 || moment(date).day() === 6) ? 'weekend' : '')  + (moment(date).day() === 6 ? ' saturday' : '')}>{ moment(date).format('dd') }</td>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={'projectsTimeRange'} ref="projectTr">
                            { dates.map((date) =>
                                <td
                                    className={ (((moment(date).day() === 0 || moment(date).day() === 6) ? 'weekend' : '')
                                    || (task.complete ? (moment(date).isBetween((task.complete.from), (task.complete.to), 'day', '[]') ? 'activeTaskTime ' : '') : '')) + (moment(date).day() === 6 ? ' saturday' : '')
                                    }>
                                    { moment(date).isSame(task.complete ? task.complete.from : null, 'day') ? <span className={'nameOfTask'}>{ task.title }</span> : '' }
                                </td>
                            )}
                        </tr>
                        <tr className={'middle daysOfWeek '}>
                            { dates.map((date) =>
                                <td className={ ((moment(date).day() === 0 || moment(date).day() === 6) ? 'weekend' : '')  + (moment(date).day() === 6 ? ' saturday' : '')}>{ moment(date).format('dd') }</td>
                            )}
                        </tr>
                    </tbody>
                </table>) : ''}
            </div>
        )
    }
}
export default connect((state) => ({
    tasksStore: state.tasks,
    users: state.users
}), null)(TimeRange)