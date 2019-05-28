import axios from 'axios';
import { notify } from 'react-notify-toast';
import {
    CREATE_PARCEL_FAILURE,
    CREATE_PARCEL_SUCCESS,
    GET_PARCEL_ORDERS_SUCCESS,
    GET_PARCEL_ORDERS_FAILURE,

} from './types';


const createParcelFailure = err => ({
    type: CREATE_PARCEL_FAILURE,
    payload: err,
});

const createParcelSuccess = response => ({
    type: CREATE_PARCEL_SUCCESS,
    payload: response,
});

const getUserParcelsFailure = err => ({
    type: GET_PARCEL_ORDERS_FAILURE,
    payload: err,
});

const getUserParcelSuccess = response => {
    return {
    type: GET_PARCEL_ORDERS_SUCCESS,
    payload: response,
}};

const { baseURL } = process.env;

const Header = {
    headers: {
        token: `${localStorage.getItem('token_generated')}`,
        Accept: 'application/json',
        'Content-type': 'application/json',
    },
};

export const createParcel = (
    parcelData,
    props,
) => dispatch => axios.post(`${baseURL}parcels`, parcelData, Header)
    .then((response) => {
        dispatch(createParcelSuccess(response.data.message));
        props.history.push('/orders');
        notify.show(response.data.message, 'success', 4000);
    }).catch((err) => {
        dispatch(createParcelFailure(err.response.data.message));
        notify.show('Errors have occured', 'error', 4000);
    });

export const getUserParcelOrders = () => dispatch => axios.get(`${baseURL}users/parcels`, Header)
    .then((response) => {
        dispatch(getUserParcelSuccess(response.data));
        props.history.push('/orders');
    }).catch((err) => {
        dispatch(getUserParcelsFailure(err.data.message));
        notify.show('Errors have occured', 'error', 4000);
    });
