var Note = React.createClass({
    render: function() {
        var style = { backgroundColor: this.props.color };
        return (
            <div className="note" style={style}>
                <span className="delete-note" onClick={this.props.onDelete}> × </span>
                {this.props.children}
            </div>
        );
    }
});

var ColorPanel = React.createClass({
    render: function () {
        return (
            <div>
                    <input type="radio" id="red" name="color" value="red" onChange={this.props.onChange}/><label htmlFor="red">red</label>
                    <input type="radio" id="blue" name="color" value="blue" onChange={this.props.onChange}/><label htmlFor="blue">blue</label>
                    <input type="radio" id="yellow" name="color" value="yellow" onChange={this.props.onChange}/><label htmlFor="yellow">yellow</label>
                    <input type="radio" id="green" name="color" value="green" onChange={this.props.onChange}/><label htmlFor="green">green</label>
                    <input type="radio" id="brown" name="color" value="brown" onChange={this.props.onChange}/><label htmlFor="blue">blue</label>
                    <input type="radio" id="orange" name="color" value="orange" onChange={this.props.onChange}/><label htmlFor="orange">orange</label>
            </div>
        );
    }
});

var NoteEditor = React.createClass({
    getInitialState: function() {
        return {
            text: '',
            color: ''
        };
    },

    handleTextChange: function(event) {
        this.setState({ text: event.target.value });
    },

    handleColorChange: function(event) {
        this.setState({ color: event.target.value });
        console.log(event.target.value);
    },

    handleColorPanelChange: function(event) {
        this.setState({ color: event.target.value });
        console.log(event.target.value);
    },

    handleNoteAdd: function() {
        var newNote = {
            text: this.state.text,
            color: this.state.color,
            id: Date.now()
        };

        this.props.onNoteAdd(newNote);
        this.setState({ text: '' });
    },

    render: function() {
        return (
            <div className="note-editor">
                <textarea
                    placeholder="Enter your note here..."
                    rows={5}
                    className="textarea"
                    value={this.state.text}
                    onChange={this.handleTextChange}
                />
                <input type="color" onChange={this.handleColorChange}/>
                <ColorPanel onChange={this.handleColorPanelChange}/>
                <button className="add-button" onClick={this.handleNoteAdd}>Add</button>
            </div>
        );
    }
});

var Search = React.createClass({
render: function() {
        return (
            <div className="note-search">
                <input type="text" style={{ marginLeft: '30%', width: '300px', marginBottom: '50px'}} onChange={this.props.onChange}/>
            </div>
        );
    }
})


var NotesGrid = React.createClass({
    getInitialState: function() {
        return {
            text: '',
            notes: this.props.notes,
            search: ''
        };
    },

    handleSearch: function (event) {

        var searchQuery = event.target.value.toLowerCase();
        //this.setState({ text: event.target.value});

        var displayedContacts = this.props.notes.filter(function (note) {
            var text = note.text.toLowerCase();
            //console.log(searchQuery);
            return text.indexOf(searchQuery) !== -1;
        });

        if(searchQuery === ''){
            this.setState({ search: ''});
        }else {
            this.setState({ notes: displayedContacts, search: 'search'});
        }


        console.log(searchQuery);
    },

    componentDidMount: function() {
        var grid = this.refs.grid;
        this.msnry = new Masonry( grid, {
            itemSelector: '.note',
            columnWidth: 200,
            gutter: 10,
            isFitWidth: true
        });
    },

    componentDidUpdate: function(prevProps) {
        if (this.props.notes.length !== prevProps.notes.length) {
            this.msnry.reloadItems();
            this.msnry.layout();
        }
    },

    render: function() {
        var onNoteDelete = this.props.onNoteDelete;
        //this.props.notes = this.state.notes;
        return (
            <div>
                <Search onChange={this.handleSearch}/>
            <div className="notes-grid" ref="grid">
                {this.state.search === '' ?
                    this.props.notes.map(function(note){
                        return (
                            <Note
                                key={note.id}
                                onDelete={onNoteDelete.bind(null, note)}
                                color={note.color}>
                                {note.text}
                            </Note>
                        );
                    }) : this.state.notes.map(function(note){
                        return (
                            <Note
                                key={note.id}
                                onDelete={onNoteDelete.bind(null, note)}
                                color={note.color}>
                                {note.text}
                            </Note>
                        );
                    })
                }
            </div>
            </div>
        );
    }
});

var NotesApp = React.createClass({
    getInitialState: function() {
        return {
            notes: []
        };
    },

    componentDidMount: function() {
        var localNotes = JSON.parse(localStorage.getItem('notes'));
        if (localNotes) {
            this.setState({ notes: localNotes });
        }
    },

    componentDidUpdate: function() {
        this._updateLocalStorage();
    },

    handleNoteDelete: function(note) {
        var noteId = note.id;
        var newNotes = this.state.notes.filter(function(note) {
            return note.id !== noteId;
        });
        this.setState({ notes: newNotes });
    },

    handleNoteAdd: function(newNote) {
        var newNotes = this.state.notes.slice();
        newNotes.unshift(newNote);
        this.setState({ notes: newNotes });
    },

    render: function() {
        return (
            <div className="notes-app">
                <h2 className="app-header">NotesApp</h2>
                <NoteEditor onNoteAdd={this.handleNoteAdd} />
                <NotesGrid notes={this.state.notes} onNoteDelete={this.handleNoteDelete} />
            </div>
        );
    },

    _updateLocalStorage: function() {
        var notes = JSON.stringify(this.state.notes);
        localStorage.setItem('notes', notes);
    }
});

ReactDOM.render(
    <NotesApp />,
    document.getElementById('mount-point')
);