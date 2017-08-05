import React, { Component } from 'react'

import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import moment from 'moment';

import { connect } from 'react-redux'
import { selectDateRange, dateRangeReset } from '../../AC'

class Daterange extends Component {

    state = {
        from: null,
        to: null
    }

    handleResetClick = e => {
        const { dateRangeReset } = this.props
        e.preventDefault();
        this.setState({
            from: null,
            to: null,
        });
        dateRangeReset()
    };

    handleDayClick2 = day => {
        const { selectDateRange } = this.props
        const range = DateUtils.addDayToRange(day, this.state)
        this.setState(range)
        selectDateRange(range)
    };

    render() {
        const { from, to } = this.state
        return (
            <div className="RangeExample">
                {!from && !to && <p>Please select the <strong>first day</strong>.</p>}
                {from && !to && <p>Please select the <strong>last day</strong>.</p>}
                {from &&
                to &&
                <p>
                    You chose from
                    {' '}
                    {moment(from).format('L')}
                    {' '}
                    to
                    {' '}
                    {moment(to).format('L')}
                    .
                    {' '}<a href="." onClick={this.handleResetClick}>Reset</a>
                </p>}
                <DayPicker
                    numberOfMonths={1}
                    selectedDays={[from, { from, to }]}
                    onDayClick={this.handleDayClick2}
                />
            </div>
        )
    }
}

export default connect((state) => ({
    rangeDate: state.range
}), { dateRangeReset, selectDateRange })(Daterange)