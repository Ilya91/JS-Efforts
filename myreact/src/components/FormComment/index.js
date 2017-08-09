import React, { Component } from 'react'
import { connect } from 'react-redux'
import './FormComment.css'
import { addComment } from '../../AC'

class FormComment extends Component{

    state = {
        user: '',
        text: ''
    }

    handleSubmit = (event) => {
        const { idArticle } = this.props
        console.log(idArticle)
        event.preventDefault();
        let user = document.querySelector("input[type=text]").value
        let text = document.querySelector("textarea").value
        let id = Math.random().toString(36).substring(3)
        const { addComment } = this.props
        let newComment = {
            user,
            text,
            id,
            idArticle
        }
        addComment(newComment)
        this.setState({
            user: '',
            text: ''
        })
    }




    render(){
        const { user, text } = this.state
        return(
            <form onSubmit={this.handleSubmit}>
                <p>
                    <label>
                        Name:
                        <input type="text" value = {user}
                               onChange = {this.handleChangeName}
                               className = {this.getClassName('user')}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Comment:
                        <textarea cols="30" rows="10" value = {text}
                                  onChange = {this.handleChangeText}
                                  className = {this.getClassName('text')}
                        ></textarea>
                    </label>
                </p>
                <input type="submit" value="Submit" />
            </form>
        )
    }

    getClassName = type => this.state[type].length && this.state[type].length < limits[type].min
        ? 'form-input__error' : ''

    handleChange = type => ev => {
        const { value } = ev.target
        if (value.length > limits[type].max) return
        this.setState({
            [type]: value
        })
    }

    handleChangeName = e => {
        const { value } = e.target
        this.setState({
            user: value
        })
    }

    handleChangeText = e => {
        const { value } = e.target
        this.setState({
            text: value
        })
    }
}

const limits = {
    user: {
        min: 5,
        max: 15
    },
    text: {
        min: 20,
        max: 50
    }
}

export default connect((state) => ({
    comment: state.comment
}), { addComment })(FormComment)