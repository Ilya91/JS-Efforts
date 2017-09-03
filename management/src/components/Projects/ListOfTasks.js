import React, { Component } from 'react'
import '../MyWork/Content.css'
import './style.css'
import Moment from 'react-moment';
import moment from 'moment'
import Collapsible from 'react-collapsible';
import Item from './Item'


class ListOfTasks extends Component {
    render(){
        const startThisWeek = moment().startOf('isoWeek')
        const endThisWeek = moment().endOf('isoWeek')
        const startNextWeek = moment().add(1, 'weeks').startOf('isoWeek')
        const endNextWeek = moment().add(1, 'weeks').endOf('isoWeek')
        const afterNextWeek = moment().add(1, 'weeks').endOf('isoWeek')
        return(
            <div>
                                {/*<ul className="taskList">
                                    {tasks ? (tasks.filter((task) => (
                                        task.complete ?
                                        moment(task.complete.to).isBetween(startThisWeek, endThisWeek) : false
                                    )).map((task) => this.taskItemBody(task))) : ''}
                                </ul>*/}
                <Collapsible open={true} transitionTime={400} trigger={ <p><i className='glyphicon glyphicon-triangle-bottom'></i><span>Завтра</span></p> } easing={'cubic-bezier(0.175, 0.885, 0.32, 2.275)'}>
                    <Item/>
                </Collapsible>
                <Collapsible open={true} transitionTime={400} trigger={ <i className='glyphicon glyphicon-triangle-bottom'> Следующая неделя</i> } easing={'cubic-bezier(0.175, 0.885, 0.32, 2.275)'}>
                    <p>Well maybe not. But did you see that little wiggle at the end. That is using a CSS cubic-beizer for the easing!</p>
                    <p>You can pass any string into the prop easing that you would declare in a CSS transition-timing-function. This means you have complete control over how that Collapsible appears.</p>
                </Collapsible>
                <Collapsible open={true} transitionTime={400} trigger={ <i className='glyphicon glyphicon-triangle-bottom'> Позже</i> } easing={'cubic-bezier(0.175, 0.885, 0.32, 2.275)'}>
                    <p>Well maybe not. But did you see that little wiggle at the end. That is using a CSS cubic-beizer for the easing!</p>
                    <p>You can pass any string into the prop easing that you would declare in a CSS transition-timing-function. This means you have complete control over how that Collapsible appears.</p>
                </Collapsible>
            </div>
        )
    }
}
export default ListOfTasks