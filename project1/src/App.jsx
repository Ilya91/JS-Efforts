import React from 'react';
import { Link } from 'react-router';

const App = () => (

            <div className='App'>

            <div className='menu-bar'>

                <div className='menu-item'>
                    <Link className='menu-item-link' to='/about'>About</Link>
                </div>
                <div className='menu-item'>
                    <Link className='menu-item-link' to='/tasks'>Tasks</Link>
                </div>
            </div>

            <div className='content'>
                {this.props.children}
            </div>
        </div>
);
export default App;