import React, { Component } from 'react'
import './Content.css'
import { connect } from 'react-redux'

class Task extends Component {

    render(){
        return(
                        <section className="col-lg-6">
                            <div className="box box-primary task-description">
                                <div className="box-body">
                                    <h2 className="box-title">Commodo qui</h2>
                                </div>
                            </div>
                        </section>
        )
    }
}
export default connect((state) => ({
    tasks: state.tasks
}), {})(Task)