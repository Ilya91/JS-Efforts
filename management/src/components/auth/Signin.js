import React, { Component } from 'react';
import { signinUser } from '../../AC'
import {connect} from 'react-redux'
import Form from './inForm'
import './auth.css'

class Signup extends Component {
    submit = (values) => {
        const { signinUser } = this.props
        signinUser(values)
    }
    render() {
        return (
            <div className="login-box">
                <div className="login-box-body">
                    <div className="login-logo">
                        <img src="/public/dist/img/logo-white.png" alt=""/>
                        {/*<h3 className={'reg-header'}>Вход</h3>*/}
                    </div>
                    <Form signin={true} onSubmit={this.submit} />
                </div>
            </div>
        )
    }
}

export default connect(null, { signinUser })(Signup)
