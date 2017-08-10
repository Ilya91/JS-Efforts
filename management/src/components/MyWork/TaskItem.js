import React, { Component } from 'react'

class Task extends Component {
    state = {
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
    }

    render(){
        const { id, title } = this.props
        const { isActive } = this.state
        return(
            <li onClick={this.handleClick} id={id} className={this.getClassName()}>
                <img className="img-circle" src="public/dist/img/user2-160x160.jpg" alt="img"/>
                <strong>{ title }</strong>
                <span>Окт 10</span>
            </li>
        )
    }

    getClassName = () => {
        const { isActive } = this.state
        return isActive ? 'active' : ''
    }
}
export default Task