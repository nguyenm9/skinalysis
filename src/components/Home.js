import React, { Component } from 'react';
import { Container, Header, Segment, Label, Rating, Placeholder, Card } from 'semantic-ui-react';

export default class Home extends Component {
    render () {
        return (
            <div>
                <Container fluid>
                    <Header as='h2'>Know your products better.</Header>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                    <Header as="h3">Sample</Header>
                    <Segment.Group>
                        <Segment.Group>
                        <Card style={{ width: 200, height: 200 }}>
                            <Card.Content>
                                <Placeholder>
                                <Placeholder.Image square />
                                </Placeholder>
                            </Card.Content>
                        </Card>
                        </Segment.Group>
                        <Segment.Group>
                            <Segment>Product Name: </Segment>
                            <Segment>Description: </Segment>
                            <Segment>Rating: </Segment>
                        </Segment.Group>
                        <Segment.Group>
                            <Segment.Group horizontal>
                                <Segment>Ingredient</Segment>
                                <Segment>
                                    <Label color='red' horizontal>Flag</Label>
                                </Segment>
                                <Segment>
                                    <Rating maxRating={5} defaultRating={3} icon='star' size='mini' />
                                </Segment>
                            </Segment.Group>
                        </Segment.Group>
                        <Segment.Group>
                            <Segment>Research Articles</Segment>
                        </Segment.Group>
                    </Segment.Group>

                    <Segment.Group>
                        <Segment.Group>
                        <Card style={{ width: 200, height: 200 }}>
                            <Card.Content>
                                <Placeholder>
                                <Placeholder.Image square />
                                </Placeholder>
                            </Card.Content>
                        </Card>
                        </Segment.Group>
                        <Segment.Group>
                            <Segment>Product Name: </Segment>
                            <Segment>Description: </Segment>
                            <Segment>Rating: </Segment>
                        </Segment.Group>
                        <Segment.Group>
                            <Segment.Group horizontal>
                                <Segment>Ingredient</Segment>
                                <Segment>
                                    <Label color='red' horizontal>Flag</Label>
                                </Segment>
                                <Segment>
                                    <Rating maxRating={5} defaultRating={3} icon='star' size='mini' />
                                </Segment>
                            </Segment.Group>
                        </Segment.Group>
                        <Segment.Group>
                            <Segment>Research Articles</Segment>
                        </Segment.Group>
                    </Segment.Group>

                    <Segment.Group>
                        <Segment.Group>
                        <Card style={{ width: 200, height: 200 }}>
                            <Card.Content>
                                <Placeholder>
                                <Placeholder.Image square />
                                </Placeholder>
                            </Card.Content>
                        </Card>
                        </Segment.Group>
                        <Segment.Group>
                            <Segment>Product Name: </Segment>
                            <Segment>Description: </Segment>
                            <Segment>Rating: </Segment>
                        </Segment.Group>
                        <Segment.Group>
                            <Segment.Group horizontal>
                                <Segment>Ingredient</Segment>
                                <Segment>
                                    <Label color='red' horizontal>Flag</Label>
                                </Segment>
                                <Segment>
                                    <Rating maxRating={5} defaultRating={3} icon='star' size='mini' />
                                </Segment>
                            </Segment.Group>
                        </Segment.Group>
                        <Segment.Group>
                            <Segment>Research Articles</Segment>
                        </Segment.Group>
                    </Segment.Group>
                </Container>
            </div>
        )
    } 
}