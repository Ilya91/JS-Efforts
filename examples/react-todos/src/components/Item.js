import React, { Component } from 'react'

class Item extends Component {
    render(){
        const { text, id, onClick } = this.props
        return (
            <p id={id} onClick={onClick}>{text}</p>
        )
    }

}

export default Item
