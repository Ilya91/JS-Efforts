import React from 'react'
import { render } from 'react-dom'
import App from './components/App/index'
import store from './store'
render(
    <App/>,
    document.querySelector('.wrapper')
)