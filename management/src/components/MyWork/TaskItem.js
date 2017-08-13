import React, { Component } from 'react'
import Moment from 'react-moment';

class Task extends Component {
    /*state = {
        isActive: false
    }

    handleClick = () => {
        const { onClick } = this.props
        if(this.state.isActive){
            this.setState({
                isActive: false
            })
        }else{
            this.setState({
                isActive: true
            })
        }
        let val = this.state.isActive
        onClick(val)
    }*/

    render(){
        const { id, title, date, onClick } = this.props
        return(

            <li onClick={onClick} id={id} className={this.getClassName()}>
                <img className="img-circle" src="public/dist/img/user2-160x160.jpg" alt="img"/>
                <strong>{ title }</strong>
                <span><Moment locale="en" format="MMM D">{ date }</Moment></span>
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
export default Task