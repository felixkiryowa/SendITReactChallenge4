import {
    CREATE_PARCEL_FAILURE,
    CREATE_PARCEL_SUCCESS,

} from '../actions/types';


const initialState = {};

export default function (state = initialState, action) {
    switch (action) {
        case CREATE_PARCEL_SUCCESS:
            return { ...state, message: action.payload };
        case CREATE_PARCEL_FAILURE:
            return { ...state, error: action.payload };
        default:
            return state;
    }
}
