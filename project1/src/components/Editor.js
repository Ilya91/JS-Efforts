import React, { Component } from 'react'

class Editor extends Component{
    constructor(props){
        super(props)
        this.state = {
            text: ''
        }
    }

    handleText = (e) => {
        this.setState({
            text: e.target.value
        })
        console.log(this.state.text)
    }

    handleNoteAdd = () => {
        let newNote = {
            text: this.state.text,
            color: 'yellow',
            id: Date.now()
        };

        this.props.onNoteAdd(newNote);
        this.setState({ text: '' });
    }

    render() {
        const { text } = this.state
        return (
            <div className="note-editor">
                    <textarea
                        placeholder="Enter your note here..."
                        rows={5}
                        className="textarea"
                        value={text}
                        onChange={this.handleText}
                    />
                    <button className="add-button" onClick={this.handleNoteAdd}>Add</button>
            </div>
        );
    }
}
export default Editor
