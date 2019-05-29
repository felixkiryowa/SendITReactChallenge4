import axios from 'axios';
import { toast } from 'react-toastify';
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
        toast.success(response.data.message, 'success', 4000);
    }).catch((err) => {
        dispatch(createParcelFailure(err.response.data.message));
        toast.error('Errors have occured', 'error', 4000);
    });

export const getUserParcelOrders = () => dispatch => axios.get(`${baseURL}users/parcels`, Header)
    .then((response) => {
        dispatch(getUserParcelSuccess(response.data));
    }).catch((err) => {
        dispatch(getUserParcelsFailure("Errors have occured"));
        toast.error('Errors have occured', 'error', 4000);
    });
