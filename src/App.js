import React, {Component} from 'react';
import TopHeader from './components/TopHeader';
import InnerComponent from './components/InnerComponent';

export default class MainContainer extends Component {
    render() {
        const pp = "pp";
        return (
            <div>
                <TopHeader/>
                <InnerComponent/>
            </div>
        )
    }
  }