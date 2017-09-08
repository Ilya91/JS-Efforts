import React, { Component } from 'react'
import 'react-tabs/style/react-tabs.css';
import '../MyWork/Content.css'
import './style.css'
import ListOfTasks from './ListOfTasks'
import FormTask from '../MyWork/FormTask'
import Moment from 'react-moment';
import moment from 'moment'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Task from '../MyWork/Task'
import { connect } from 'react-redux'
import Select from 'react-select'
const options = [
    { value: 1, label: "Активна", color: '#2196F3', border: 'none'},
    { value: 2, label: 'Завершена', color: '#8CC34B', border: 'none' },
    { value: 3, label: 'Отложена', color: '#673BB7', border: 'none' },
    { value: 4, label: 'Отменена', color: '#9E9E9E', border: 'none' }
]


class Projects extends Component {
    state = { tabIndex: 0 }
    logChange = (val) => {
        const { id, changeTaskStatus } = this.props
        this.setState({
            selected: val,
            addSubTaskActive: false
        })
        console.log("Selected: " + JSON.stringify(val))

    }

    renderValue(option) {
        return <span key={option.value}>Статус: {option.label}</span>;
    }


    renderOption(option){
        return <span key={option.value}><div className="selectSquare" style={{ backgroundColor: option.color, border: 'none'}}></div>{option.label}</span>;
    }

    render(){
        const startThisWeek = moment().startOf('isoWeek')
        const endThisWeek = moment().endOf('isoWeek')
        const startNextWeek = moment().add(1, 'weeks').startOf('isoWeek')
        const endNextWeek = moment().add(1, 'weeks').endOf('isoWeek')
        const afterNextWeek = moment().add(1, 'weeks').endOf('isoWeek')
        const { tabIndex, selected } = this.state
        const { activeTask, tasks, projects } = this.props
        return(
            <div className="content-wrapper">
                <section className="content">
                    <div className="row">
                        <section className={ tabIndex || !activeTask ? "col-lg-12" : "col-lg-6"}>
                            <div className="box box-primary projects">
                                <div className="box-body">
                                    <h3 className="box-title">Проекты</h3>
                                </div>
                                <Tabs selectedIndex={tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                                    <TabList>
                                        <Tab>СПИСОК</Tab>
                                        <Tab>ТАБЛИЦА</Tab>
                                        <Tab>ВРЕМЕННАЯ ШКАЛА</Tab>
                                    </TabList>
                                        <div className="project-filters">
                                            <ul>
                                                <li>
                                                    <Select
                                                        style={{ border: 'none'}}
                                                        name="form-field-name"
                                                        value={selected}
                                                        options={options}
                                                        onChange={this.logChange}
                                                        clearable={false}
                                                        placeholder={false}
                                                        optionRenderer={this.renderOption}
                                                        valueComponent={this.valueComponent}
                                                        valueRenderer={this.renderValue}
                                                    />
                                                </li>
                                                <li data-toggle="dropdown" className="dropdown-toggle">СТАТУС: Любой</li>
                                                <li>ИСПОЛНИТЕЛЬ: Все</li>
                                            </ul>
                                        </div>
                                    <TabPanel>
                                        <FormTask/>
                                        <ListOfTasks projects={projects}/>
                                    </TabPanel>
                                    <TabPanel>
                                        table
                                    </TabPanel>
                                    <TabPanel>
                                        <h2>временная шакала</h2>
                                    </TabPanel>
                                </Tabs>
                            </div>
                        </section>
                        { (activeTask && !tabIndex) ? tasks.filter((task) =>
                            activeTask === task.id
                        ).map((task) => <Task
                            key={task.id}
                            id={task.id}
                            title={task.title}
                            date={task.date}
                            description={task.description ? task.description : ''}
                            complete={task.complete ? task.complete : ''}
                            status={task.status}
                        />) : null }
                    </div>
                </section>
            </div>
        )
    }
}
export default connect((state) => ({
    tasks: state.tasks,
    projects: state.projects,
    activeTask: state.activeTask
}), null)(Projects)