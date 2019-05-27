import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signupAction } from '../../actions/authActions';
import PropTypes from 'prop-types';
import RegisterComponent from '../../components/Auth/Register';


class Register extends Component {

    constructor() {
        super();
        this.state = {
            useremail: '',
            username: '',
            password: '',
            confirmPassword: '',
            firstname: '',
            lastname: '',
            contact: '',
            errors: {

            }
        }
    }

    handleChange = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    checkPasswordMatch = (password, confirmPassword) => {
        if (password === confirmPassword) {
            this.setState({
                errors: {}
            })
        } else {
            this.setState({
                errors: {
                    confirmPassword: "Passwords do not match"
                }
            })
        }
    }

    checkValidPhoneNumber = (phoneNumber) => {
        var alphaExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        if (phoneNumber.match(alphaExp)) {
            this.setState({
                errors: {}
            })
        } else {
            this.setState({
                errors: {
                    contact: "Wrong Format, It should be 0700162509"
                }
            })
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { signupUser } = this.props;
        const newUser = {
            "first_name": this.state.firstname,
            "last_name": this.state.lastname,
            "email": this.state.useremail,
            "phone_contact": this.state.contact,
            "username": this.state.username,
            "user_password": this.state.password,
            "user_type": "user"
        }
        this.checkPasswordMatch(this.state.password, this.state.confirmPassword);
        this.checkValidPhoneNumber(this.state.contact);
        signupUser(newUser, this.props);
        console.log(newUser);
    }

    render() {
        return (
            <div>
                <RegisterComponent
                 handleChange={this.handleChange}
                 handleSubmit={this.handleSubmit}
                 errors={this.state.errors}
                />
            </div>
        )
    }
}

Register.propTypes = {
    signupUser: PropTypes.func.isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }).isRequired,
};


export default connect(null, {
    signupUser: signupAction
})(Register)

