import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../common';

function RenderMenu (props) {
    
    console.log('menuprops', props);
    return(
        <div className = 'menuBar'>
            <ul className = 'navList'>
                <li className = 'navLink'><Link to = '/'>Home</Link></li>
                <li className = 'navLink'><Link to = '/login'>Login</Link></li>
                <li className = 'navLink'><Button
                    handleClick={() => props.authService.logout()}
                    buttonText="Logout"
                /></li>
            </ul>
        </div>
    );
}

export default RenderMenu;