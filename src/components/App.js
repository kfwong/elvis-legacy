import React, {Component} from 'react';
import {HashRouter} from 'react-router-dom';
import {Sidebar, Menu, Icon} from 'semantic-ui-react';
import Routes from "./routes/Routes";
import SidebarItems from "./SidebarItems";

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {visible: true};
    }

    toggleMenu() {
        this.setState({visible: !this.state.visible});
    }
    
    render() {
        const modules = [
            {code: 'CS2010', name: 'Data Structure & Algorithm II'},
            {code: 'CS2106', name: 'Operating System'},
            {code: 'CS2107', name: 'Introduction to Computer Security'},
            {code: 'CS3219', name: 'Software Engineering Principles & Patterns'},
            {code: 'CS3226', name: 'Web Programming Project'}
        ];

        return (
            <HashRouter>
                <div style={{height: '100vh'}}>
                    <Sidebar.Pushable>
                        <Sidebar as={Menu} animation="push" width="thin" visible={this.state.visible} icon="labeled"
                                 vertical
                                 inverted>
                            <SidebarItems modules={modules}/>
                        </Sidebar>
                        <Sidebar.Pusher>
                            <Icon bordered inverted color="black" name="sidebar"
                                  onClick={this.toggleMenu.bind(this)}/>
                            <Routes modules={modules}/>
                        </Sidebar.Pusher>
                    </Sidebar.Pushable>
                </div>
            </HashRouter>
        );
    }
}
