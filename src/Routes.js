import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import RoutesConfig from './RoutesConfig';

export default class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    {RoutesConfig.map(route => {                       
                        return <Route {...route} key={route.path} />
                    })}
                </Switch>                
            </BrowserRouter>
        )
    }
}
