import React, { Component } from 'react'
import './Content.css'
import { connect } from 'react-redux'

class OtherDays extends Component {

    render(){
        const { tasks, isActive } = this.props
        return(
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
        )
    }
}
export default connect((state) => ({
    tasks: state.tasks
}), {})(OtherDays)