import React, { Component } from 'react'
import Item from './Item'

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {completed: false}
    }

    /*handleClick = (id) => {
        this.setState({completed : true})
    }*/

    render(){
        const { tasks, handleClick } = this.props
        return (
            <div>
                {
                    (tasks.length) ?
                        tasks.map((task, i) =>
                            <Item
                                key={i}
                                text={task.text.text}
                                id={task.id}
                                onClick={handleClick.bind(null, task)}
                                completed={this.state.completed}/>
                        ): <p>no tasks</p>
                }
                <Item/>
            </div>
        )
    }

}

export default List
