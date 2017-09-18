import React from 'react'
import { render } from 'react-dom'
import App from './components/App/index'
import store from './store'
import { Provider } from 'react-redux'
import { AUTH_USER } from './constants'

const token = localStorage.getItem('token');
// If we have a token, consider the user to be signed in
if (token) {
    // we need to update application state
    store.dispatch({ type: AUTH_USER })
}


render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector('.wrapper')
)