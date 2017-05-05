import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Content from "../Content";

export default class Routes extends Component {

    generateModuleRoutes() {
        return this.props.modules.map((module, index) => {
            return (
                <Route key={index}
                       path={"/" + module.code}
                       render={() => <Content module={module}/>}/>
            );
        });
    }

    render() {
        const moduleRoutes = this.generateModuleRoutes();

        return (
            <Switch>
                <Route exact path="/" component={Content}/>
                <Route path="/settings" component={Content}/>
                {moduleRoutes}
            </Switch>
        );
    }
}
