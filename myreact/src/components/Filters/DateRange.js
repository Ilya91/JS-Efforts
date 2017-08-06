import React, { Component } from 'react'

import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import { connect } from 'react-redux'
import { selectDateRange, dateRangeReset } from '../../AC'

class Daterange extends Component {

    handleResetClick = e => {
        const { dateRangeReset } = this.props
        e.preventDefault();
        dateRangeReset()
    };

    handleDayClick = (day) => {
        const { selectDateRange, rangeDate } = this.props
        selectDateRange(DateUtils.addDayToRange(day, rangeDate))
    }

    render() {
        const { from, to } = this.props.rangeDate;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    ref="daypicker"
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        );
    }
}

export default connect((state) => ({
    rangeDate: state.filters.dateRange
}), { selectDateRange, dateRangeReset })(Daterange)