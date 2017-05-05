import React, {Component} from 'react';
import {Sidebar, Menu, Icon, Container} from 'semantic-ui-react';

export default class Navbar extends Component {
    state = {visible: true};

    toggleVisibility = () => this.setState({visible: !this.state.visible});

    render() {

        const {visible} = this.state;

        return (
            <div style={{height: '100vh'}}>
                <Sidebar.Pushable>
                    <Sidebar as={Menu} animation="push" width="thin" visible={visible} icon="labeled" vertical
                             inverted>
                        <Menu.Item name='home'>
                            Home
                        </Menu.Item>
                        <Menu.Item>
                            <h5>Settings</h5>
                        </Menu.Item>
                        <Menu.Item>
                            <h5>CS2010<br/><small>Data Structure & Algorithm II</small></h5>
                        </Menu.Item>
                        <Menu.Item>
                            <h5>CS2106<br/><small>Operating System</small></h5>
                        </Menu.Item>
                        <Menu.Item>
                            <h5>CS2107<br/><small>Introduction to Computer Security</small></h5>
                        </Menu.Item>
                        <Menu.Item>
                            <h5>CS3219<br/><small>Software Engineering Principles & Patterns</small></h5>
                        </Menu.Item>
                        <Menu.Item>
                            <h5>CS3226<br/><small>Web Programming Project</small></h5>
                        </Menu.Item>
                    </Sidebar>
                    <Sidebar.Pusher>
                        <Icon bordered inverted color="black" name="sidebar" onClick={this.toggleVisibility}/>
                        <Container>
                            <h1>OMGWTF</h1>
                            <p>A common dream, born of two continents. The press has scoured every exit poll for the latest evidence of racial polarization, not just in terms of white and black, but black and brown as well. King's birthday at his home church, Ebenezer Baptist, in Atlanta. That is what it means to share this world in the 21st century. It is a sign of neither courage nor power to shoot rockets at sleeping children, or to blow up old women on a bus. Those are mutual interests. </p>
                        </Container>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        )
    }
}