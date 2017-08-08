import React, { Component } from 'react'
import './Content.css'
import  { tasks } from '../fixtures'
import TaskList from '../TaskList'

class MyWork extends Component {
    state = {
        tasks: 0,
        taskInputOpen: false
    }

    handleClick = () => {
        this.setState({
            taskInputOpen: true
        })
    }

    handleSubmit = (e) => {
        this.setState({
            taskInputOpen: false,
            tasks: this.state.tasks + 1
        })
    }

    render(){
        const { taskInputOpen } = this.state
        return(
            <div className="content-wrapper">
                <section className="content">
                    <div className="row">
                        <section className="col-lg-8">
                            <div className="box box-primary">
                                <div className="box-header">
                                    <i className="ion ion-clipboard"></i>
                                    <h3 className="box-title">НА СЕГОДНЯ</h3>
                                    <span className="myWorkData"> Окт 9</span>
                                    <span className="label label-info pull-right">0</span>
                                </div>
                                <div className="box-body">
                                    <div>
                                        { taskInputOpen ? <form onSubmit={this.handleSubmit}><input type="text" className="form-control"/></form> : <button onClick={this.handleClick} type="button" className="btn btn-default pull-left">
                                            <i className="fa fa-plus"></i> Новая задача
                                        </button>}

                                    </div>
                                    <div>
                                        <TaskList tasks = { tasks }/>
                                    </div>
                                </div>

                            </div>
                        </section>
                        <section className="col-lg-4">
                            <div className="box box-primary">
                                <div className="box-header">
                                    <i className="ion ion-clipboard"></i>
                                    <h3 className="box-title">НА ЭТУ НЕДЕЛЮ</h3>
                                    <span className="myWorkData"> Окт 9</span>
                                    <span className="label label-info pull-right">0</span>
                                </div>
                                <div className="box-header">
                                    <i className="ion ion-clipboard"></i>
                                    <h3 className="box-title">НА СЛЕД. НЕДЕЛЮ</h3>
                                    <span className="myWorkData"> Окт 9</span>
                                    <span className="label label-info pull-right">0</span>
                                </div>
                                <div className="box-header">
                                    <i className="ion ion-clipboard"></i>
                                    <h3 className="box-title">ПОЗЖЕ</h3>
                                    <span className="myWorkData"> Окт 9</span>
                                    <span className="label label-info pull-right">0</span>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
            </div>
        )
    }
}
export default MyWork