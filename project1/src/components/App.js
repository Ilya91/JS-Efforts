import React, { Component } from 'react'
import Grid from './Grid'
import Editor from './Editor'

class App extends Component{

    constructor(props) {
        super(props)
        this.state = {notes: [
            {
                id: 1,
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                'Architecto dicta dolor dolorum enim, et eum excepturi facere ' +
                'facilis impedit laboriosam nulla optio possimus, quam quod ' +
                'reiciendis repellendus, reprehenderit tenetur voluptas.',
                color: 'red'
            },
            {
                id: 2,
                text: 'et eum excepturi facere ' +
                'facilis impedit laboriosam nulla optio possimus, quam quod ' +
                'reiciendis repellendus, reprehenderit tenetur voluptas.',
                color: 'green'
            }
        ]}
    }

    handleNoteAdd =  (newNote) => {
        let newNotes = this.state.notes.slice();
        newNotes.unshift(newNote);
        this.setState({ notes: newNotes });
    }

    render() {
        const { notes } = this.state
        return (
            <div>
                <Editor onNoteAdd={this.handleNoteAdd} />
                <Grid notes={notes}/>
            </div>
        );
    }
}
export default App