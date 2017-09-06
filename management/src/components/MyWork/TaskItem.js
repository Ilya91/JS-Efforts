import React, { Component } from 'react'
import Moment from 'react-moment';

class TaskItem extends Component {


    render(){
        const { id, title, date, onClick, titleProject } = this.props
        return(
            <li onClick={onClick} id={id} className={this.getClassName()}>
                <img className="img-circle" src="/public/dist/img/avatar04.png" alt="img"/>
                <strong>{ title }</strong>
                { titleProject ? <span>{ titleProject }</span> : null}
                <span><Moment format="MMM D">{ date }</Moment></span>
            </li>
        )
    }

    getClassName = (id) => {
        const { isActive } = this.props
        if(isActive){
            return 'active'
        }
    }
}
export default TaskItem