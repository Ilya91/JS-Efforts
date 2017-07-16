import React, { Component } from 'react'
import Note from './Note'

class Grid extends Component {

    componentDidMount(){
        /*var grid = this.refs.grid;

        this.msnry = new Masonry( grid, {
            itemSelector: '.note',
            columnWidth: 200,
            gutter: 10,
            isFitWidth: true
        });*/
    }

    render(){
        const { notes } = this.props
        return (
            <div className="notes-grid" ref="grid">
                {
                    notes.map((note, i) =>
                        <Note id={note.id} key={i} color={note.color}>{note.text}</Note>
                    )
                }
                <Note/>
            </div>
        )
    }

}
export default Grid
