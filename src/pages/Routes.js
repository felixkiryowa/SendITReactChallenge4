import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import LandingPageComponent from '../components/Landing/LandingPage';


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
                    <Switch>
                        <Route exact path="/" component={LandingPageComponent} />
                    </Switch>
                </Router>
            </>
        );
    }
}
export default Routes;
