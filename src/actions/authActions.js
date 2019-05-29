import axios from 'axios';
import { toast } from 'react-toastify';
import {
    AUTHENTICATION_SUCCESS,
    AUTHENTICATION_ERROR,
    SIGNUP_FAILURE,
    SIGNUP_SUCCESS,
    LOGOUT_USER,

} from './types';

const { baseURL }  =  process.env;

const signInFailure = err => ({
    type: AUTHENTICATION_ERROR,
    payload: err,
});

const signInSuccess = response => ({
    type: AUTHENTICATION_SUCCESS,
    payload: response.data,
});

const signUpFailure = err => ({
    type: SIGNUP_FAILURE,
    payload: err,
});

const signUpSuccess = response => ({
    type: SIGNUP_SUCCESS,
    payload: response.data,
});

export const signInAction = (
    loginData,
    props,
   ) => dispatch => axios.post(`${baseURL}auth/login`, loginData)
    .then((response) => {
        dispatch(signInSuccess(response));
        localStorage.setItem('token_generated', response.data.login_message.token_generated);
        localStorage.setItem('user_role', response.data.login_message.user_role);
        localStorage.setItem('username', response.data.login_message.username); 
        toast.success(response.data.login_message.message, 'success', 4000);          
        props.history.push('/dashboard');
    }).catch((err) => {
        dispatch(signInFailure(err.response.data.login_message.message));
        toast.error(err.response.data.login_message.message, 'error', 4000);
    });

export const signupAction = (
    signupData,
    props,
) => dispatch => axios.post(`${baseURL}auth/signup`, signupData)
    .then((response) => {
        dispatch(signUpSuccess(response));
        toast.success(response.data.message);
        props.history.push('/login');
    }).catch((err) => {
        dispatch(signUpFailure(err.response.data.login_message.message));
        toast.error(err.response.data.message, 'error', 4000);
    });

// Log user out
export const signOutUser = () => dispatch => {
    localStorage.clear();
    dispatch({
        type: LOGOUT_USER,
        payload: false,
    });

}
