import React, { Component } from 'react'
import Moment from 'react-moment';

class SubTaskItem extends Component {

    render(){
        const { id, title, user, onClick } = this.props
        return(
            <li onClick={onClick} id={id} className="subTaskItem">
                <input type="checkbox"/>
                <span><i className="fa fa-user-plus"></i></span>
                <strong>{ title }</strong>
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
export default SubTaskItem