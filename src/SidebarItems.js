import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react';

export default class SidebarItems extends Component {
    render() {

        return (
            <div>
                <Menu.Item>
                    Home
                </Menu.Item>
                <Menu.Item>
                    <h5>Settings</h5>
                </Menu.Item>
                <Menu.Item>
                    <h5>CS2010<br/>
                        <small>Data Structure & Algorithm II</small>
                    </h5>
                </Menu.Item>
                <Menu.Item>
                    <h5>CS2106<br/>
                        <small>Operating System</small>
                    </h5>
                </Menu.Item>
                <Menu.Item>
                    <h5>CS2107<br/>
                        <small>Introduction to Computer Security</small>
                    </h5>
                </Menu.Item>
                <Menu.Item>
                    <h5>CS3219<br/>
                        <small>Software Engineering Principles & Patterns</small>
                    </h5>
                </Menu.Item>
                <Menu.Item>
                    <h5>CS3226<br/>
                        <small>Web Programming Project</small>
                    </h5>
                </Menu.Item>
            </div>
        )
    }
}