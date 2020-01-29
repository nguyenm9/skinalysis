import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Header, Segment, Form } from 'semantic-ui-react';
import axios from 'axios';
import Results from './Results';

export default class Analyze extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userInputIngredients: ''
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    onSubmit = (event) => {
        event.preventDefault();
        
        const { userInputIngredients } = this.state;
        console.log(userInputIngredients);
        console.log(this.props);
        this.props.history.push('/results');
        // axios.post('/', {userInputIngredients})
        //     .then((result) => {
        //         // access results
        //     });
        // }
    }

    render () {
        const { userInputIngredients } = this.state;

        return (
            <div className="analyze-content">
                <Container fluid>
                    <Header as='h2' attached='top' center='true'>
                        Analyze Product
                    </Header>
                    <Segment attached>
                        <Form onSubmit={this.onSubmit}>
                            <Form.TextArea 
                                rows={20} 
                                placeholder='Enter ingredients...'
                                id='userInputIngredients'
                                name='userInputIngredients'
                                value={userInputIngredients}
                                type='text'
                                onChange={this.onChange}
                            />
                            <Form.Button content='Submit'/>
                        </Form>
                    </Segment>
                    <Segment>
                        <p>
                            {this.state.userInputIngredients}
                        </p>
                        <Results/>
                    </Segment>
                </Container>
            </div>
        )
    }
}  