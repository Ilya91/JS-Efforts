import React, { Component } from 'react'
import Grid from './Grid'
import Editor from './Editor'

class App extends Component{

    constructor(props) {
        super(props)
        this.state = {notes: []}
    }

    componentDidMount() {
    let localNotes = JSON.parse(localStorage.getItem('notes'));
    if (localNotes) {
        this.setState({ notes: localNotes });
    }}

    handleNoteAdd =  (newNote) => {
        let newNotes = this.state.notes.slice();
        newNotes.unshift(newNote);
        this.setState({ notes: newNotes });
    }

    _updateLocalStorage() {
        let notes = JSON.stringify(this.state.notes);
        localStorage.setItem('notes', notes);
    }

    handleNoteDelete = (note) => {
        let noteId = note.id;
        let newNotes = this.state.notes.filter(function(note) {
            return note.id !== noteId;
        });
        this.setState({ notes: newNotes });
    }

    componentDidUpdate() {
        this._updateLocalStorage(); // при каждом обновлении компонента будут перезаписываться данные в localstorage
    }

    render() {
        const { notes } = this.state
        return (
            <div>
                <Editor onNoteAdd={this.handleNoteAdd} />
                <Grid notes={notes} onDelete={this.handleNoteDelete}/>
            </div>
        );
    }
}
export default App