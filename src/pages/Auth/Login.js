import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { signInAction } from '../../actions/authActions';
import { connect } from 'react-redux';
import LoginPage from '../../components/Auth/Login';


export class Login extends Component {

    constructor() {
        super();
        this.state = {
            username:'',
            password: '',
            errors : {

            }
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { loginUser } = this.props;
        const loginData = {
            "username": this.state.username,
            "password": this.state.password
        }
        loginUser(loginData, this.props);
    }

    handleUsernameChange = (event) => {
        event.preventDefault();
        this.setState({ username: event.target.value });
    }

    handlePasswordChange = (event) => {
        event.preventDefault();
        this.setState({ password: event.target.value });
    }

    render() {
        return (
            <div>
                <LoginPage
                    handleSubmit= {this.handleSubmit}
                    handlePasswordChange ={ this.handlePasswordChange }
                    handleUsernameChange= { this.handleUsernameChange }
                    errors={ this.state.errors }
                    username={ this.state.username }
                    password={ this.state.password }
                 />
            </div>
        )
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }).isRequired,
};

export default connect(null, {
    loginUser: signInAction
})(Login);
