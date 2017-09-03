import React, { Component } from 'react'
import 'react-tabs/style/react-tabs.css';
import '../MyWork/Content.css'
import './style.css'
import ListOfTasks from './ListOfTasks'
import FormTask from '../MyWork/FormTask'
import Moment from 'react-moment';
import moment from 'moment'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


class Projects extends Component {
    render(){
        const startThisWeek = moment().startOf('isoWeek')
        const endThisWeek = moment().endOf('isoWeek')
        const startNextWeek = moment().add(1, 'weeks').startOf('isoWeek')
        const endNextWeek = moment().add(1, 'weeks').endOf('isoWeek')
        const afterNextWeek = moment().add(1, 'weeks').endOf('isoWeek')
        return(
            <div className="content-wrapper">
                <section className="content">
                    <div className="row">
                        <section className={ "col-lg-12"}>
                            <div className="box box-primary projects">
                                <div className="box-body">
                                    <h3 className="box-title">Проекты</h3>
                                </div>
                                <Tabs>
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
                                    <FormTask/>
                                    <TabPanel>
                                        <ListOfTasks/>
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
                    </div>
                </section>
            </div>
        )
    }
}
export default Projects