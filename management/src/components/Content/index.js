import React, { Component } from 'react'
import './Content.css'

class Content extends Component {
    render(){
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
                                    <div className="box-footer clearfix no-border">
                                        <button type="button" className="btn btn-default pull-left"><i className="fa fa-plus"></i> Новая задача</button>
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
export default Content