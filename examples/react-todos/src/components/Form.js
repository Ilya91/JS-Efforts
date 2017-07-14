import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''}
    }

    handleNoteAdd = () => {
        let newTask = {
            text: this.state,
            id: Date.now()
        }
        this.props.onTaskAdd(newTask)
        this.setState({text : ''})
    }

    handleText = (e) => {
        this.setState({text : e.target.value})
    }

    render() {
        const {  text } = this.state
        return (
            <div>
                <input type="text" value={text} onChange={this.handleText}/>
                <input type="submit" className="add-button" onClick={this.handleNoteAdd}/>
            </div>
        );
    }
}

export default Form;
