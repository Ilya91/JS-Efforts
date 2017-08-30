import React, { Component } from 'react'
import Moment from 'react-moment';
import { changeSubTaskTitle, addSubTaskUser } from '../../AC'
import {connect} from 'react-redux'

class SubTaskItem extends Component {
    state = {
        isOpenInputTitle: false,
        taskTitle: null
    }

    handleCloseInput = () => {
        this.setState({
            isOpenInputTitle: false
        })
    }
    handleEditTitle = () => {
        this.setState({
            isOpenInputTitle: true
        })
    }

    handleEditSubmit = (e) => {
        const { isOpenInputTitle, taskTitle } = this.state
        const { changeSubTaskTitle, id } = this.props
        e.preventDefault()
        changeSubTaskTitle(id, taskTitle)
        this.setState({
            isOpenInputTitle: false
        })
    }

    handleChangeTitle = (e) => {
        this.setState({
            taskTitle: e.target.value
        })
    }

    handleAddUser = (userId) => (e) => {
        const { id, addSubTaskUser } = this.props
        e.preventDefault()
        addSubTaskUser(id, userId)
        console.log(id)
    }

    render(){
        const { id, title, users, onClick, usersList } = this.props
        const { isOpenInputTitle, taskTitle } = this.state
        return(
            <li onClick={onClick} id={id} className="subTaskItem">
                <input type="checkbox"/>
                    <span data-toggle="dropdown" className="dropdown-toggle">
                        <i className="fa fa-user-plus"></i>
                    </span>
                        {/*{ users ? <ul>
                            { users.map((user) => <li key={user.name}>{ user.name }</li>) }
                        </ul> : null
                        }*/}
                    <ul className="dropdown-menu">
                        <p>Добавьте пользователя</p>
                        { usersList ? usersList.map((listUser) =>
                            <li key={listUser.id}>
                                <a href="" id={listUser.id} onClick={this.handleAddUser(listUser.id)}>
                                    <img className="img-circle" src={ listUser.avatar } alt="img"/>
                                    <span>{ listUser.name }</span>
                                </a>
                            </li>
                        ) : null }

                    </ul>
                <strong  onClick={this.handleEditTitle}>{ title }</strong>
                { isOpenInputTitle ?
                <div className="form-group">
                    <form onSubmit={ this.handleEditSubmit }>
                        <input
                            onChange={ this.handleChangeTitle }
                            className="form-control"
                            type="text"
                            placeholder="Введите название новой задачи"
                            autoFocus
                        />
                    </form>
                    <span onClick={ this.handleCloseInput } className="glyphicon glyphicon-remove-sign"></span>
                </div>
                    : '' }
            </li>
        )
    }

    getClassName = (id) => {
        const { isActive } = this.props
        if(isActive){
            return 'active'
        }
    }
}
export default connect(null, { changeSubTaskTitle, addSubTaskUser })(SubTaskItem)