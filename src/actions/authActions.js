import axios from 'axios';
import { notify } from 'react-notify-toast';
import {
    AUTHENTICATION_SUCCESS,
    AUTHENTICATION_ERROR,

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

export const signInAction = (
    loginData,
    props,
) => dispatch => axios.post(`${baseURL}auth/login`, loginData)
    .then((response) => {
        dispatch(signInSuccess(response));
        localStorage.setItem('token_generated', response.data.login_message.token_generated);
        localStorage.setItem('user_role', response.data.login_message.user_role);
        localStorage.setItem('username', response.data.login_message.username);             
        props.history.push('/dashboard');
        notify.show(response.data.login_message.message, 'success', 4000);
    }).catch((err) => {
        dispatch(signInFailure(err.response.data.login_message.message));
        notify.show(err.response.data.login_message.message, 'error', 4000);
    });
