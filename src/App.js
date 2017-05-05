import React, {Component} from 'react';
import {Sidebar, Menu, Icon, Container} from 'semantic-ui-react';
import SidebarItems from "./SidebarItems";

class App extends Component {

    constructor(props){
        super(props);
        this.state = { visible: true};
    }

    toggleMenu() {
        this.setState({visible: !this.state.visible});
    }

    render() {
        return (
            <div style={{height: '100vh'}}>
                <Sidebar.Pushable>
                    <Sidebar as={Menu} animation="push" width="thin" visible={this.state.visible} icon="labeled" vertical
                             inverted>
                        <SidebarItems/>
                    </Sidebar>
                    <Sidebar.Pusher>
                        <Icon bordered inverted color="black" name="sidebar" onClick={this.toggleMenu.bind(this)}/>
                        <Container>
                            <h1>OMGWTF</h1>
                            <p>A common dream, born of two continents. The press has scoured every exit poll for the
                                latest evidence of racial polarization, not just in terms of white and black, but black
                                and brown as well. King's birthday at his home church, Ebenezer Baptist, in Atlanta.
                                That is what it means to share this world in the 21st century. It is a sign of neither
                                courage nor power to shoot rockets at sleeping children, or to blow up old women on a
                                bus. Those are mutual interests. </p>
                        </Container>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        );
    }
}

export default App;
