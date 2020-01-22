import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import Nav from "./Nav";
import Home from "./Home";
import Analyze from "./Analyze";
import Results from "./Results";

export default class MainContainer extends Component {
    render() {
        return (
            <div className="app-layout">
                <div>
                    <Router>
                        <Nav/>
                        <div className="app-content">
                            <Redirect exact from="/" to="/home" component={Home}/>
                            <Route exact path="/home" component={Home}/>
                            <Route exact path="/analyze" component={Analyze}/>
                            <Route exact path="/results" component={Results}/>
                        </div>
                    </Router>
                </div>
            </div>
        )
    }
}
