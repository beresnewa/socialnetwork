import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainPage from '../pages/Main';
import UsersPage from '../pages/Users'
import NavBar from '../components/NavBar'
import {ROUTES} from '../const';
import ProfilePage from '../pages/Profile';

const Navigator = () => {
    return (
        <BrowserRouter>

            <NavBar />

            <Switch>
                <Route path={'/users/:index'} component={ProfilePage}/>
                <Route path={ROUTES.USERS} component= {UsersPage}/>
                <Route path={ROUTES.MAIN} component= {MainPage} />
            </Switch>

        </BrowserRouter>
    );
};

export default Navigator;