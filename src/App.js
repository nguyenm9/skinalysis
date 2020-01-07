import React, {Component} from 'react';
import { Menu, Sidebar, Segment, Button } from 'semantic-ui-react';
import Home from './components/Home';
import Nav from './components/Nav';
import Analyze from './components/Analyze';
import TopHeader from './components/TopHeader';

export default class MainContainer extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         visible: false
    //     }
    // }

    // toggleMenu = () => {
    //     this.setState({visible: !this.state.visible});
    // }

    render() {
        return (
            <div>
                <TopHeader/>
                <div className="app-layout">
                    hello
                </div>
            </div>

            

                // <div className="App" style={{width: '1000px', height: '900px', textAlign: 'center'}}>
                //     <Sidebar.Pushable>
                //         <Sidebar
                //             as={Menu}
                //             animation='push'
                //             icon='labeled'
                //             inverted
                //             vertical
                //             visible={this.state.visible}
                //             width='thin'
                //         >
                //             <Nav/>
                //         </Sidebar>
                //         <Sidebar.Pusher>
                //             <Button basic onClick={this.toggleMenu}>Toggle</Button>
                //             <Segment basic>
                //                 { this.state.currentView === "home" ? (
                //                     <Home/>
                //                 ):(
                //                     <Analyze/>
                //                 )}
                //             </Segment>
                //         </Sidebar.Pusher>
                //     </Sidebar.Pushable>
                // </div>
        )
    }
  }