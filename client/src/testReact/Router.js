import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LoginForm from "./LoginForm";

export default class Router extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route path="/login" component= {LoginForm}/>
                </Switch>
            </main>
        )
    }
}