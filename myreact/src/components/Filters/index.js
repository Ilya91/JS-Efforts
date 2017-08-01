import React, { Component } from 'react'
import Selection from './Select'
import Daterange from './DateRange'
import { articles } from '../../fixtures'

class Filters extends Component {
    render() {
        return (
            <div>
                <Selection articles={ articles }/>
                <Daterange/>
            </div>
        )
    }
}

export default Filters