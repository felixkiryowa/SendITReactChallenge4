import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Navbar from '../components/Landing/Navbar';
import LandingPageComponent from '../components/Landing/Landing';
import LoginComponent from './Auth/Login';


class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <>
                <Router>
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={LandingPageComponent} />
                        <Route exact path="/login" component={LoginComponent} />
                    </Switch>
                </Router>
            </>
        );
    }
}
export default Routes;
