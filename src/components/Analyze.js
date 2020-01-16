import React, { Component } from 'react';
import { Container, Header, TextArea, Segment, Form } from 'semantic-ui-react';

export default class Analyze extends Component {
    render () {
        return (
            <div class="analyze-content">
                <Container fluid>
                    <Header as='H2' attached='top' center>
                        Analyze Product
                    </Header>
                    <Segment attached>
                        <Form>
                            <TextArea rows={20} 
                                placeholder='Enter ingredients here...'
                            />
                        </Form>
                    </Segment>
                </Container>
            </div>
        )
    }
}  