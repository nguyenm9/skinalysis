import { BrowserRouter as Router, Route} from 'react-router-dom';
import React, { Component } from 'react';
import Nav from "./Nav";
import Home from "./Home";
import Analyze from "./Analyze";

export default class MainContainer extends Component {
    render() {
        return (
            <div className="app-layout">
                <div>
                    <Router>
                        <Nav/>
                        <Route exact path="/home" component={Home}/>
                        <Route exact path="/analyze" component={Analyze}/>
                    </Router>
                </div>
            </div>
        )
    }
}
