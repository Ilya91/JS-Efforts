import React, { Component } from 'react'

class Item extends Component{

    /*constructor(props) {
        super(props);
        this.state = { completed: false }
    }*/

    onClick = () => {
        this.setState({ completed: true });
    }

    render(){
        const { id, text, onClick, completed } = this.props
        return(
            <p
                id={id}
                style={{textDecoration: completed ? 'line-through' : 'none'}}
                onClick={onClick}>{text}
            </p>
        )
    }
}

export default Item
