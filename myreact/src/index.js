import React from 'react'
import { render } from 'react-dom'

import App from './components/App'
import store from './store'

render(
    <App/>,
    document.getElementById('container')
)