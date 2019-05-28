import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Navbar from '../components/Landing/Navbar';
import LandingPageComponent from '../components/Landing/Landing';
import LoginPageComponent from './Auth/Login';
import RegisterPageComponent from './Auth/Register';
import ParcelsComponent from './Parcels/index';



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
                        <Route exact path="/login" component={LoginPageComponent} />
                        <Route exact path="/register" component={RegisterPageComponent} />
                        <Route exact path="/dashboard" component={ParcelsComponent} />
                    </Switch>
                </Router>
            </>
        );
    }
}
export default Routes;
