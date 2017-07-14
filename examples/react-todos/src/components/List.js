import React, { Component } from 'react'
import Item from './Item'

class List extends Component {
    render(){
        const { tasks } = this.props
        return (
            <div>
                {
                    (tasks.length) ?
                        tasks.map((task, i) =>
                            <Item key={i} text={task.text.text} id={task.id}/>
                        ): <p>no tasks</p>
                }
                <Item/>
            </div>
        )
    }

}

export default List
