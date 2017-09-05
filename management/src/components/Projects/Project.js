import React, { Component } from 'react'
import 'react-tabs/style/react-tabs.css';
import '../MyWork/Content.css'
import './style.css'
import ListOfTasks from './ListOfTasks'
import ProjectDetails from './ProjectDetails'
import FormTask from '../MyWork/FormTask'
import Moment from 'react-moment';
import { connect } from 'react-redux'
import moment from 'moment'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Task from '../MyWork/Task'


class Project extends Component {
    state = { tabIndex: 0 }

    getProject(){
        const paramId = this.props.match.params.id
        const { projects } = this.props

        const project = projects.filter((project) =>
            paramId === project.id
        )[0]
        return project
    }
    render(){
        const startThisWeek = moment().startOf('isoWeek')
        const endThisWeek = moment().endOf('isoWeek')
        const startNextWeek = moment().add(1, 'weeks').startOf('isoWeek')
        const endNextWeek = moment().add(1, 'weeks').endOf('isoWeek')
        const afterNextWeek = moment().add(1, 'weeks').endOf('isoWeek')
        const paramId = this.props.match.params.id
        const { tabIndex } = this.state
        const { activeTask, tasks } = this.props
        const project = this.getProject()
        return(
            <div className="content-wrapper">
                <section className="content">
                    <div className="row">
                        <section className={ tabIndex ? "col-lg-12" : "col-lg-6"}>
                            <div className="box box-primary projects">
                                <div className="box-body">
                                    <h3 className="box-title">{ project ? project.title : null }</h3>
                                </div>
                                <Tabs selectedIndex={tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                                    <TabList>
                                        <Tab>СПИСОК</Tab>
                                        <Tab>ТАБЛИЦА</Tab>
                                        <Tab>ВРЕМЕННАЯ ШКАЛА</Tab>
                                    </TabList>
                                        <div className="project-filters">
                                            <ul>
                                                <li>СТАТУС: Любой</li>
                                                <li>ИСПОЛНИТЕЛЬ: Все</li>
                                            </ul>
                                        </div>
                                    <TabPanel>
                                        <FormTask/>
                                        <ListOfTasks projectId={paramId}/>
                                    </TabPanel>
                                    <TabPanel>
                                        <h2>Any content 2</h2>
                                    </TabPanel>
                                    <TabPanel>
                                        <h2>временная шакала</h2>
                                    </TabPanel>
                                </Tabs>
                            </div>
                        </section>
                        { (tabIndex || activeTask) ? null : <ProjectDetails project={project}/>}
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
}), null)(Project)