import React, { Component } from 'react'
import {connect} from 'react-redux'
import { addNewTask } from '../../AC'
import { FormGroup, FormControl, HelpBlock } from 'react-bootstrap'

class FormTask extends Component {
    state = {
        taskInputOpen: false,
        task: {
            title: '',
            id: ''
        },
        error: null
    }

    handleClick = () => {
        this.setState({
            taskInputOpen: true
        })
    }

    handleSubmit = (e) => {
        const { addNewTask } = this.props
        e.preventDefault()
        if(this.state.task.title !== ''){
            addNewTask(this.state.task)
            this.setState({
                taskInputOpen: false,
                error: 'form-group',
                task: {
                    title: '',
                    id: ''
                }
            })
        }else {
            this.setState({
                error: 'form-group has-error'
            })
        }

    }

    handleChange = (e) =>{
        let today = new Date()
        let options = { month: 'long', day: 'numeric' }
        let date = today.toLocaleDateString("ru-RU", options)
        if(e.target.value.length > 0){
            this.setState({
                error: null
            })
        }
        this.setState({
            task: {
                title: e.target.value,
                id: (Date.now() + Math.random()).toString(),
                date: Date.now()
            }
        });
    }


    render(){
        const { taskInputOpen, task:{title}, error } = this.state
        return(
            <div className="taskPanel">
                { taskInputOpen ?
                    <div className={ error }>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" className="form-control" onChange={this.handleChange} value={title}/>
                    </form>{ error ? 'Input can not be empty!' : '' }

                    </div>:
                    <button onClick={this.handleClick} type="button" className="btn btn-link pull-left">
                        <i className="fa fa-plus"></i> Новая задача
                    </button>}

            </div>
        )
    }
}
export default connect((state) => ({
    task: state.task
}), { addNewTask })(FormTask)