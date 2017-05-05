import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

export default class SidebarItems extends Component {
    generateModuleMenuItems() {
        return this.props.modules.map(module => {
            return (
                <Menu.Item>
                    <Link to={'/'+module.code}>
                        <h5>{module.code}<br/>
                            <small>{module.name}</small>
                        </h5>
                    </Link>
                </Menu.Item>
            );
        });
    }

    render() {
        const moduleItems = this.generateModuleMenuItems();

        return (
            <div>
                <Menu.Item>
                    Home
                </Menu.Item>
                <Menu.Item>
                    <h5>Settings</h5>
                </Menu.Item>
                {moduleItems}
            </div>
        )
    }
}