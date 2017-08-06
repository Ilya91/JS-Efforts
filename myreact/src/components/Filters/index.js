import React, { Component } from 'react'
import Selection from './Select'
import Daterange from './DateRange'

class Filters extends Component {
    render() {
        return (
            <div>
                <Selection/>
                <Daterange/>
            </div>
        )
    }
}

export default Filters