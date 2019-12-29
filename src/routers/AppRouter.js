import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import React from 'react';
import Analyze from '../components/Analyze';
import Nav from '../components/Nav';
import Results from '../components/Results';
import Dashboard from '../components/Dashboard';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Nav/>
            <Switch>
                <Route path="/" component={Dashboard} exact={true}/>
                <Route path="/analyze" component={Analyze}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;