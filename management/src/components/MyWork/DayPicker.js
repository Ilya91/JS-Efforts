import React from 'react';
import moment from 'moment';
import DayPicker, { DateUtils } from 'react-day-picker';
import LocaleUtils from 'react-day-picker/moment';
import 'moment/locale/ru';

import 'react-day-picker/lib/style.css';

export default class Example extends React.Component {
    state = {
        from: null,
        to: null,
    };
    handleDayClick = day => {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    };
    handleResetClick = e => {
        e.preventDefault();
        this.setState({
            from: null,
            to: null,
        });
    };
    render() {
        const { from, to } = this.state;
        const modifiers = {
            weekends: { daysOfWeek: [6] },
            weekends2: { daysOfWeek: [0] }
        };
        const modifiersStyles = {
            weekends: {
                color: '#000',
                backgroundColor: '#EEEEEE',
            },
            weekends2: {
                color: '#000',
                backgroundColor: '#EEEEEE',
            },
        };
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
                    numberOfMonths={2}
                    selectedDays={[from, { from, to }]}
                    onDayClick={this.handleDayClick}
                    localeUtils={LocaleUtils}
                    locale="ru"
                    modifiers={modifiers}
                    modifiersStyles={modifiersStyles}
                />
            </div>
        );
    }
}