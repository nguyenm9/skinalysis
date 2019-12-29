import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import React from 'react';

// want to render on each page
const Nav = () => (
    <header>
        <h1>Navigation</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/analyze" activeClassName="is-active" exact={true}>Analyze</NavLink>
    </header>
);

export default Nav;