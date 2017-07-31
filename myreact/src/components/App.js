import React, { Component } from 'react'

import ArticleList from './ArticleList'
import UserForm from './UserForm'
import { articles } from '../fixtures'

/* Select */
import Select from 'react-select'
import 'react-select/dist/react-select.css';

/* Date Picker */
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

/* DayPickerInput */
import DayPickerInput from 'react-day-picker/DayPickerInput';

import moment from 'moment';

const modifiers = {
    even: day => day.getDate() % 2 === 0,
    odd: day => day.getDate() % 2 !== 0,
    first: day => day.getDate() === 1,
};

class App extends Component{
    state = {
        selection: null,
        selectedDay: new Date(),
        from: null,
        to: null
    }

    handleSelection = (selection) => {
        this.setState({
            selection
        })
    }

    handleDayClick = day => {
        this.setState({
            selectedDay: day,
        });
    }


    handleDayClick2 = day => {
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



    render(){
        const { from, to } = this.state;
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return(
        <div>
            <DayPicker onDayClick={this.handleDayClick}
                       selectedDays={this.state.selectedDay}
                       modifiers={modifiers}
                       modifiersStyles={ {
                           even: {
                               background: "#DFF0D8",
                               fontWeight: "bold",
                           },
                           odd: {
                               background: "D9EDF7",
                           },
                           first: {
                               background: "FCF8E3",
                           },
                       } }
            />
            <UserForm/>
            <Select options={options} value={ this.state.selection} onChange={this.handleSelection} multi={true}/>
            <DayPickerInput />
            <ArticleList articles = { articles }/>


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
                    onDayClick={this.handleDayClick2}
                    fixedWeeks
                />
            </div>
        </div>
        )
    }
}
export default App