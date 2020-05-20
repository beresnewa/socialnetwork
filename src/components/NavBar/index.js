import React from 'react';
import { Link } from 'react-router-dom';

import './style.css'
import {ROUTES} from '../../const';

const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to={ROUTES.MAIN}>Main</Link>
    
            <Link to={ROUTES.USERS}>Users</Link>
        </nav>
    )
}

export default NavBar;