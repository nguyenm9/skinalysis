import React, {Component} from 'react';
import { Menu, Sidebar, Segment, Button } from 'semantic-ui-react';
import Landing from './Landing';
import Nav from './Nav';
import Analyze from './Analyze';
import Header from './Header';

export default class MainContainer extends Component {
    constructor() {
        super();
        this.state = {
            currentView: "landing",
            visible: false
        }
    }

    updateCurrentView = (name) => {
        this.setState({ currentView: name });
    }

    toggleMenu = () => {
        this.setState({visible: !this.state.visible});
    }

    render() {
        return (
                <div style={{width: '1000px', height: '900px', textAlign: 'center'}}>
                    <Sidebar.Pushable>
                        <Sidebar
                            as={Menu}
                            animation='push'
                            icon='labeled'
                            inverted
                            vertical
                            visible={this.state.visible}
                            width='thin'
                        >
                            <Nav updateCurrentView={this.updateCurrentView} />
                        </Sidebar>
                        <Sidebar.Pusher>
                            <Button basic onClick={this.toggleMenu}>Toggle</Button>
                            <Segment basic>
                                { this.state.currentView === "landing" ? (
                                    <Landing/>
                                ):(
                                    <Analyze/>
                                )}
                            </Segment>
                        </Sidebar.Pusher>
                    </Sidebar.Pushable>
                </div>
        )
    }
  }