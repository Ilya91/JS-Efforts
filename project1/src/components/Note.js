import React from 'react'

require('./Note.css');

const Note = ( props ) => (
    <div className="note"
         style={{backgroundColor: props.color}}>
        <span onClick={props.onDelete}> × </span>
        {props.children}
        </div> // this.props.children - если параметр передаётся между открывающим и закрывающим тегами
)
export default Note
