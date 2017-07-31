import React, { Component } from 'react'

class FormComment extends Component{

    handleSubmit(event) {
        event.preventDefault();
    }

    handleChangeName = ( e ) => {
        if( e.target.value.length < 5 || e.target.value.length > 15){
            e.target.style.border = '1px solid red'
        }else{
            e.target.style.border = '1px solid green'
        }
    }

    handleChangeText = ( e ) => {
        if( e.target.value.length < 20 || e.target.value.length > 50){
            e.target.style.border = '1px solid red'
        }else{
            e.target.style.border = '1px solid green'
        }
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <p>
                    <label>
                        Name:
                        <input type="text" onChange={this.handleChangeName}/>
                    </label>
                </p>
                <p>
                    <label>
                        Comment:
                        <textarea cols="30" rows="10" onChange={this.handleChangeText}></textarea>
                    </label>
                </p>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default FormComment