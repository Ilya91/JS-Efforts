import React, { Component } from 'react'
import './Sidebar.css'
import {NavLink} from 'react-router-dom'

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
        console.log('plus')
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
                                {/*<span className="input-group-btn">
                                    <button type="button" name="search" id="search-btn" className="btn btn-flat">
                                        <i className="fa fa-search"></i>
                                    </button>
                                </span>*/}
                            </div>
                        </form>
                    </div>
                    <ul className="sidebar-menu" data-widget="tree">
                        <li>
                            <NavLink activeClassName="active" activeStyle = {{backgroundColor: '#5590CC', color: '#fff'}} to="/issues"><i className="fa fa-laptop"></i>Моя работа</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" activeStyle = {{backgroundColor: '#5590CC', color: '#fff'}} to="/projects">
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
                                            <NavLink activeClassName="active" activeStyle = {{backgroundColor: '#5590CC', color: '#fff'}} to = {`/projects/${project.id}`}>
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
export default Sidebar