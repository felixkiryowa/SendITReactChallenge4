import {
    CREATE_PARCEL_FAILURE,
    CREATE_PARCEL_SUCCESS,
    GET_PARCEL_ORDERS_SUCCESS,
    GET_PARCEL_ORDERS_FAILURE,

} from '../actions/types';


const initialState = {
    parcels: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case CREATE_PARCEL_SUCCESS:
            return { ...state, message: action.payload };
        case CREATE_PARCEL_FAILURE:
            return { ...state, error: action.payload };
        case GET_PARCEL_ORDERS_SUCCESS:
            return { ...state, parcels: action.payload };
        case GET_PARCEL_ORDERS_FAILURE:
            return { ...state, error: action.payload };
        default:
            return state;
    }
}
