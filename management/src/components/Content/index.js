import React, { Component } from 'react'
import './Content.css'

class Content extends Component {
    render(){
        return(
            <div className="content-wrapper">
                <section className="content">
                    <div className="row">
                        <section className="col-lg-6">
                            <div className="box box-primary">
                                <div className="box-header">
                                    <i className="ion ion-clipboard"></i>
                                    <h3 className="box-title">To Do List</h3>
                                    <div className="box-tools pull-right">
                                        <ul className="pagination pagination-sm inline">
                                            <li><a href="#">&laquo;</a></li>
                                            <li><a href="#">1</a></li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a href="#">&raquo;</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="box-body">
                                    <ul className="todo-list">
                                        <li>
                                            <span className="handle">
                        <i className="fa fa-ellipsis-v"></i>
                        <i className="fa fa-ellipsis-v"></i>
                      </span>
                                            <input type="checkbox" value=""/>
                                                <span className="text">Design a nice theme</span>
                                                <small className="label label-danger"><i className="fa fa-clock-o"></i> 2 mins</small>
                                                <div className="tools">
                                                    <i className="fa fa-edit"></i>
                                                    <i className="fa fa-trash-o"></i>
                                                </div>
                                        </li>
                                        <li>
                      <span className="handle">
                        <i className="fa fa-ellipsis-v"></i>
                        <i className="fa fa-ellipsis-v"></i>
                      </span>
                                            <input type="checkbox" value=""/>
                                                <span className="text">Make the theme responsive</span>
                                                <small className="label label-info"><i className="fa fa-clock-o"></i> 4 hours</small>
                                                <div className="tools">
                                                    <i className="fa fa-edit"></i>
                                                    <i className="fa fa-trash-o"></i>
                                                </div>
                                        </li>
                                        <li>
                      <span className="handle">
                        <i className="fa fa-ellipsis-v"></i>
                        <i className="fa fa-ellipsis-v"></i>
                      </span>
                                            <input type="checkbox" value=""/>
                                                <span className="text">Let theme shine like a star</span>
                                                <small className="label label-warning"><i className="fa fa-clock-o"></i> 1 day</small>
                                                <div className="tools">
                                                    <i className="fa fa-edit"></i>
                                                    <i className="fa fa-trash-o"></i>
                                                </div>
                                        </li>
                                        <li>
                      <span className="handle">
                        <i className="fa fa-ellipsis-v"></i>
                        <i className="fa fa-ellipsis-v"></i>
                      </span>
                                            <input type="checkbox" value=""/>
                                                <span className="text">Let theme shine like a star</span>
                                                <small className="label label-success"><i className="fa fa-clock-o"></i> 3 days</small>
                                                <div className="tools">
                                                    <i className="fa fa-edit"></i>
                                                    <i className="fa fa-trash-o"></i>
                                                </div>
                                        </li>
                                        <li>
                      <span className="handle">
                        <i className="fa fa-ellipsis-v"></i>
                        <i className="fa fa-ellipsis-v"></i>
                      </span>
                                            <input type="checkbox" value=""/>
                                                <span className="text">Check your messages and notifications</span>
                                                <small className="label label-primary"><i className="fa fa-clock-o"></i> 1 week</small>
                                                <div className="tools">
                                                    <i className="fa fa-edit"></i>
                                                    <i className="fa fa-trash-o"></i>
                                                </div>
                                        </li>
                                        <li>
                      <span className="handle">
                        <i className="fa fa-ellipsis-v"></i>
                        <i className="fa fa-ellipsis-v"></i>
                      </span>
                                            <input type="checkbox" value=""/>
                                                <span className="text">Let theme shine like a star</span>
                                                <small className="label label-default"><i className="fa fa-clock-o"></i> 1 month</small>
                                                <div className="tools">
                                                    <i className="fa fa-edit"></i>
                                                    <i className="fa fa-trash-o"></i>
                                                </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="box-footer clearfix no-border">
                                    <button type="button" className="btn btn-default pull-right"><i className="fa fa-plus"></i> Add item</button>
                                </div>
                            </div>
                        </section>
                        <section className="col-lg-6">
                            <div className="box box-primary">
                                <div className="box-header">
                                    <i className="ion ion-clipboard"></i>
                                    <h3 className="box-title">To Do List</h3>
                                    <div className="box-tools pull-right">
                                        <ul className="pagination pagination-sm inline">
                                            <li><a href="#">&laquo;</a></li>
                                            <li><a href="#">1</a></li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a href="#">&raquo;</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="box-body">
                                    <ul className="todo-list">
                                        <li>
                                            <span className="handle">
                        <i className="fa fa-ellipsis-v"></i>
                        <i className="fa fa-ellipsis-v"></i>
                      </span>
                                            <input type="checkbox" value=""/>
                                                <span className="text">Design a nice theme</span>
                                                <small className="label label-danger"><i className="fa fa-clock-o"></i> 2 mins</small>
                                                <div className="tools">
                                                    <i className="fa fa-edit"></i>
                                                    <i className="fa fa-trash-o"></i>
                                                </div>
                                        </li>
                                        <li>
                      <span className="handle">
                        <i className="fa fa-ellipsis-v"></i>
                        <i className="fa fa-ellipsis-v"></i>
                      </span>
                                            <input type="checkbox" value=""/>
                                                <span className="text">Make the theme responsive</span>
                                                <small className="label label-info"><i className="fa fa-clock-o"></i> 4 hours</small>
                                                <div className="tools">
                                                    <i className="fa fa-edit"></i>
                                                    <i className="fa fa-trash-o"></i>
                                                </div>
                                        </li>
                                        <li>
                      <span className="handle">
                        <i className="fa fa-ellipsis-v"></i>
                        <i className="fa fa-ellipsis-v"></i>
                      </span>
                                            <input type="checkbox" value=""/>
                                                <span className="text">Let theme shine like a star</span>
                                                <small className="label label-warning"><i className="fa fa-clock-o"></i> 1 day</small>
                                                <div className="tools">
                                                    <i className="fa fa-edit"></i>
                                                    <i className="fa fa-trash-o"></i>
                                                </div>
                                        </li>
                                        <li>
                      <span className="handle">
                        <i className="fa fa-ellipsis-v"></i>
                        <i className="fa fa-ellipsis-v"></i>
                      </span>
                                            <input type="checkbox" value=""/>
                                                <span className="text">Let theme shine like a star</span>
                                                <small className="label label-success"><i className="fa fa-clock-o"></i> 3 days</small>
                                                <div className="tools">
                                                    <i className="fa fa-edit"></i>
                                                    <i className="fa fa-trash-o"></i>
                                                </div>
                                        </li>
                                        <li>
                      <span className="handle">
                        <i className="fa fa-ellipsis-v"></i>
                        <i className="fa fa-ellipsis-v"></i>
                      </span>
                                            <input type="checkbox" value=""/>
                                                <span className="text">Check your messages and notifications</span>
                                                <small className="label label-primary"><i className="fa fa-clock-o"></i> 1 week</small>
                                                <div className="tools">
                                                    <i className="fa fa-edit"></i>
                                                    <i className="fa fa-trash-o"></i>
                                                </div>
                                        </li>
                                        <li>
                      <span className="handle">
                        <i className="fa fa-ellipsis-v"></i>
                        <i className="fa fa-ellipsis-v"></i>
                      </span>
                                            <input type="checkbox" value=""/>
                                                <span className="text">Let theme shine like a star</span>
                                                <small className="label label-default"><i className="fa fa-clock-o"></i> 1 month</small>
                                                <div className="tools">
                                                    <i className="fa fa-edit"></i>
                                                    <i className="fa fa-trash-o"></i>
                                                </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="box-footer clearfix no-border">
                                    <button type="button" className="btn btn-default pull-right"><i className="fa fa-plus"></i> Add item</button>
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