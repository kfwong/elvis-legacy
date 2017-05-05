import React, {Component} from 'react';
import {Sidebar, Menu, Icon} from 'semantic-ui-react';
import SidebarItems from "./SidebarItems";
import Content from "./Content";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {visible: true};
    }

    toggleMenu() {
        this.setState({visible: !this.state.visible});
    }

    render() {
        return (
            <div style={{height: '100vh'}}>
                <Sidebar.Pushable>
                    <Sidebar as={Menu} animation="push" width="thin" visible={this.state.visible} icon="labeled"
                             vertical
                             inverted>
                        <SidebarItems/>
                    </Sidebar>
                    <Sidebar.Pusher>
                        <Icon bordered inverted color="black" name="sidebar" onClick={() => {
                            this.toggleMenu();
                        }}/>
                        <Content padding={this.state.padding}/>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        );
    }
}

export default App;
