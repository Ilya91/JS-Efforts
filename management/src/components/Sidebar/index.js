import React, { Component } from 'react'
import './Sidebar.css'
import {NavLink} from 'react-router-dom'
import { setActiveProject, setActiveTask } from '../../AC'
import { connect } from 'react-redux'

class Sidebar extends Component {

    state = {
        inputAddProject: false
    }

    handleAddProject = () => {
        const { inputAddProject } = this.state
        if(!inputAddProject){
            this.setState({
                inputAddProject: true
            })
        }else {
            this.setState({
                inputAddProject: false
            })
        }
    }

    handleClick = (id) => ev => {
        const { setActiveProject, setActiveTask } = this.props
        setActiveProject(id)
        setActiveTask(null)
    }

    render(){
        const { inputAddProject } = this.state
        const { projects } = this.props
        return(
            <aside className="main-sidebar">
                <section className="sidebar">
                    <div className="searchTasks">
                        <form action="#" method="get" className="sidebar-form">
                            <div className="input-group">
                                <input type="text" name="q" className="form-control" placeholder="Поиск задач..."/>
                            </div>
                        </form>
                    </div>
                    <ul className="sidebar-menu" data-widget="tree">
                        <li>
                            <NavLink
                                onClick={this.handleClick(null)}
                                activeClassName="active"
                                activeStyle = {{backgroundColor: '#5590CC', color: '#fff'}}
                                to="/issues">
                                <i className="fa fa-laptop"></i>
                                Моя работа</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={this.handleClick(null)} activeClassName="active" activeStyle = {{backgroundColor: '#5590CC', color: '#fff'}} to="/projects">
                                <i className="fa fa-dashboard"></i>Проекты
                                <i className="fa fa-plus pull-right" onClick={this.handleAddProject}></i>
                            </NavLink>
                            <div className="projectList">
                                { inputAddProject ? <div className="addNewProject">
                                    <input type="text" placeholder="Введите название"/>
                                </div> : null }
                                { projects ? <ul>{
                                    projects.map((project) =>
                                        <li key={project.id}>
                                            <NavLink onClick={this.handleClick(project.id)} activeClassName="active" activeStyle = {{backgroundColor: '#5590CC', color: '#fff'}} to = {`/projects/${project.id}`}>
                                                { project.title }
                                            </NavLink>
                                        </li>
                                )}</ul> : null}

                            </div>
                        </li>
                    </ul>

                </section>
            </aside>
        )
    }
}
export default connect(null, { setActiveProject, setActiveTask }, null, { pure: false })(Sidebar)