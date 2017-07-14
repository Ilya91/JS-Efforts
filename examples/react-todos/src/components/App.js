import React, { Component } from 'react'
import Form from './Form'
import Filter from './Filter'
import List from './List'

class App extends Component
{
    constructor(props) {
        super(props);
        this.state = {tasks: []}
    }

    handleAdd = (item) => {
        var tasks = this.state.tasks.slice()
        tasks.unshift(item)
        this.setState({ tasks: tasks });
        console.log(tasks)
    }
    render() {
        const {  tasks } = this.state
        return (
            <div>
                <Form onTaskAdd={this.handleAdd}/>
                <Filter/>
                <List tasks={tasks}/>
            </div>
        );
    }

}

export default App
