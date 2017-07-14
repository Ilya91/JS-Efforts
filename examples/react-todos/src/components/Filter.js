import React, { Component } from 'react'

class Filter extends Component {
    /*constructor(props) {
        super(props);
        this.state = {text: '', style: ''}
    }*/

    handleClick = (e) => {

        this.setState({text : e.target.style.color = 'red'})

    }

    render(){
        return (
            <div>
                <a href="" onClick={e => {
                    e.preventDefault();
                    //this.handleClick
                }
                }>All</a>,
                <a href="">Active</a>,
                <a href="">Completed</a>
            </div>
        )
    }

}

export default Filter
