import React from 'react'
import { Field, reduxForm } from 'redux-form'

let Form = props => {
    const { handleSubmit } = props
    return (
        <form onSubmit={ handleSubmit }>
            <div className="form-group has-feedback">
                <Field name="login" component="input" type="text" className="form-control" placeholder="Логин" />
            </div>
            <div className="form-group has-feedback">
                <Field name="email" component="input" type="email" className="form-control" placeholder="Эл. почта" />
            </div>
            <div className="form-group has-feedback">
                <Field name="password" component="input" type="password" className="form-control" placeholder="Пароль" />
            </div>
            <div className="row">
                <div className="col-xs-5  pull-right">
                    <button type="submit" className="btn btn-primary btn-block">Регистрация</button>
                </div>
            </div>
        </form>
    )
}

Form = reduxForm({
    // a unique name for the form
    form: 'signup'
})(Form)

export default Form;