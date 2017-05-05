import React, {Component} from 'react';
import {HashRouter, Switch, Route, Link} from 'react-router-dom';
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

    generateModuleRoutes(modules) {
        return modules.map((module, index) => {
            return (
                <Route key={index}
                       path={"/" + module.code}
                       render={() => <Content module={module}/>}/>
            );
        });
    }

    render() {
        const modules = [
            {code: 'CS2010', name: 'Data Structure & Algorithm II'},
            {code: 'CS2106', name: 'Operating System'},
            {code: 'CS2107', name: 'Introduction to Computer Security'},
            {code: 'CS3219', name: 'Software Engineering Principles & Patterns'},
            {code: 'CS3226', name: 'Web Programming Project'}
        ];

        const moduleRoutes = this.generateModuleRoutes(modules);

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
                            <Icon bordered inverted color="black" name="sidebar" onClick={() => {
                                this.toggleMenu();
                            }}/>
                            <Switch>
                                <Route exact path="/" component={Content}/>
                                <Route path="/settings" component={Content}/>
                                {moduleRoutes}
                            </Switch>
                        </Sidebar.Pusher>
                    </Sidebar.Pushable>
                </div>
            </HashRouter>
        );
    }
}

export default App;
