import React from 'react'

const Note = ( props ) => (
    <div className="note"
         style={{backgroundColor: props.color}}>
        {props.children}
        </div> // this.props.children - если параметр передаётся между открывающим и закрывающим тегами
)
export default Note
