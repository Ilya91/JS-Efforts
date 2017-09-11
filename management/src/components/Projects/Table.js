import React, { Component } from 'react'
import './Table.css'
import moment from 'moment'
import Moment from 'react-moment';

class Table extends Component {


    render(){
        const { project, tasks } = this.props
        return(
            <table className={'table-view'}>
                <thead>
                    <tr>
                        <td className={'first-cell'}></td>
                        <td className={'title-cell'}>Заголовок</td>
                        <td>Начало</td>
                        <td>Срок выполне...</td>
                        <td>Длите...</td>
                        <td>Статус</td>
                        <td>Исполнители</td>
                    </tr>
                </thead>
                <tbody>
                <tr className={'project'}>
                    <td className={'first-cell'}></td>
                    <td>{project.title}</td>
                    <td>
                        <Moment locale="en" format="MMM D, YYYY">
                            {project.dateStart}
                        </Moment>
                    </td>
                    <td>
                        <Moment locale="en" format="MMM D, YYYY">
                            {project.dateEnd}
                        </Moment>
                    </td>
                    <td>{project.dateStart && project.dateEnd ? moment(project.dateEnd).diff(moment(project.dateStart), 'days') + ' д.' : ''}</td>
                    <td>{project.status}</td>
                    <td>{project.executors}</td>
                </tr>
                    { tasks ? tasks.map((task) =>
                        <tr key={task.id}>
                            <td className={'first-cell'}></td>
                            <td>{task.title}</td>
                            <td>{task.complete ? task.complete.from : ''}</td>
                            <td>{task.complete ? task.complete.to : ''}</td>
                            <td>{task.complete ? task.complete.duration : ''}</td>
                            <td></td>
                            <td></td>
                        </tr>
                    ) : ''}
                   
                </tbody>
            </table>
        )
    }
}
export default Table