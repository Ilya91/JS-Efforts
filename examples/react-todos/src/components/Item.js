import React from 'react'

const Item = ({ id, onClick, text, completed}) => (
    <p id={id} style={{textDecoration: completed ? 'line-through' : 'none'}} onClick={onClick}>{text}</p>
)

export default Item
