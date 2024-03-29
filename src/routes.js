import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Register from './containers/Register';
import Login from './containers/Login';
import PreExamScreen from './containers/PreExamScreen';
import Exam from './containers/Exam';
import Result from './containers/Result';

class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Register} />
                    <Route path="/login" component={Login} />
                    <Route path="/pre-exam" component={PreExamScreen} />
                    <Route path="/exam" component={Exam} />
                    <Route path="/result" component={Result} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Routes