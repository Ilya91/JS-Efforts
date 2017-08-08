import React, { Component } from 'react'

class Task extends Component {

    render(){
        const { id, title } = this.props
        return(
            <li id={id}>
                { title }
            </li>
        )
    }
}
export default Task