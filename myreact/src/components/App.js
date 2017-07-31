import React, { Component } from 'react'

import ArticleList from './ArticleList'
import UserForm from './UserForm'
import { articles } from '../fixtures'

/* Select */
import Select from 'react-select'
import 'react-select/dist/react-select.css';

/* Date Picker */
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

/* DayPickerInput */
import DayPickerInput from 'react-day-picker/DayPickerInput';

const modifiers = {
    even: day => day.getDate() % 2 === 0,
    odd: day => day.getDate() % 2 !== 0,
    first: day => day.getDate() === 1,
};

class App extends Component{
    state = {
        selection: null,
        selectedDay: new Date(),
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

    render(){
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
                               background: "green",
                               fontWeight: "bold",
                           },
                           odd: {
                               background: "purple",
                           },
                           first: {
                               background: "green",
                           },
                       } }
            />
            <UserForm/>
            <Select options={options} value={ this.state.selection} onChange={this.handleSelection} multi={true}/>
            <DayPickerInput />
            <ArticleList articles = { articles }/>
        </div>
        )
    }
}
export default App