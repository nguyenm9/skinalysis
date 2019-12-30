import React, {Component} from 'react';
// import '../styles/_styles.scss';
//import logo from './logo.svg';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name
        }
    }

    //1st parameter : new props
    //2nd parameter : current state 
    static getDerivedStateFromProps(props, state) {
        console.log(props);
        console.log(state);
        if (props.name !== state.name){
            props.testFunction("changed");
            return {
                name: props.name,
            };        
        }
        return null;
    }
  
    render() {
        return (
            <div>
                <p>PP</p>
            </div>
        )
    }
  }