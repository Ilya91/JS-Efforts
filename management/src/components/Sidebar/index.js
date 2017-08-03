import React, { Component } from 'react'
import './Sidebar.css'

class Sidebar extends Component {
    render(){
        return(
            <aside className="main-sidebar">
                <section className="sidebar">
                    <form action="#" method="get" className="sidebar-form">
                        <div className="input-group">
                            <input type="text" name="q" className="form-control" placeholder="Search..."/>
                            <span className="input-group-btn">
                                <button type="submit" name="search" id="search-btn" className="btn btn-flat">
                                    <i className="fa fa-search"></i>
                                </button>
                            </span>
                        </div>
                    </form>
                    <ul className="sidebar-menu" data-widget="tree">
                        <li className="treeview">
                            <a href="#">
                                <i className="fa fa-files-o"></i>
                                <span>МОЯ РАБОТА</span>
                            </a>
                        </li>
                        <li className="treeview">
                            <a href="#">
                                <i className="fa fa-files-o"></i>
                                <span>ПРОЕКТЫ</span>
                            </a>
                        </li>
                    </ul>
                </section>
            </aside>
        )
    }
}
export default Sidebar