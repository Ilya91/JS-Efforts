import React, { Component } from 'react'

class FormComment extends Component{

    handleSubmit(event) {
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <p>
                    <label>
                        Name:
                        <input type="text"/>
                    </label>
                </p>
                <p>
                    <label>
                        Comment:
                        <textarea cols="30" rows="10"></textarea>
                    </label>
                </p>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default FormComment