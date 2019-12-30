import React, {Component} from 'react';
import { Grid } from 'semantic-ui-react';
import Dashboard from './Dashboard';
import Nav from './Nav';
import Analyze from './Analyze';
import Header from './Header';

export default class MainContainer extends Component {
    constructor() {
        super();
        this.state = {
            currentView: "dashboard"
        }
    }

    updateCurrentView = (name) => {
        this.setState({ currentView: name });
    }

    render() {
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Nav updateCurrentView={this.updateCurrentView} />
                    </Grid.Column>
                    <Grid.Column width={10}>
                        { this.state.currentView === "dashboard" ? (
                            <Dashboard/>
                        ):(
                            <Analyze/>
                        )}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
  }