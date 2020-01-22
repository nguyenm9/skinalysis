import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export default class Navigation extends Component {
    render() {
      return (
            <div>
                <Menu>
                    <Menu.Item as={ Link }
                        name='home'
                        to='home'
                    />
                    <Menu.Item as={ Link }
                        name='analyze'
                        to='analyze'
                    />
                </Menu>
            </div>
      )
    }
  }