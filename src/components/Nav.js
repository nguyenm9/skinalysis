import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

// want to render on each page
export default class Navigation extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         activeItem: "home",
    //         currentView: "home"
    //     }
    // }

    // handleItemClick = (e, { name }) => { 
    //     this.props.updateCurrentView(name);
    //     this.setState({ activeItem: name });
    // }
  
    render() {
    //   const { activeItem } = this.state
        
      return (
            <div>
                <Menu>
                    <Menu.Item as={ Link }
                        name='home'
                        to='home'
                        // active={activeItem === 'home'}
                        // onClick={this.handleItemClick}
                    />
                    <Menu.Item as={ Link }
                        name='analyze'
                        to='analyze'
                        // active={activeItem === 'analyze'}
                        // onClick={this.handleItemClick}
                    />
                </Menu>
            </div>
      )
    }
  }