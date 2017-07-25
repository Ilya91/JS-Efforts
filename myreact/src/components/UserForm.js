import React, { Component } from 'react'

class UserForm extends Component{
    state = {
        username: ''
    }

    handleChange = (e) => {
        if (e.target.value.length > 10) return
        this.setState({
            username: e.target.value
        })
    }

    render(){
        return(
            <div>
                Name: <input type="text" value={ this.state.username } onChange={this.handleChange}/>
            </div>
        )
    }
}
export default UserForm