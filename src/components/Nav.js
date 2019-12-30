import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

// want to render on each page
export default class Navigation extends Component {
    constructor() {
        super();
        this.state = {
            activeItem: "dashboard",
            currentView: "dashboard"
        }
    }

    handleItemClick = (e, { name }) => { 
        this.props.updateCurrentView(name);
        this.setState({ activeItem: name });
    }
  
    render() {
      const { activeItem } = this.state
        
      return (
        <div>
            <Menu pointing vertical>
            <Menu.Item
                name='dashboard'
                active={activeItem === 'dashboard'}
                onClick={this.handleItemClick}
            />
            <Menu.Item
                name='analyze'
                active={activeItem === 'analyze'}
                onClick={this.handleItemClick}
            />
            </Menu>
        </div>
      )
    }
  }